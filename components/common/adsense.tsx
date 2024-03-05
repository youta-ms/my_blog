import { useRouter } from 'next/router';
import { FC, useEffect } from 'react'

declare global {
  var adsbygoogle: unknown[];
}

export const AdSense: FC = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error(error);
    }
  }, [asPath]);

  return (
    <div key={asPath}>
      {/* <!-- 広告1 --> */}
      <ins className="adsbygoogle"
          data-ad-client="ca-pub-3991778860579469"
          data-ad-slot="2895609079"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      <style>
      {`
        .adsbygoogle {
          display:block
        }
      `}
      </style>
    </div>
  );
};
