import Image from 'next/image'
import React, { createElement } from 'react'
import styles from './common.module.css'

type PostImageFunc = (slug: string) => React.FC<JSX.IntrinsicElements['img']>

const PostImage: PostImageFunc = (slug) => (props) => {
  try {
    const { src, alt, title } = props
    const image = require('@/contents/' + slug + '/' + src).default

    return (
      <div className='next_img_box'>
        <Image
          src={image}
          alt={alt}
          title={title}
          className={styles.next_img}
          fill
        />
        <style jsx>
          {`
            .next_img_box {
              width: 100%;
              height: auto;
            }
          `}
        </style>
      </div>
    )

  } catch (e) {
    return createElement('img', props)
  }
}
export default PostImage
