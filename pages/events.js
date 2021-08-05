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

export default function Music() {
  let { t } = useTranslation();
  return (
    <>
      <PageSeo title={`${t("common:events")} - ${t("common:title")}`} description={t("common:events")} />

      <h1 className="destinationtitle text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:px-6">
            {t("common:events")}</h1>

      <div class="row">


      <script charset="utf-8" src="https://widget.bandsintown.com/main.min.js"></script><a class="bit-widget-initializer" data-artist-name="vahidtakro" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false" data-text-color="#000000" data-link-color="#2369c7" data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-display-start-time="true" data-link-text-color="#FFFFFF" data-display-lineup="false" data-display-play-my-city="true" data-separator-color="rgba(255, 255, 255, 0.5)"></a>



      </div>

    </>
  )
}


