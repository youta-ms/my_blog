import dayjs from "dayjs";
import { ArticleData } from "@/types";
import blogConfig from "@/blog.config";
import { TagList } from "./common/tag-list";
import { getTagList } from "./utils/get-tag-list";
import { getCategory } from "./utils/get-category";
import Image from "next/image";

export function ContentHeader({ data }: { data?: ArticleData }) {
  const dateFormatted = data.date
    ? dayjs(data.date).format("YYYY/MM/DD")
    : null;
  return (
    <div className="content-header">
      <h1 className="title">{data.title}</h1>
      {data.tags && (
        <TagList
          category={getCategory(data.category)}
          tags={getTagList(data.tags)}
        />
      )}
      {!data.hideThumbnail && (
        <div className="thumbnail-wrap">
          <div
            className="next_img_box"
          >
            <Image
              src={data.thumbnail || blogConfig.article.defaultThumbnail}
              alt="記事のサムネイル"
              className="thumbnail"
              priority
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300}
            />
          </div>
        </div>
      )}
      {!data.hideThumbnail && <time className="time">{dateFormatted}</time>}
      {/* <a className="samurai_link" href="https://t.afi-b.com/visit.php?a=Q9264Q-r433259T&p=H866104Y" target="_blank" rel="nofollow noopener">
        <Image
          src="https://www.afi-b.com/upload_image/9264-1638547778-3.jpg"
          className="samurai_img"
          alt="侍エンジニア塾"
          fill
          priority
        />
      </a>
      <div className="lead_img">
        <Image
          src="https://t.afi-b.com/lead/Q9264Q/H866104Y/r433259T"
          alt="侍エンジニア塾"
          fill
          priority
        />
      </div> */}
      <style jsx>
        {`
          .time {
            display: block;
            font-weight: normal;
            font-size: var(--text-sm);
            color: var(--c-text-gray-lighter);
            margin-bottom: 20px;
            display: block;
            text-align: right;
          }
          .content-header {
            border-bottom: solid 1px var(--c-gray-border);
          }
          .title {
            font-size: 28px;
            line-height: 1.7;
          }
          .thumbnail-wrap {
            width: 100%;
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            margin-bottom: 10px;

            .next_img_box {
              width: 100%;
              height: auto;
            }
          }
          .thumbnail {
            object-fit: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
          .samurai_link {
            width: 90%;
            display: block;
            margin: 0 auto;
          }
          .lead_img {
            width: 1px;
            height: 1px;
          }
          .samurai_img {
            width: 100%;
            height: auto;
          }
        `}
      </style>
    </div>
  );
}
