import blogConfig from "@/blog.config";
import { CategoryList } from "../common/category-list";
import { SocialList } from "../common/template-social-list";
import { TagList } from "../common/common-tag-list";
import { SubTitle } from "../texts";
import Image from "next/image";

export const Footer: React.VFC = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <div className="next_img_box">
            <Image
              loading="lazy"
              src={blogConfig.siteLogo.url}
              className="footer-logo"
              alt="logo"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300}
            />
          </div>
          <p className="footer-description">{blogConfig.footer.title}</p>
          <div className="social-wrap">
            <SocialList />
          </div>
        </div>
        <div className="footer-column">
          <CategoryList />
        </div>
        <div className="footer-column">
          <SubTitle>{blogConfig.widgets.tagList.title}</SubTitle>
          <TagList tags={blogConfig.tags} />
        </div>
      </div>
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} {blogConfig.siteName} All
        rights reserved.
      </p>
      <style jsx>
        {`
          .footer {
            padding: 50px 10px;
            background-color: var(--c-base);
          }
          .footer-columns {
            display: flex;
            max-width: calc(var(--container-width) + 20px);
            margin: 0 auto;
            @media screen and (max-width: ${blogConfig.styles.breakPoints
                .medium}) {
              display: block;
            }

            .next_img_box {
              position: relative;
              width: 100%;
              height: auto;

              .footer-logo {
                position: relative !important;
              }
            }
          }
          .footer-column {
            flex: 1;
            padding: 0 10px;
            color: var(--c-white);
          }
          .social-wrap {
            margin-top: 10px;
            margin-bottom: 30px;
          }
          .copyright {
            font-size: 14px;
            text-align: center;
            margin-top: 2em;
            color: var(--c-white);
          }
        `}
      </style>
    </footer>
  );
};
