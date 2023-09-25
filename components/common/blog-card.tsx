import { Meta } from '@/types';
import { JSDOM } from "jsdom";
import React from 'react'
import Image from "next/image";

type BlogCardFunc = (markdown: string) => React.FC<JSX.IntrinsicElements['a']>

const BlogCard: BlogCardFunc = (slug) => (props) => {
  const [metas, setMetas] = React.useState<Meta | null>(null);

  const { href } = props

  React.useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const metaData = await getMetaData(href);
        setMetas(metaData);
      } catch (e) {
        console.error(e);
      }
    };

    fetchMetaData();
  }, [href]);

  if (metas) {
    const filteredMetas = {
      title: metas.title || '',
      description: metas.description || '',
      image: metas.image || '',
    };

    if(filteredMetas.image == "" || filteredMetas.description == "" || filteredMetas.title == "") {
      return (
        <iframe
          className="mx-auto w-full max-w-7xl dark:opacity-80"
          src={href}
        />
      );
    }


    return (
      <a href={href} target="_blank" rel="noreferrer" className="blog_card">
        <span className="blog_card_box">
          <span className="blog_card_img_box">
            <span className='next_img_box'>
              <Image
                src={filteredMetas.image}
                alt={filteredMetas.title}
                fill
              />
            </span>
          </span>
          <span className="blog_card_text_box">
            <span className="blog_card_title">{filteredMetas.title}</span>
            <span className="blog_card_text">{filteredMetas.description}</span>
          </span>
        </span>
        <style jsx>
        {`
          .blog_card {
            text-decoration: none!important;
            border: 1px solid var(--c-text);
            display: block;
          }
          .blog_card_box {
            width: 100%;
            display: flex;
            justify-content: space-around;
            background: white;
            border-width: 1px;
            padding: 0.75rem;
            border-radius: 0.375rem;
          }
          .blog_card_img_box {
            width: 25%;

            .next_img_box {
              width: 100%;
              height: auto;
              display: block;

              img {
                max-height: 5rem;
                margin: auto;
              }
            }
          }
          .blog_card_text_box {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding-left: 0.25rem;
            padding-right: 0.25rem;
            margin-left: 0.75rem;
          }
          .blog_card_title {
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: bold;
            color: var(--c-text);
            white-space: pre-wrap;
          }
          .blog_card_text {
            color: rgb(156 163 175);
            font-size: 0.75rem;
            line-height: 1rem;
            white-space: pre-wrap;
            display: flex;
            margin: auto 0;
          }
        `}
      </style>
      </a>
    );
  }
};


const getMetaData = async (url: string): Promise<Meta> => {
  const metaData = {
    url,
    title: '',
    description: '',
    image: '',
  }
  try {
    const res = await fetch(url)
    const text = await res.text()
    const doms = new JSDOM(text)
    const metas = doms.window.document.getElementsByTagName('meta')

    for (const meta of metas) {
      const np = meta.getAttribute('name') || meta.getAttribute('property')
      if (typeof np !== 'string') continue
      if (np.match(/title/)) {
        metaData.title = meta.getAttribute('content')
      }
      if (np.match(/description/)) {
        metaData.description = meta.getAttribute('content').slice(0, 100)
      }
      if (np.match(/image/)) {
        metaData.image = meta.getAttribute('content')
      }
    }
  } catch (e) {
    console.error(e)
  }
  return metaData
}

export default BlogCard
