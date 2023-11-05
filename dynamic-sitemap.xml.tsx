import { GetServerSideProps, NextPage } from "next";
import { ISitemapField, getServerSideSitemapLegacy } from "next-sitemap";
import { getArticles } from "@/utils/get-articles";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const articles = await getArticles();

  if (!Array.isArray(articles)) {
    console.error('categoryBn is not an array:', articles);
    return { notFound: true }; // Return a 404 page or an error page as needed.
  }

  // 各 URL の　XML タグ設定
  const fields: ISitemapField[] = [];
  articles.forEach((page) => {
    fields.push({
      loc: `${baseUrl}/articles/${page.slug}`,
      lastmod: new Date(page.data.date).toISOString(),
      changefreq: "daily" as const,
      priority: 1.0,
    });
  });

  ctx.res.setHeader('Cache-Control', 'max-age=86400'); // 24時間キャッシュ
  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Sitemap() {}
