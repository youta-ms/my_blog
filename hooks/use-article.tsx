import blogConfig from "@/blog.config";
import { Article } from "@/types";
import { useClientSWR } from "next-zod-router/swr";

export const useArticle = (slug: string, defaultArticle: Article) => {
  return {
    article: defaultArticle,
    isLoading: false,
    isError: false,
  };
};
