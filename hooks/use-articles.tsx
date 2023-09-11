import { Article } from "@/types";

export const useArticles = ({
  categoryId,
  tagId,
  current,
  defaultArticles,
}: {
  current: number;
  categoryId?: string;
  tagId?: string;
  defaultArticles: Article[];
}) => {
  return {
    articles: defaultArticles,
    isLoading: false,
    isError: false,
  };
};
