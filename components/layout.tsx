import { library } from "@fortawesome/fontawesome-svg-core";
import { DefaultSeo, NextSeoProps } from "next-seo";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { Comp } from "@/components/layouts/comp";
import blogConfig from "@/blog.config";
import {googleTagManagerId} from '@/utils/gtm';

const faviconPath = `${blogConfig.siteUrl}/favicon`;

const nextSeoConfig: NextSeoProps = {
  openGraph: {
    type: "website",
    site_name: blogConfig.siteName,
    title: blogConfig.title,
    images: [
      {
        url: `${blogConfig.siteUrl}/images/ogp.png`,
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  defaultTitle: blogConfig.title,
  titleTemplate: `%s | ${blogConfig.title}`,
  description: blogConfig.description,
  additionalLinkTags: [],
};

library.add(faTwitter, faInstagram, faGithub);

export function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <DefaultSeo {...nextSeoConfig} />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
      <Comp />
    </>
  );
}
