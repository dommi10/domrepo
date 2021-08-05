import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllDestinations } from '@/lib/destinations'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'
import useTranslation from 'next-translate/useTranslation'

const root = process.cwd()

export async function getStaticPaths() {
  const destinations = await getAllDestinations('blog')

  return {
    paths: Object.keys(destinations).map((destination) => ({
      params: {
        destination,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.destinations.map((t) => kebabCase(t)).includes(params.destination)
  )

  // rss
  const rss = generateRss(filteredPosts, `destinations/${params.destination}/feed.xml`)
  const rssPath = path.join(root, 'public', 'destinations', params.destination)
  fs.mkdirSync(rssPath, { recursive: true })
  fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)

  return { props: { posts: filteredPosts, destination: params.destination } }
}

export default function Destination({ posts, destination }) {
  // Capitalize first letter and convert space to dash
  const title = destination[0].toUpperCase() + destination.split(' ').join('-').slice(1)
  let { t } = useTranslation();
  return (
    <>
      <PageSeo
        title={`${title} - ${t("common:title")}`}
        description={`${t(`common:${destination}`)}`}
      />

      {destination ? <h3>{t(`common:${destination}`)}</h3> : null}
      <ListLayout posts={posts} title={title} />
    </>
  )
}
