import { Layout } from "@/components/layout";
import { Title } from "@/components/texts";
import { Wrapper } from "@/components/common/wrapper";
import { Side } from "@/components/layouts/side";
import Link from "next/link";
import { NextSeo } from "next-seo";
import blogConfig from "@/blog.config"

const Privacy = () => {
  return (
    <Layout>
      <NextSeo
        title="プライバシーポリシー"
        description="Youtaの雑記ブログのプライバシーポリシーです。"
        openGraph={{
          title: "プライバシーポリシー",
          description: "Youtaの雑記ブログのプライバシーポリシーです。",
          type: "article",
          images: [
            {
              url: `${blogConfig.siteUrl}/images/privacy.jpg`,
            },
          ],
        }}
      />
      <Wrapper>
        <div className="main">
          <Title>プライバシーポリシー</Title>
          <div className="container">
          <p>本プライバシーポリシーは、Youtaの雑記ブログ（<Link href="https://youta-ms.online">https://youta-ms.online</Link>）（以下、「当サイト」とします。）の各種サービス（当サイトによる情報提供、各種お問合せの受付等）において、当サイトの訪問者（以下、「訪問者」とします。）の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。</p>

          <h2>1．基本方針</h2>
          <p>当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サイトで取扱う個人情報の取得、利用、管理を適正に行います。当サイトで収集した情報は、利用目的の範囲内で適切に取り扱います。</p>

          <h2>2．適用範囲</h2>
          <p>本プライバシーポリシーは、当サイトにおいてのみ適用されます。</p>

          <h2>3．個人情報の取得と利用目的</h2>
          <p>当サイトで取得する訪問者の個人情報と利用目的、保存期間等は下記の通りです。</p>

          <h3>3-1．お問い合せされた個人情報を取得します</h3>
          <p>当サイトではお問い合わせフォームを設けています。</p>

          <p>訪問者がそのお問い合わせフォームから問い合わせをされた際に入力された、以下の個人情報を取得します。</p>

          <ul>
            <li>お問い合わせフォームに入力された名前（HN）</li>
            <li>お問い合わせフォームに入力されたメールアドレス</li>
            <li>お問い合わせフォームに入力されたお問合せ内容</li>
          </ul>

          <h4>✔3-1-1．利用目的について</h4>

          <p>お問い合わせ対応をするためと、訪問者の管理のためです。訪問者からのお問い合わせ情報を保存しておくことによって、同じ訪問者が別のお問い合わせをした際に、過去の問い合わせ内容を踏まえた対応をすることが出来、より的確な対応をすることが出来ます。</p>

          <p>また、当サイト内で「このようなお問合せがありました」と紹介させていただく場合もあります。</p>

          <h4>✔3-1-2．保存期間について</h4>

          <p>お問い合わせフォームに入力された個人情報は、3年間保存します。</p>

          <h4>✔3-1-3．個人情報取得の同意について</h4>

          <p>当サイトでは、お問い合わせフォームからお問い合わせをする前に、当プライバシーポリシーをご一読いただくよう案内しています。</p>

          <p>お問い合わせをされた時点で、その訪問者は当プライバシーポリシーに同意されたとみなします。</p>

          <h3>3-2．Cookieによる個人情報の取得</h3>

          <p>当サイトは、訪問者のコンピュータにCookieを送信することがあります。</p>

          <p>Cookie（クッキー）とは、ウェブサイトを利用したときに、ブラウザとサーバーとの間で送受信した利用履歴や入力内容などを、訪問者のコンピュータにファイルとして保存しておく仕組みです。</p>

          <h4>✔3-2-1．利用目的について</h4>

          <p>訪問者の当サイト閲覧時の利便性を高めるためです。</p>

          <p>たとえば、次回同じページにアクセスするとCookieの情報を使って、ページの運営者は訪問者ごとに表示を変えることができます。</p>

          <p>訪問者がブラウザの設定でCookieの送受信を許可している場合、ウェブサイトは、訪問者のブラウザからCookieキーを取得できます。</p>

          <p>なお、訪問者のブラウザはプライバシー保護のため、そのウェブサイトのサーバーが送受信したCookieのみを送信します。</p>

          <h4>✔3-2-2．保存期間について</h4>

          <p>当サイトに残されたコメントのCookieは、1年間保存されます。</p>

          <h4>✔3-2-3．第三者によるCookie情報の取得について</h4>

          <p>当サイトでは、グーグルやヤフーなどをはじめとする第三者から配信される広告が掲載される場合があります。</p>

          <p>当該第三者は訪問者のCookie情報等を使用して、訪問者がそのウェブサイトや他のウェブサイトに過去にアクセスした際の情報に基づいて、訪問者に適切な広告を配信できます。</p>

          <p>当該第三者によって取得されたCookie情報等は、当該第三者のプライバシーポリシーに従って取り扱われます。</p>

          <h4>✔3-2-4．第三者へのCookie情報等の広告配信の利用停止について</h4>

          <p>訪問者は、当該第三者のウェブサイト内に設けられたオプトアウト（個人情報を第三者に提供することを停止する）ページにアクセスして、当該第三者によるCookie情報等の広告配信への利用を停止することができます。</p>

          <h4>✔3-2-5．Cookie情報の送受信の許可・拒否について</h4>

          <p>訪問者は、Cookieの送受信に関する設定を「すべてのCookieを許可する」、「すべてのCookieを拒否する」、「Cookieを受信したらユーザーに通知する」などから選択できます。設定方法は、ブラウザにより異なります。Cookieに関する設定方法は、お使いのブラウザの「ヘルプ」メニューでご確認ください。</p>

          <p>すべてのCookieを拒否する設定を選択されますと、認証が必要なサービスを受けられなくなる等、インターネット上の各種サービスの利用上、制約を受ける場合があります。</p>

          <h2>4．個人情報の管理</h2>
          <p>当サイトは、訪問者からご提供いただいた情報の管理について、以下を徹底します。</p>

          <h3>4-1. 情報の正確性の確保</h3>
          <p>訪問者からご提供いただいた情報については、常に正確かつ最新の情報となるよう努めます。</p>

          <h3>4-2. 安全管理措置</h3>
          <p>当サイトは、個人情報の漏えいや滅失又は棄損を防止するために、適切なセキリュティ対策を実施して個人情報を保護します。</p>

          <h3>4-3. 個人情報の廃棄</h3>
          <p>個人情報が不要となった場合には、すみやかに廃棄します。</p>

          <h3>4-4. 個人情報の開示、訂正、追加、削除、利用停止</h3>
          <p>訪問者ご本人からの個人情報の開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。</p>

          <p>上記を希望される場合は、お問い合わせフォームよりご連絡ください。</p>

          <h2>5．個人情報の第三者への提供について</h2>
          <p>当サイトは、訪問者からご提供いただいた個人情報を、訪問者本人の同意を得ることなく第三者に提供することはありません。また、今後第三者提供を行うことになった場合には、提供する情報と提供目的などを提示し、訪問者から同意を得た場合のみ第三者提供を行います。</p>

          <h2>6．未成年の個人情報について</h2>
          <p>未成年者が当サイトにコメントをしたり、お問い合わせフォームから問い合わせをされたりする場合は必ず親権者の同意を得るものとし、コメントやお問い合わせをされた時点で、当プライバシーポリシーに対して親権者の同意があるものとみなします。</p>

          <h2>7．お問い合わせ先</h2>
          <p>当サイト、又は個人情報の取扱いに関しては、お問い合わせフォームよりご連絡ください。</p>

          <p>当サイト運営者：Youta</p>
          <p>連絡先：<Link href="https://youta-ms.online/contact">お問い合わせフォーム</Link></p>

          <h2>8．アクセス解析ツールについて</h2>
          <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>

          <p>このGoogleアナリティクスはアクセス情報の収集のためにCookieを使用しています。このアクセス情報は匿名で収集されており、個人を特定するものではありません。</p>

          <p>GoogleアナリティクスのCookieは、26ヶ月間保持されます。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。</p>

          <p>Googleアナリティクスの利用規約は <Link href="https://marketingplatform.google.com/about/analytics/terms/jp/">こちら</Link> から確認できます。また、「ユーザーが Google パートナーのサイトやアプリを使用する際の Google によるデータ使用」に関して確認したい場合は、<Link href="https://policies.google.com/technologies/partner-sites?hl=ja">こちら</Link> をご覧ください。</p>

          <h2>9．第三者配信の広告サービスについて</h2>
          <p>当サイトは、第三者配信の広告サービス「Google Adsense（グーグルアドセンス）」を利用しています。</p>

          <p>Googleなどの第三者広告配信事業者は、訪問者の興味に応じた広告を表示するために、Cookie（当サイトの訪問者が当サイトや他のサイトにアクセスした際の情報など）を使用することがあります。</p>

          <p>訪問者は、広告設定で訪問者に合わせた広告（以下、「パーソナライズド広告」とします。）を <Link href="https://myadcenter.google.com/home?sasb=true&ref=ad-settings">こちら</Link> で無効にすることが出来ます。また、<Link href="www.aboutads.info">www.aboutads.info</Link> にアクセスすれば、パーソナライズド広告に使われる第三者配信事業者の Cookie を無効にできます。</p>

          <p>第三者配信による広告掲載を無効にしていない場合は、第三者配信事業者や広告ネットワークの配信する広告がサイトに掲載されることがあります。</p>

          Googleによって広告の第三者配信が認められている広告配信事業者の詳細は、<Link href="https://support.google.com/admanager/answer/94149">こちら</Link> で確認できます。

          <h2>10．Amazonの広告配信について</h2>
          <p>Amazonのアソシエイトとして、Youtaは適格販売により収入を得ています。</p>

          <p>第三者（Amazonや他の広告掲載者）がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにCookieを設定したり、認識したりする場合があります。</p>

          <h2>11．プライバシーポリシーの変更について</h2>
          <p>当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。</p>

          <p>令和5年8月8日　策定</p>

          <p>令和5年8月8日　改訂</p>
          </div>
        </div>
        <Side />
      </Wrapper>
      <style jsx>
        {`
          .main {
            width: calc(100% - (25% + 80px));
            margin-right: 50px;
            word-break: break-all;
            padding: 32px;
            background: var(--c-white);

            @media screen and (max-width: ${blogConfig.styles.breakPoints
              .medium}) {
              margin-right: 0;
              width: 100%;
              padding: 32px 0;
            }
          }

          .container {
            width: 84%;
            max-width: 640px;
            margin: 0 auto;

            :global(a) {
              color: var(--c-primary);
              text-decoration: underline;
              &:hover {
                color: var(--c-primary-hover);
              }
            }
            :global(p) {
              margin-top: 1.6rem;
              color: var(--c-text);
              line-height: 1.6;
            }
            :global(ul),
            :global(ol) {
              margin: 1.4rem 0;
              line-height: 1.5;
              & > :global(li) {
                margin: 0.6rem 0;
              }
              :global(ul),
              :global(ol) {
                margin: 0.2em 0;
              }
              :global(p) {
                margin: 0;
              }
            }

            :global(ul) {
              padding-left: 0;
              & > :global(li) {
                list-style: none;
                list-style-position: inside;
                position: relative;
                padding-left: 1.5em;

                &:before {
                  content: "";
                  display: block;
                  position: absolute;
                  top: 0.7em;
                  left: 0.3em;
                  width: 7px;
                  height: 7px;
                  border-radius: 50%;
                  background: var(--c-primary);
                }
                li:before {
                  background: var(--c-primary);
                }
              }
            }
            :global(ul:not(li ul,.toc-list,dd ul,.widget ul)) {
              background: #F7F7F7;/*背景色*/
              line-height:2;
              border-radius: 4px;
              border:1.5px solid;
              border-color: var(--c-primary); /*枠の色*/
              padding: 1.5em;
              padding-left:3em;

              @media (min-width: 640px) {
                padding-left:2.5em;
              }

              & > :global(li) {
                list-style: none;
                list-style-position: inside;
                position: relative;
                padding-left: 1.5em;
                margin: 0em;

                &:before {
                  content: "";
                  display: block;
                  position: absolute;
                  top: 0.7em;
                  left: 0.3em;
                  width: 7px;
                  height: 7px;
                  border-radius: 50%;
                  background: var(--c-primary);
                }
                li:before {
                  background: var(--c-primary);
                }
              }
            }
            :global(ol:not(li ol,.toc-list,dd ol,.widget ol)) {
              background: #F7F7F7;/*背景色*/
              line-height:2;
              border-radius: 4px;
              border:1.5px dashed;
              border-color: var(--c-primary); /*枠の色*/
              padding: 1.5em;
              padding-left:3em;

              @media (min-width: 640px) {
                padding-left:2.5em;
              }
            }

            :global(h1),
            :global(h2),
            :global(h3),
            :global(h4),
            :global(h5),
            :global(h6) {
              &  :global(p) {
                margin-top: 0.3em;
              }
            }

            :global(h1),
            :global(h2) {
              margin-top: 2.3em;
              margin-bottom: 0.5em;
            }
            :global(h3),
            :global(h4),
            :global(h5),
            :global(h6) {
              margin-top: 2.3em;
              margin-bottom: 0.5em;
            }
            :global(h1) {
              padding-bottom: 0.3em;
              margin-bottom: 1.1rem;
              font-size: 1.7em;
              position: relative;
              border-bottom: solid 1px var(--gray2);
            }
            :global(h2) {
              line-height: 1.5;
              background-color: var(--c-primary);
              font-size: 1.7em;
              color: var(--c-white);
              border-radius: 1px;
              padding: 0.5em 1em;

              :before {
                background-image: none;
              }

              @media (max-width: 480px) {
                padding:1.5em 1em 1.5em 0.5em;
              }
            }
            :global(h3) {
              line-height: 2;
              font-size: 1.3em;
              border: none;
              color:#333333;
              border-radius: 2px;
              border-left:10px solid var(--c-primary);/*H3の色の変更はこちら*/
              padding: 0.4em 0.8em;
              margin-top: 2em;
              background-color: var(--c-gray);

              :before {
                width: 0em;
              }
            }
            :global(h4) {
              line-height:2;
              background-color:#F6F6F6;/*H4背景色の変更はこちら*/
              font-size: 1.1em;
              font-weight:bold;
              color:#333333;
              border-radius:1px;
              padding:1em;
              margin-top:1.5em;
              margin-bottom:1.5em;
            }
            :global(h5) {
              background: #F7F7F7;/*H5背景色の変更はこちら*/
              font-size: 1em;
              font-weight:bold;
              line-height:2;
              color:#333333;
              border-bottom: none;
              border-radius: 4px;
              padding: 1.5em;
              margin-left:0 auto;
              border:1.5px dashed;
              border-color:#93b69c;/*H5枠色の変更はこちら*/
              margin-top:1.5em;
              margin-bottom:1.5em;
            }
            :global(h5),
            :global(h6) {
              color: var(--gray2);
            }
            :global(h6) {
              font-size: 0.85em;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Privacy;
