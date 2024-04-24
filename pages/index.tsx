import { getArticles, getFilteredArticles } from "@/utils/get-articles";
import { Layout } from "@/components/layout";
import { Article } from "@/types";
import {
  ArticleList,
  LatestArticle,
  AritcleColumn,
} from "@/components/articles";
import { ArticleCard } from "@/components/articles/card";
import { Title } from "@/components/texts";
import { Wrapper } from "@/components/common/wrapper";
import blogConfig from "@/blog.config";
import { Hero } from "@/components/common/hero";
import { LinkButton } from "@/components/buttons";
import { useArticles } from "@/hooks/use-articles";
import { Side } from "@/components/layouts/side";

const TopPage = ({
  articles: defaultArticles,
  max,
  current,
}: {
  articles: Article[];
  max: number;
  current: number;
}) => {
  const { articles } = useArticles({ defaultArticles, current });

  return (
    <Layout>
      {/* <Hero
        title={blogConfig.hero.title}
        description={blogConfig.hero.description}
      /> */}
      <Wrapper>
        <main className="main">
          <ArticleList>
            <Title>{blogConfig.topPage.title}</Title>
            <LatestArticle>
              {articles.map((article, index) => (
                <AritcleColumn key={article.slug} column={2}>
                  <ArticleCard
                    article={article.data}
                    href={`/${article.data.category}/${article.slug}`}
                    {...(index <= 4 && { eagerFlg: true })}
                  />
                </AritcleColumn>
              ))}
            </LatestArticle>
            <div className="link-button-wrap">
              {max > 1 && (
                <LinkButton href="/page/2">
                  {blogConfig.topPage.readMoreLabel}
                </LinkButton>
              )}
            </div>
          </ArticleList>
        </main>
        <Side />
      </Wrapper>
      <style jsx>
        {`
          .main {
            width: calc(100% - (25% + 80px));
            margin-right: 50px;
            word-break: break-all;
            padding: 32px;
            background: var(--c-white);

            @media screen and (max-width: ${blogConfig.styles.breakPoints
                .medium}) {
              margin-right: 0;
              width: 100%;
              padding: 32px 0;
            }
          }
          .link-button-wrap {
            text-align: center;
            margin-top: 30px;
          }
        `}
      </style>
    </Layout>
  );
};

export default TopPage;

export const getStaticProps = async () => {
  try {
    const articles = await getArticles();
    return {
      revalidate: 1,
      props: {
        current: 0,
        max: Math.ceil(articles.length / blogConfig.article.articlesPerPage),
        articles: await getFilteredArticles({
          current: 0,
        }),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
