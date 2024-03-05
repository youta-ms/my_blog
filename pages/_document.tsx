import Document, { Html, Head, Main, NextScript } from 'next/document'
import { googleTagManagerId } from '@/utils/gtm';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3991778860579469"
          crossOrigin="anonymous"></script>
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
