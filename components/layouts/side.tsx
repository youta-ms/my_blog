import { useState } from 'react';
import { SubTitle } from "@/components/texts";
import blogConfig from "@/blog.config";
import { Profile } from "../sides/profile";
import { CategoryList } from "../common/category-list";
import { TagList } from "../common/common-tag-list";
import { Toc } from "../toc";
import Image from "next/image";
import { AdSense } from "../common/adsense";

type OnLoadingCompleteResult = { naturalHeight: number; naturalWidth: number };

export const Side: React.VFC<{ id?: string }> = ({ id }) => {
  const [aspectRatio, setAspectRatio] = useState(0);
  const onLoadingComplete = (e: OnLoadingCompleteResult) => {
    setAspectRatio(e.naturalWidth / e.naturalHeight);
  };
  return (
    <div className="side">
      <Profile />
      <a
        className="samurai_link"
        href="https://t.afi-b.com/visit.php?a=Q9264Q-S317894F&p=H866104Y"
        target="_blank"
        rel="nofollow noopener"
        style={{
          aspectRatio: `${aspectRatio || '340 / 283'}`,
          position: 'relative',
        }}
      >
        <Image
          src="https://www.afi-b.com/upload_image/9264-1524726055-3.gif"
          className="samurai_img"
          alt="侍エンジニア塾"
          loading="eager"
          fill
          blurDataURL={blogConfig.article.defaultThumbnail}
          placeholder="blur"
          onLoadingComplete={(e) => onLoadingComplete(e)}
        />
      </a>
      <div className="list-wrap">
        <CategoryList />
      </div>
      <AdSense/>
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
            margin: 2.5em 0 30px;
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
          .samurai_link {
            width: 100%;
            display: block;
          }
          .samurai_img {
            width: 100%;
            height: auto;
          }
        `}
      </style>
    </div>
  );
};
