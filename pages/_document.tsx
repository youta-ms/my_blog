import Document, { Html, Head, Main, NextScript } from 'next/document'
import { googleTagManagerId, publisherId } from '@/blog.config';
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'

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
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
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
