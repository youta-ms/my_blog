import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { ResetStyle } from "@/styles/reset";
import { GlobalStyle } from "@/styles";
import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { GoogleTagManager } from '@next/third-parties/google'
import { googleTagManagerId } from '@/blog.config';

library.add(faTwitter, faFacebook, faGithub);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <GoogleTagManager gtmId={googleTagManagerId} />
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
