import Document, { Html, Head, Main, NextScript } from 'next/document'
import { googleTagManagerId, publisherId } from '@/blog.config';
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <Script
            async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${publisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
        </Head>
        <body>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0"
            width="0"
            className="google_tag"
          />
          <Main />
          <NextScript />
          <style>
            {`
              body {
                position: relative;
              }
              .google_tag {
                display:none;
                visibility:hidden
              }
            `}
          </style>
        </body>
      </Html>
    )
  }
}

export default MyDocument;
