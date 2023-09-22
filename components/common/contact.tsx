import Link from 'next/link';

export const Contact = () => {
  return (
    <>
      <h2>実装やエラーが解決できない場合</h2>
      <p>プログラミングの実装やエラーでどうしてもわからない場合はメンターに相談するのが一番です。</p>
      <p>考えている、見えている範囲が狭くなり、解決から遠くに行って何時間も、何日も経っていることなんてよくある話です。</p>
      <p>そういう時は聞ける先輩や、メンターに相談することが大事です。</p>
      <p>僕にも相談可能なので気軽に相談してください。</p>
      <a href="https://twitter.com/youta_ms" target="_blank" rel="noopener noreferrer" className='btnripple'>
        <p>ご相談はこちら<br /><span>（Twitterのプロフィールへ飛びます）</span></p>
      </a>
      <style jsx>
        {`
          p {
            margin-top: 1.6rem;
          }
          h2 {
            &  :global(p) {
              margin-top: 0.3em;
            }
            margin-top: 0.3em;
            margin-bottom: 0.5em;
            position: relative;
            font-size: 1.7em;
            border-bottom: 2px solid var(--c-primary);
            margin-bottom: 30px;
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
            padding: 0.5em;
            border-radius: 10px;
            outline: none;
            text-align: center;
            margin: 1em auto;
            width: 50%;

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
          .btnripple:active::after {
            transform: scale(0, 0);
            transition: 0s;
            opacity: 0.3;
          }
        `}
      </style>
    </>
  );
};
