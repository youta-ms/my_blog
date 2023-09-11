import { Article } from "@/types";

export const useArticle = (slug: string, defaultArticle: Article) => {
  return {
    article: defaultArticle,
    isLoading: false,
    isError: false,
  };
};
