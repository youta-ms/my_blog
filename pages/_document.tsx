import Document, { Html, Head, Main, NextScript } from 'next/document'
import { googleTagManagerId } from '@/utils/gtm';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* 1: Google Tag Manager ---------------------------- */}
          <script dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${googleTagManagerId}');`,
          }}/>
          {/* -------------------------------------------------- */}
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
