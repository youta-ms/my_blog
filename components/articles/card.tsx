import { useState } from 'react';
import { ArticleData } from "@/types";
import blogConfig from "@/blog.config";
import dayjs from "dayjs";
import Link from "next/link";
import { TagList } from "../common/text-tag-list";
import { getTagList } from "../utils/get-tag-list";
import { getCategory } from "../utils/get-category";
import Image from "next/image";
import styles from './CardComponent.module.css'

type OnLoadingCompleteResult = { naturalHeight: number; naturalWidth: number };

function PublishdAt({ date }: { date: string }) {
  return (
    <div className="published-at">
      {dayjs(date).format("YYYY/MM/DD")}
      <style jsx>
        {`
          .published-at {
            text-align: right;
            font-size: var(--text-xs);
            color: var(--c-text-gray-lighter);
            padding: 0 0.5em 12px;
          }
        `}
      </style>
    </div>
  );
}

type Props = {
  article: ArticleData;
  href: string;
  className?: string;
  eagerFlg: boolean;
};

export function ArticleCard({ article, href, eagerFlg = false }: Props) {
  const [aspectRatio, setAspectRatio] = useState(0);
  const onLoadingComplete = (e: OnLoadingCompleteResult) => {
    setAspectRatio(e.naturalWidth / e.naturalHeight);
  };
  return (
    <Link href={href} prefetch={false} className={styles.link_card}>
      <div
        className="article-img-wrap"
        style={{
          aspectRatio: `${aspectRatio || '126 / 71'}`,
          position: 'relative',
        }}
      >
        <div className="link_img">
          <Image
            src={article.thumbnail ?? blogConfig.article.defaultThumbnail}
            className={styles.article_img}
            alt={article.title + "のサムネイル画像"}
            loading={eagerFlg ? "eager" : "lazy"}
            fill
            priority={eagerFlg ? true : false}
            blurDataURL={blogConfig.article.defaultThumbnail}
            placeholder="blur"
            onLoadingComplete={(e) => onLoadingComplete(e)}
          />
        </div>
      </div>
      <div className="tag-list-content">
        <TagList
          tags={getTagList(article.tags)}
          category={getCategory(article.category)}
        />
      </div>
      <h2 className="article-title">
        {article.title}
      </h2>
      <PublishdAt date={article.date} />
      <style jsx>
        {`
          .category-label-wrap {
            display: block;
            margin-bottom: 20px;
          }
          .category-label {
            color: var(--c-primary);
            border: 1px solid var(--c-primary);
            font-size: var(--text-sm);
            border-radius: 10px;
            padding: 3px 10px;
            display: inline-block;
          }
          .tag-list-content {
            margin-top: 12px;
            padding: 0 0.5em;
          }
          .article-img-wrap {
            position: relative;
            width: 100%;
          }
          .article-img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
          .article-title {
            font-size: var(--text-md);
            line-height: 1.7;
            margin: auto 0;
            padding: 0 0.5em;
          }
          .link_img {
            width: 100%;
          }
        `}
      </style>
    </Link>
  );
}
