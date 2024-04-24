import Document, { Html, Head, Main, NextScript } from 'next/document'
import { publisherId } from '@/blog.config';
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${publisherId}`}
          />
          {/* <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" /> */}
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
      </Html>
    )
  }
}

export default MyDocument;
