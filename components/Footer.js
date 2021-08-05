import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import useTranslation from 'next-translate/useTranslation'



export default function Footer() {
  let { t } = useTranslation();
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{t("common:authorname")}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{t("common:description")}</Link>
        </div>
        {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div> */}
      </div>




      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />


    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">{t("common:homepage")}</a>
          </Link>
          <Link href="/biography">
            <a className="text-gray-500 hover:text-gray-600 transition">
              {t("common:aboutme")}
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Newsletter
            </a>
          </Link>
        </div>



        <div className="flex flex-col space-y-4">
        <Link href="/music">
            <a className="text-gray-500 hover:text-gray-600 transition">{t("common:music")}</a>
          </Link>
          <Link href="/events">
            <a className="text-gray-500 hover:text-gray-600 transition">
              {t("common:events")}
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
          <Link href="/tweets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </a>
          </Link>
        </div>


        <div className="flex flex-col space-y-4">
          <Link href="/favorite-blogs">
            <a className="text-gray-500 hover:text-gray-600 transition">{t("common:favorite-blogs")}</a>
          </Link>
          <Link href="/guestboo1k">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Guestbook
            </a>
          </Link>
          <Link href="/snippe1ts">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
          <Link href="/twe1ets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </a>
          </Link>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center">
    <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="6" />
    </div>
    </div>


    </footer>
  )
}
