import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'
import LocaleSwitcher from '../components/locale-switcher'
import useTranslation from 'next-translate/useTranslation'

const LayoutWrapper = ({ children }) => {

  const router = useRouter()
  const { locale, locales, defaultLocale } = router
  let { t } = useTranslation();

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="headerclass flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={t("common:headertitle")}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {t("common:headertitle")}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
            <LocaleSwitcher />

          </div>
        </header>
        <main className="mainclass mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
