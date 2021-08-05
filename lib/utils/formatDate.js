import siteMetadata from '@/data/siteMetadata'
import useTranslation from 'next-translate/useTranslation' //used to get locale

const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  let { t } = useTranslation(); //userd to get locale
  // const now = new Date(date).toLocaleDateString(siteMetadata.locale, options)
  const now = new Date(date).toLocaleDateString(t("common:locale"), options)

  return now
}

export default formatDate
