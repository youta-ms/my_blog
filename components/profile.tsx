import { Title } from "@/components/texts";
import { Wrapper } from "@/components/common/wrapper";
import { Side } from "@/components/layouts/side";
import Link from "next/link";
import { NextSeo } from "next-seo";
import blogConfig from "@/blog.config"

export function ProfileComponent() {
  return (
    <Wrapper>
      <div className="main">
        <Title>プロフィール</Title>
        <div className="container">
          <div>
            <p>こんにちは。<br />当ブログを運用しているYoutaです。<br />今更ですがこのブログを運営している私自身のプロフィールについて記事を投稿します。</p>
            <p>この記事では</p>
            <ul>
              <li>Youtaの経歴</li>
              <li>当ブログについて</li>
            </ul>
            <p>について触れようと思います。</p>
            <h2>Youtaの経歴</h2>
            <p>私は2020年に新卒で地元のIT企業に就職してから現在に至るまでずっとWebエンジニアを続けています。</p>
            <p>転職を4回経験し、内訳で言うと以下のような感じです。</p>
            <table>
              <thead>
                <tr>
                  <th>年月</th>
                  <th>会社</th>
                  <th>使用言語</th>
                  <th>CMS/フレームワーク</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2020年4月</td>
                  <td>受託系IT企業</td>
                  <td>HTML、CSS、JS（JavaScript）、PHP</td>
                  <td>WordPress、Laravel</td>
                </tr>
                <tr>
                  <td>2021年4月</td>
                  <td>受託系の子会社</td>
                  <td>HTML、CSS、JS（JavaScript）、PHP</td>
                  <td>WordPress、Laravel</td>
                </tr>
                <tr>
                  <td>2022年1月</td>
                  <td>受託系IT企業</td>
                  <td>HTML、CSS、JS（JavaScript）、PHP、Vue.js</td>
                  <td>Laravel</td>
                </tr>
                <tr>
                  <td>2022年11月</td>
                  <td>受託系＆SES企業</td>
                  <td>HTML、CSS、JS（JavaScript）、PHP、React、Next.js</td>
                  <td>Ruby on rails</td>
                </tr>
              </tbody>
            </table>
            <p>担当したことのある工程は</p>
            <ul>
              <li>詳細設計</li>
              <li>開発</li>
              <li>保守・運用</li>
            </ul>
            <p>の3つになります。</p>

            <h2>当ブログについて</h2>

            <p>当ブログは</p>
            <ul>
              <li>Web制作に関連すること</li>
              <li>便利と感じたものの紹介</li>
            </ul>
            <p>等自分がエンジニアとして生きていく中でみなさんいとって有益になるのではと感じたことをできるだけ分かりやすく発信・紹介しているブログです。</p>

            <p>ブログのタイトルである「Youtaの雑記ブログ」とは、私がエンジニアとして経験なかでみなさんの有益になるであろう知識を発信・紹介していくという感じです。</p>

            <p>このブログを読んでいて</p>
            <ul>
              <li>ご意見・ご感想</li>
              <li>Youtaへお問い合わせ</li>
            </ul>
            <p>がありましたら、以下のお問い合わせフォームからお問い合わせください。</p>

            <Link href="/contact">お問い合わせ</Link>

            <p>ただ、すべてのお問い合わせのお返事にお応えするお約束はできません。予めご了承ください。</p>
          </div>
        </div>
      </div>
      <Side />
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
            :global(table) {
              margin: 1.2rem 0;
              width: auto;
              border-collapse: collapse;
              font-size: 0.95em;
              line-height: 1.7;
            }
            :global(th),
            :global(td) {
              padding: 0.5rem .5vw;
              border: solid 1px var(--c-gray);
              font-size: clamp(16px, .5vw, 32px);
              word-break: keep-all;
            }
            :global(th) {
              font-weight: 700;
              background: var(--gray2);
            }
          }
        `}
      </style>
    </Wrapper>
  )
}