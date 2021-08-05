import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Destination from '@/components/Destination'
import siteMetadata from '@/data/siteMetadata'
import { getAllDestinations } from '@/lib/destinations'
import kebabCase from '@/lib/utils/kebabCase'
import useTranslation from 'next-translate/useTranslation'

export async function getStaticProps() {
  const destinations = await getAllDestinations('blog')

  return { props: { destinations } }
}

export default function Destinations({ destinations }) {
  const sortedDestinations = Object.keys(destinations).sort((a, b) => destinations[b] - destinations[a])
  let { t } = useTranslation();
  return (
    <>
      <PageSeo title={`${t("common:destinations")} - ${t("common:title")}`} description={t("common:destinations")} />

      <h1 className="destinationtitle text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:px-6">
            {t("common:destinations")}</h1>

      <div class="row">
        <div class="columnmap1">
              <div className="flex flex-wrap max-w-lg menumap">
                {Object.keys(destinations).length === 0 && t("common:nodestinations") }
                {sortedDestinations.map((t) => {
                  return (
                    <div key={t} className="mt-2 mb-2 mr-5">
                      <Destination text={t} />
                      <Link
                        href={`/destinations/${kebabCase(t)}`}
                        className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                      >
                        {` (${destinations[t]})`}
                      </Link>
                    </div>
                  )
                })}
              </div>
        </div>


        <div class="columnmap2">
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
      </div>
      
      <iframe src="https://vahidtakro.travelmap.net" 
        width="100%" 
        height="600" 
        frameborder="0" 
        allowfullscreen>
      </iframe>

    </>
  )
}


