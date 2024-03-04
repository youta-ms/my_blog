import { Layout } from "@/components/layout";
import { Title } from "@/components/texts";
import { Wrapper } from "@/components/common/wrapper";
import { Side } from "@/components/layouts/side";
import Link from "next/link";
import { NextSeo } from "next-seo";
import blogConfig from "@/blog.config"

const Terms = () => {
  return (
    <Layout>
      <NextSeo
        title="免責事項"
        description="Youtaの雑記ブログの免責事項です。"
        openGraph={{
          title: "免責事項",
          description: "Youtaの雑記ブログの免責事項です。",
          type: "article",
          images: [
            {
              url: `${blogConfig.siteUrl}/images/logo.png`,
            },
          ],
        }}
      />
      <Wrapper>
        <div className="main">
          <Title>免責事項</Title>
          <div className="container">
          <p>Youtaの雑記ブログ.(<Link href="https://youta-ms.online">https://youta-ms.online</Link>)(以下、「当サイト」とします。)における免責事項は、下記の通りです。</p>

          <h2>1. 転載について</h2>
          <p>当サイトはリンクフリーです。リンクを貼る際の許可は必要ありません。引用についても、出典元のURLを貼っていただければ問題ありません。</p>

          <p>ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>

          <h2>2. 当サイトの情報の正確性について</h2>
          <p>当サイトのコンテンツや情報において、可能な限り正確な情報を掲載するよう努めています。しかし、誤情報が入り込んだり、情報が古くなったりすることもあります。必ずしも正確性を保証するものではありません。また合法性や安全性なども保証しません。</p>

          <h2>3. 損害等の責任について</h2>
          <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。</p>

          <p>また当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任も負いません。</p>

          <p>当サイトの保守、火災、停電、その他の自然災害、ウィルスや第三者の妨害等行為による不可抗力によって、当サイトによるサービスが停止したことに起因して利用者に生じた損害についても、何ら責任を負うものではありません。</p>

          <p>当サイトを利用する場合は、自己責任で行う必要があります。</p>

          <h2>4. 当サイトで掲載している画像の著作権や肖像権等について</h2>
          <p>当サイトで掲載している文章や画像などについて、無断転載を禁止します。</p>

          <p>当サイトで掲載している画像の著作権や肖像権等は、各権利所有者に帰属します。万が一問題がある場合は、お問い合わせよりご連絡いただけますよう宜しくお願い致します。</p>

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

export default Terms;
