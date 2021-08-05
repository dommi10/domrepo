import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { locale } from '@/data/siteMetadata'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('blog')

  // create an array for en langage mdx
  const endPost = posts.map((p) => ({
    params: {
      slug: formatSlug(p).split('/'),
    },
    locale: 'en',
  }))

  // create an array for  fa langage mdx
  const faPost = posts.map((p) => ({
    params: {
      slug: formatSlug(p).split('/'),
    },
    locale: 'fa',
  }))

  // merge two arrays to create final paths
  const final = [...endPost, ...faPost]

  return {
    paths: final.map((p) => p),

    fallback: false,
  }
}

export async function getStaticProps({ params, locale }) {
  const allPosts = await getAllFilesFrontMatter('blog', locale)

  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  // adding local as 3 parameter
  const post = await getFileBySlug('blog', params.slug.join('/'), locale)
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author], locale)
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  const rss = generateRss(allPosts)
  fs.writeFileSync('./public/feed.xml', rss)

  return { props: { post, authorDetails, prev, next } }
}

export default function Blog({ post, authorDetails, prev, next }) {
  const { mdxSource, frontMatter } = post

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
