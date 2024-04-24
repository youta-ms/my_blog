// import { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from "next";
import { NextSeo, ArticleJsonLd, ArticleJsonLdProps } from "next-seo";
import { getArticle, getArticles, getFilteredArticles } from "@/utils/get-articles";
import { Article } from "@/types";
import { Content } from "@/components/content";
import { ContentHeader } from "@/components/content-header";
import { Layout } from "@/components/layout";
import { TopicPath } from "@/components/common/topicpath";
import { Side } from "@/components/layouts/side";
import { Wrapper } from "@/components/common/wrapper";
import blogConfig from "@/blog.config";
import { Main } from "@/components/layouts/main";
import { Related } from "@/components/articles/related";
import { Other } from "@/components/articles/other";
import { ArticleAuthor } from "@/components/articles/author";
import { Share } from "@/components/share";
import { TagList } from "@/components/common/tag-list";
import { getCategory } from "@/components/utils/get-category";
import { getTagList } from "@/components/utils/get-tag-list";
import { NotFound } from "@/components/common/not-found";
import { Contact } from "@/components/common/contact";
import Image from "next/image";

type DetailProps = {
  article: Article;
  related: Article[];
  articles: Article[];
  current: number;
};

// type OnLoadingCompleteResult = { naturalHeight: number; naturalWidth: number };

export default ({ article, related, articles, current, }: DetailProps) => {
  if (!article) {
    return <NotFound />;
  }

  const jsonLd: ArticleJsonLdProps = {
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: article.data.title,
    images: [article.data.thumbnail],
    datePublished: article.data.date,
    description: article.data.description ?? article.excerpt,
    authorName: "",
    publisherName: "",
    publisherLogo: "",
  };

  // const [aspectRatio, setAspectRatio] = useState(0);
  // const onLoadingComplete = (e: OnLoadingCompleteResult) => {
  //   setAspectRatio(e.naturalWidth / e.naturalHeight);
  // };
  return (
    <Layout>
      {article && (
        <>
          <Wrapper>
            {article.data && (
              <Main>
                <TopicPath items={[{ label: article.data.title }]} />
                <ContentHeader data={article.data} />
                <Content content={article.text_data} slug={article.slug} />
                {/* <a
                  className="samurai_link"
                  href="https://t.afi-b.com/visit.php?a=Q9264Q-r433259T&p=H866104Y"
                  target="_blank"
                  rel="nofollow noopener"
                  style={{
                    aspectRatio: `${aspectRatio || '367 / 47'}`,
                    position: 'relative',
                  }}
                >
                  <Image
                    src="https://www.afi-b.com/upload_image/9264-1638547778-3.jpg"
                    className="samurai_img"
                    alt="侍エンジニア塾"
                    fill
                    blurDataURL={blogConfig.article.defaultThumbnail}
                    placeholder="blur"
                    onLoadingComplete={(e) => onLoadingComplete(e)}
                  />
                </a>
                <div
                  className="lead_img"
                  style={{
                    aspectRatio: `${aspectRatio || '367 / 47'}`,
                    position: 'relative',
                  }}
                >
                  <Image
                    src="https://t.afi-b.com/lead/Q9264Q/H866104Y/r433259T"
                    alt="侍エンジニア塾"
                    fill
                    blurDataURL={blogConfig.article.defaultThumbnail}
                    placeholder="blur"
                    onLoadingComplete={(e) => onLoadingComplete(e)}
                  />
                </div> */}
                <Contact />
                <TagList
                  category={getCategory(article.data.category)}
                  tags={getTagList(article.data.tags)}
                />
                <Share
                  permalink={article.permalink}
                  title={article.data.title}
                />
                <ArticleAuthor writtenBy={article.data.writtenBy} />
                {related.length > 0 && <Related related={related} />}
                <Other other={articles} />
                {!!blogConfig.articlePage.afterContentAd && (
                  <div
                    className="after-content-ad"
                    dangerouslySetInnerHTML={{
                      __html: blogConfig.articlePage.afterContentAd,
                    }}
                  />
                )}
              </Main>
            )}
            <Side id={article.slug} />
          </Wrapper>
        </>
      )}
      <NextSeo
        title={article.data.title}
        description={article.data.description ?? article.excerpt}
        openGraph={{
          title: article.data.title,
          description: article.excerpt,
          type: "article",
          images: [
            {
              url: `${blogConfig.siteUrl}${article.data.thumbnail}`,
            },
          ],
        }}
      />
      <ArticleJsonLd {...jsonLd} />
      <style jsx>
        {`
          .article-banner {
            width: 100%;
            height: auto;
            margin-bottom: 40px;
            display: block;
          }
          .after-content-ad {
            margin-top: 80px;
            :global(img) {
              width: 100%;
              height: auto;
            }
            :global(img[width="1"]) {
              width: 1px;
            }
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
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getArticles();
  const paths = articles
    .filter((a) => a.slug)
    .map((article) => {
      return {
        params: {
          id: article.slug,
          categoryId: article.data.category,
          slug: article.slug,
        },
      };
    });
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { slug, categoryId } = params;
    const category = blogConfig.categories.find((cat) => cat.id === categoryId);
    const { article, related } = await getArticle(slug as string);
    const articles = await getFilteredArticles({ current: 0 });

    return {
      revalidate: 60,
      props: {
        article,
        related,
        category,
        articles,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
