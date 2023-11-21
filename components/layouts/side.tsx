import { SubTitle } from "@/components/texts";
import blogConfig from "@/blog.config";
import { Profile } from "../sides/profile";
import { CategoryList } from "../common/category-list";
import { TagList } from "../common/common-tag-list";
import { Toc } from "../toc";

export const Side: React.VFC<{ id?: string }> = ({ id }) => {
  return (
    <div className="side">
      <Profile />
      <div className="list-wrap">
        <CategoryList />
      </div>
      <div className="list-wrap">
        <SubTitle>{blogConfig.widgets.tagList.title}</SubTitle>
        <TagList tags={blogConfig.tags} />
      </div>
      <div className="fixed-sidebar">
        {id && <Toc id={id} />}
        <div
          dangerouslySetInnerHTML={{
            __html: blogConfig.widgets.fixedSidebar.ad,
          }}
        />
      </div>
      <style jsx>
        {`
          .side {
            flex-basis: 340px;
            @media screen and (max-width: ${blogConfig.styles.breakPoints
                .medium}) {
              display: none;
            }
          }
          .list-wrap {
            margin-bottom: 30px;
            padding: 1em;
            background: #fff;
            border-radius: 10px;
          }

          .fixed-sidebar {
            position: sticky;
            top: 10px;
            :global(img) {
              max-width: 100%;
              height: auto;
            }
          }
        `}
      </style>
    </div>
  );
};
