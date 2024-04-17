import Document, { Html, Head, Main, NextScript } from 'next/document'
import { googleTagManagerId, publisherId } from '@/blog.config';
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'
import blogConfig from "@/blog.config";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${publisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          {/* <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" /> */}
          <link rel='preload' as='image' href="https://www.afi-b.com/upload_image/9264-1524726055-3.gif" fetchPriority='high'></link>
          <link rel='preload' as='image' href="https://www.afi-b.com/upload_image/9264-1638547778-3.jpg" fetchPriority='high'></link>
          <link rel='preload' as='image' href="https://t.afi-b.com/lead/Q9264Q/H866104Y/r433259T" fetchPriority='high'></link>
          <link rel='preload' as='image' href="/images/coding.jpg" fetchPriority='high'></link>
          <link rel='preload' as='image' href="/images/docker.jpg" fetchPriority='high'></link>
          <link rel='preload' as='image' href="/images/git.jpg" fetchPriority='high'></link>
          <link rel='preload' as='image' href="/images/js.jpg" fetchPriority='high'></link>
          <link rel='preload' as='image' href="/images/laravel.jpg" fetchPriority='high'></link>
          <link rel='preload' as='image' href="/images/logo.jpg" fetchPriority='high'></link>
          <link rel='preload' as='image' href="/images/me.jpg" fetchPriority='high'></link>
          <link rel='preload' as='image' href="/images/next.jpg" fetchPriority='high'></link>
          <link rel='preload' as='image' href="/images/rails.jpg" fetchPriority='high'></link>
          <link rel='preload' as='image' href="/images/wordpress.jpg" fetchPriority='high'></link>
          <link rel='preload' as='image' href="/images/yarn.jpg" fetchPriority='high'></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <style>
            {`
              body {
                position: relative;
              }
            `}
          </style>
        </body>
        <GoogleTagManager gtmId={googleTagManagerId} />
      </Html>
    )
  }
}

export default MyDocument;
