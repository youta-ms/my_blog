import Link from 'next/link';

export const Contact = () => {
  return (
    <>
      <h2>実装やエラーが解決できない場合</h2>
      <p>プログラミングの実装やエラーでどうしてもわからない場合はメンターに相談するのが一番です。</p>
      <p>考えている、見えている範囲が狭くなり、解決から遠くに行って何時間も、何日も経っていることなんてよくある話です。</p>
      <p>そういう時は聞ける先輩や、メンターに相談することが大事です。</p>
      <p>僕にも相談可能なので気軽に相談してください。</p>
      <a href="https://twitter.com/youta_ms" target="_blank" rel="noopener noreferrer" className='contact_button'>
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
          .contact_button {
            text-align: center;
            border: 1px solid var(--c-primary);
            color: var(--c-primary);
            display: block;
            width: 60%;
            margin: 1em auto;
            line-height: 1;
            padding: 1em 0;
            font-size: 1.2em;

            span {
              font-size: .5em;
            }

            :hover {
              background-color: var(--c-primary);
              color: #FFF;
            }

            p {
              margin-top: 0;
            }
          }
        `}
      </style>
    </>
  );
};
