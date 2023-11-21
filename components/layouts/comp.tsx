import { FC, useEffect, useState } from "react";

export const Comp: FC = () => {
  // 表示切り替えフラグ
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // スクロールイベントをListen
  useEffect(() => {
    window.addEventListener("scroll", watchScroll);
    return () => {
      window.removeEventListener("scroll", watchScroll);
    };
  }, []);

  // Scrollを検知しボタン表示のフラグを切り替え
  const watchScroll = () => {
    const basePosition = 200;
    const scrollPosition = window.scrollY;
    setShowScrollToTop(basePosition <= scrollPosition) ;
  };

  return (
    <>
      {showScrollToTop && (
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-to-top">
            TOP
          <style jsx>
            {`
              .scroll-to-top {
                position: fixed;
                right: 2vw;
                bottom: 20px;
                height: 50px;
                text-decoration: none;
                font-weight: bold;
                transform: rotate(90deg);
                font-size: 90%;
                line-height: 1.5rem;
                padding: 0 0 0 35px;
                border-top: solid 1px;
                animation-name:fadeDownAnime;
                animation-duration: 1s;
                animation-fill-mode:forwards;
                opacity:0;
                cursor: pointer;
                color: var(--c-primary);

                &::before {
                  content: "";
                  display: block;
                  position: absolute;
                  top: -1px;
                  left: 0px;
                  width: 15px;
                  border-top: solid 1px;
                  transform: rotate(35deg);
                  transform-origin: left top;
                }

                @keyframes fadeDownAnime{
                  from {
                    opacity: 0;
                  }

                  to {
                    opacity: 1;
                  }
                }
              }
            `}
          </style>
        </span>
      )}
    </>
  )
}
