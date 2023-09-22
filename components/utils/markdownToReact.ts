import { createElement, Fragment } from 'react'
import rehypeReact from 'rehype-react'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import PostImage from '@/components/common/post-image'
import BlogCard from '@/components/common/blog-card'
import CodeBlock from '@/components/common/CodeBlock'
import remarkBreaks from "remark-breaks";

export default async function markdownToReact(markdown: string, slug: string) {
  const result = (await unified()
    .use(remarkBreaks)
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        a: BlogCard(markdown),
        img: PostImage(slug),
        code: CodeBlock
      }
    })
    .process(markdown)).result
  return result
}
