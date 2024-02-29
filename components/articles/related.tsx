import { Article } from "@/types";
import { AritcleColumn, ArticleList, LatestArticle } from ".";
import { Title } from "../texts";
import { ArticleCard } from "./card";

export function Related({ related }: { related: Article[] }) {
  return (
    <ArticleList>
      <Title>RELATED ARTICLES</Title>
      <LatestArticle>
        {related.map((post, index) => (
          <AritcleColumn key={post.slug} column={2}>
            <ArticleCard
              article={post.data}
              href={`/${post.data.category}/${post.slug}`}
              {...index <= 3 && { eagerFlg: true }}
            />
          </AritcleColumn>
        ))}
      </LatestArticle>
    </ArticleList>
  );
}
