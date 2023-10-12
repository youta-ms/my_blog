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
import { useArticle } from "@/hooks/use-article";
import { NotFound } from "@/components/common/not-found";
import { Contact } from "@/components/common/contact";
import { useArticles } from "@/hooks/use-articles";
import { log } from "console";

type DetailProps = {
  article: Article;
  related: Article[];
  articles: Article[];
  current: number;
};

export default ({ article: defaultArticle, related, articles: defaultArticles, current, }: DetailProps) => {
  if (!defaultArticle) {
    return <NotFound />;
  }

  const { article } = useArticle(defaultArticle.slug, defaultArticle);
  const { articles } = useArticles({ defaultArticles, current });

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
