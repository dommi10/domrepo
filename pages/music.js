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
      <PageSeo title={`${t("common:music")} - ${t("common:title")}`} description={t("common:music")} />

      <h1 className="destinationtitle text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:px-6">
            {t("common:music")}</h1>

      <div class="row">

<table class="table-fill">
<thead>
<tr>
<th class="text-left">Name</th>
<th class="text-left">Producer</th>
<th class="text-left">Released</th>
<th class="text-left">Listen</th>
</tr>
</thead>
<tbody class="table-hover">
<tr>
<td class="text-left">Light Up The Night</td>
<td class="text-left">Tristan</td>
<td class="text-left">2013/08/24</td>
<td class="text-left">Unavailable</td>
</tr>
<tr>
<td class="text-left">Get Up</td>
<td class="text-left">Steven Morales (Cover)</td>
<td class="text-left">2013/08/09</td>
<td class="text-left">Unavailable</td>
</tr>
<tr>
<td class="text-left">Zarabate Ghalam</td>
<td class="text-left">2Deep</td>
<td class="text-left">2009/06/25</td>
<td class="text-left">Unavailable</td>
</tr>
<tr>
<td class="text-left">Khaterate Koodaki</td>
<td class="text-left">2Deep</td>
<td class="text-left">2008/01/20</td>
<td class="text-left">Unavailable</td>
</tr>
<tr>
<td class="text-left">Touch The Sky</td>
<td class="text-left">2Deep</td>
<td class="text-left">2007/03/12</td>
<td class="text-left">Unavailable</td>
</tr>
</tbody>
</table>

<h1 className="destinationtitle text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:px-6">
            {t("common:remix")}</h1>


<table class="table-fill">
<thead>
<tr>
<th class="text-left">Name</th>
<th class="text-left">Info</th>
<th class="text-left">Artwork</th>
<th class="text-left">Link</th>
</tr>
</thead>
<tbody class="table-hover">
<tr>
<td class="text-left">Shadmehr Aghili’s Songs</td>
<td class="text-left">Remix By Vahid Takro</td>
<td class="text-left"><a href="https://www.vahidtakro.com/files/music/cover/Shadmehr%20Aghili%27s%20Songs%20(Remix%20By%20Vahid%20Takro).jpg">Cover</a></td>
<td class="text-left"><a href="https://www.vahidtakro.com/files/music/Shadamehr%20Aghili%20-%20Remix%20By%20Vahid%20Takro.mp3">Download</a></td>
</tr>
<tr>
<td class="text-left">Shadmehr Aghili & Ebi – A Dream</td>
<td class="text-left">Remix By Vahid Takro</td>
<td class="text-left"><a href="https://www.vahidtakro.com/files/music/cover/Shadmehr%20Aghili%20&%20Ebi%20-%20A%20Dream%20(Remix%20By%20Vahid%20Takro).jpg">Cover</a></td>
<td class="text-left"><a href="https://www.vahidtakro.com/files/music/Shadmehr%20Aghili%20&%20Ebi%20-%20A%20Dream%20(Remix%20By%20Vahid%20Takro).mp3">Download</a></td>
</tr>
</tbody>
</table>



      </div>

    </>
  )
}


