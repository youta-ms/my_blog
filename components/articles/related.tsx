import { Article } from "@/types";
import { AritcleColumn, ArticleList, LatestArticle } from ".";
import { Title } from "../texts";
import { ArticleCard } from "./card";

export function Related({ related }: { related: Article[] }) {
  return (
    <ArticleList>
      <Title>RELATED ARTICLES</Title>
      <LatestArticle>
        {related.map((post) => (
          <AritcleColumn key={post.slug} column={2}>
            <ArticleCard
              article={post.data}
              href={`/${post.data.category}/${post.slug}`}
            />
          </AritcleColumn>
        ))}
      </LatestArticle>
    </ArticleList>
  );
}
