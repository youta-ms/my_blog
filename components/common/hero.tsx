import blogConfig from "@/blog.config";
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
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
          loading="eager"
          priority
        />
      </div>
      <div className="hero-cover">
        <div className="hero-wrapper">
          <div className="hero-inner">
            <h1 className="hero-title fadein">{title}</h1>
            <p className="hero-description fadein">{description}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero {
            background-color: var(--c-primary);
            text-align: center;
            margin-bottom: 30px;
            height: 13.6979vw;
            position: relative;

            @media screen and (max-width: ${blogConfig.styles.breakPoints
              .medium}) {
              height: 100%;
            }

            .next_img_box {
              width: 100%;
              height: 100%;
            }

          }
          .hero-cover {
            background-color: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
          }
          .hero-wrapper {
            display: flex;
            justify-content: space-between;
            max-width: calc(var(--container-width) + 20px);
            margin: 0 auto;
            height: 100%;
            align-items: center;
          }
          .hero-description {
            font-size: var(--text-lg);
            color: #fff;

            @media screen and (max-width: ${blogConfig.styles.breakPoints
              .medium}) {
              padding: 0 1em;
            }
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
