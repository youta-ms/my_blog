import blogConfig from "@/blog.config";
import { LinkButton } from "../buttons";
import { Layout } from "../layout";
import Image from "next/image";

export const NotFound = () => {
  return (
    <Layout>
      <div className="inner">
        <div className="row">
          <h1 className="title">{blogConfig.notFoundTagId.title}</h1>
        </div>
        <div className="row">
          <p className="notfound-text">{blogConfig.notFoundTagId.subtitle}</p>
        </div>
        <div className="row">
          <div className="next_img_box">
            <Image
              className="notfound-image"
              src={blogConfig.notFoundTagId.image}
              alt="404"
              fill
            />
          </div>
        </div>
        <div className="row">
          <div className="notfound-desc">
            {blogConfig.notFoundTagId.description}
          </div>
        </div>
        <div className="row">
          <LinkButton href="/">Home</LinkButton>
        </div>
        <style jsx>
          {`
            .inner {
              margin: 50px auto;
              max-width: 540px;
            }

            .row {
              display: flex;
              justify-content: center;
              flex-wrap: nowrap;

              .next_img_box {
                width: 100%;
                height: auto;
              }
            }

            .notfound-text {
              font-size: var(--text-xl);
              font-weight: 600;
              text-align: center;
              line-height: 1.7;

              @media screen and (max-width: ${blogConfig.styles.breakPoints
                  .medium}) {
                font-size: var(--text-lg);
                line-height: 1.4;
              }
            }

            .title {
              font-size: 106px;
              letter-spacing: 0.1em;
              line-height: 1.1;
              margin-bottom: 0;
              @media screen and (max-width: ${blogConfig.styles.breakPoints
                  .medium}) {
                font-size: 50px;
              }
            }

            .notfound-image {
              max-width: 100%;
              height: auto;
              margin-bottom: 30px;
            }

            .notfound-desc {
              text-align: left;
              font-size: 0.95rem;
              color: var(--c-text-gray-lighter);
              line-height: 1.5;
              margin-bottom: 50px;
              white-space: break-spaces;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};
