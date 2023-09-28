import { Layout } from "@/components/layout";
import { Title } from "@/components/texts";
import { Wrapper } from "@/components/common/wrapper";
import { Side } from "@/components/layouts/side";
import { useState } from "react";

const Contact = () => {
  const [verify, setVerify] = useState(false);

  return (
    <Layout>
      <Wrapper>
        <main className="main">
          <Title>お問い合わせ</Title>
          <div className="container">
            <form name="contact" method="POST" data-netlify="true">
              <div>
                <label htmlFor="name">お名前（必須）</label>
                <input className="input" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="email">メールアドレス（必須）</label>
                <input className="input" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="content">お問い合わせ内容</label>
                <textarea
                  name="content"
                  rows={10}
                  required
                  className="input"
                ></textarea>
              </div>
              <div className="verify">
                { verify ?
                  <input name="verification" type="checkbox" checked/>
                  :
                  <input name="verification" type="checkbox" onClick={() => setVerify(true)}/>
                }
                <label htmlFor="verification">スパムメール防止のためこちらにチェックを入れてから送信してください</label>
              </div>
              { verify ?
                <button className="btnripple" type="submit">送信する</button>
                :
                <button disabled className="btnripple disabled" type="submit">送信する</button>
              }
            </form>
          </div>
        </main>
        <Side />
      </Wrapper>
      <style jsx>
        {`
          main {
          width: 100%;
          }

          .container {
            width: 84%;
            max-width: 640px;
            margin: 0 auto;
            padding: 30px 0;
          }

          h1 {
            margin-bottom: 30px;
            text-align: center;
          }

          form {
            display: grid;
            row-gap: 30px;

            > div {
              display: grid;
            }

            label {
              margin-bottom: 10px;
            }

            .input {
              width: 100%;
              padding: 10px;
              border: solid 1px #dddddd;
              font-size: 16px;
              box-sizing: border-box;
              font-family: inherit;
              font-weight: normal;
              outline: none;
              color: currentColor;
              appearance: none;
              border-radius: 0;
              resize: none;
            }

            .verify {
              display: flex;
              align-items: center;

              label {
                margin: 0;
              }
            }

            /* クリックしたら波紋が広がる */
            .btnripple{
              /*波紋の基点とするためrelativeを指定*/
              position: relative;
              /*はみ出す波紋を隠す*/
              overflow: hidden;
              /*ボタンの形状*/
              text-decoration: none;
              display: block;
              background: var(--c-primary);
              color: #fff;
              padding: 1em;
              border-radius: 5px;
              outline: none;
              text-align: center;
              width: 50%;
              margin: 0 auto;

              &.disabled {
                pointer-events: none;
                background-color: gray;
              }

              p {
                margin: 0;

                span {
                  font-size: 0.5em;
                }
              }

              ::after {
                content: "";
                /*絶対配置で波紋位置を決める*/
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                /*波紋の形状*/
                background: radial-gradient(circle, #fff 10%, transparent 10%) no-repeat 50%;
                transform: scale(10, 10);
                /*はじめは透過0に*/
                opacity: 0;
                /*アニメーションの設定*/
                transition: transform 0.3s, opacity 1s;
              }
            }

            /*クリックされたあとの形状の設定*/
            .btnripple:hover::after {
              transform: scale(0, 0);
              transition: 0s;
              opacity: 0.3;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Contact;
