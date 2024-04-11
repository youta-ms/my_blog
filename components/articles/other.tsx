import { Article } from "@/types";
import { AritcleColumn, ArticleList, LatestArticle } from ".";
import { Title } from "../texts";
import { ArticleCard } from "./card";

export function Other({ other }: { other: Article[] }) {
  return (
    <ArticleList>
      <Title>OTHER ARTICLES</Title>
      <LatestArticle>
        {other.map((post, index) => (
          <AritcleColumn key={post.slug} column={2}>
            <ArticleCard
              article={post.data}
              href={`/${post.data.category}/${post.slug}`}
              {...index <= 4 && { eagerFlg: true }}
            />
          </AritcleColumn>
        ))}
      </LatestArticle>
    </ArticleList>
  );
}
