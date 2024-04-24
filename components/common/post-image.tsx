import Image from 'next/image'
import React, { createElement } from 'react'
import styles from './common.module.css'

type PostImageFunc = (slug: string) => React.FC<JSX.IntrinsicElements['img']>

const PostImage: PostImageFunc = (slug) => (props) => {
  try {
    const { src, alt, title } = props
    const image = require('@/contents/' + slug + '/' + src).default

    return (
      <span className='next_img_box'>
        <Image
          src={image}
          alt={alt}
          title={title}
          className={styles.next_img}
          priority
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
        <style jsx>
          {`
            .next_img_box {
              width: 100%;
              height: auto;
              display: block;
            }
          `}
        </style>
      </span>
    )

  } catch (e) {
    return createElement('img', props)
  }
}
export default PostImage
