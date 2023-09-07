import blogConfig from "@/blog.config";
import { Wrapper } from "./wrapper";
import Image from "next/image";
import styles from './common.module.css';

export function Hero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="hero">
      <div className="next_img_box">
        <Image
          src={blogConfig.hero.image}
          alt="hero"
          className={styles.next_img}
          fill
        />
      </div>
      <div className="hero-cover">
        <Wrapper>
          <div className="hero-inner">
            <h1 className="hero-title fadein">{title}</h1>
            <p className="hero-description fadein">{description}</p>
          </div>
        </Wrapper>
      </div>
      <style jsx>
        {`
          .hero {
            background-color: var(--c-primary);
            text-align: center;
            margin-bottom: 30px;
            height: 13.6979vw;
            position: relative;

            .next_img_box {
              width: 100%;
              height: 100%;
            }

          }
          .hero-cover {
            padding: 50px 0;
            background-color: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 0;
            width: 100%;
          }
          .hero-description {
            font-size: var(--text-lg);
            color: #fff;
          }
          .hero-inner {
            width: 100%;
          }
          .hero-title {
            font-size: 50px;
            margin-bottom: 20px;
            color: #fff;
            @media screen and (max-width: ${blogConfig.styles.breakPoints
                .medium}) {
              font-size: 40px;
            }
          }
        `}
      </style>
    </div>
  );
}
