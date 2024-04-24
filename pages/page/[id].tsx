import { GetStaticPaths } from "next";
import { NextSeo } from "next-seo";
import { getArticles, getFilteredArticles } from "@/utils/get-articles";
import { Layout } from "@/components/layout";
import { Article } from "@/types";
import {
  ArticleList,
  LatestArticle,
  ArticleColumn,
} from "@/components/articles";
import { ArticleCard } from "@/components/articles/card";
import { Pager } from "@/components/pager";
import blogConfig from "@/blog.config";
import { Side } from "@/components/layouts/side";
import { Wrapper } from "@/components/common/wrapper";
import { Main } from "@/components/layouts/main";
import { NotFound } from "@/components/common/not-found";

const PageDetail = ({
  articles,
  current,
  max,
}: {
  articles: Article[];
  current: number;
  max: number;
}) => {
  if (!articles || articles.length === 0) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Wrapper>
        <Main>
          <ArticleList>
            <LatestArticle>
              {articles.map((article, index) => (
                <ArticleColumn key={article.slug} column={2}>
                  <ArticleCard
                    article={article.data}
                    href={`/${article.data.category}/${article.slug}`}
                    {...(index <= 4 && { eagerFlg: true })}
                  />
                </ArticleColumn>
              ))}
            </LatestArticle>
            <Pager current={current + 1} max={max} />
          </ArticleList>
        </Main>
        <Side />
      </Wrapper>
      <NextSeo canonical={blogConfig.siteUrl} />
    </Layout>
  );
};

export default PageDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getArticles();
  const paths = [];
  articles.forEach((article, index) => {
    if ((index + 1) % blogConfig.article.articlesPerPage === 0) {
      paths.push({
        params: {
          id: `${(index + 1) / blogConfig.article.articlesPerPage}`,
        },
      });
    }
  });
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  try {
    const articles = await getArticles();
    const { id } = params;
    const current = parseInt(id, 10) - 1;
    return {
      revalidate: 60,
      props: {
        current,
        max: Math.ceil(articles.length / blogConfig.article.articlesPerPage),
        articles: await getFilteredArticles({
          current,
        }),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
