import Document, { Html, Head, Main, NextScript } from 'next/document'
import {googleTagManagerId} from '@/utils/gtm';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
        </Head>
        <body>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
          height="0"
          width="0"
          className="tag"
        />
          <Main />
          <NextScript />
          <style>
            {`
              body {
                position: relative;
              }
              .tag {
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
