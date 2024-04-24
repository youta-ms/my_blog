import { Category, Tag } from "@/types";
import Link from "next/link";
import styles from "./common.module.css";

export const TagList: React.VFC<{ category?: Category; tags: Tag[] }> = ({
  category,
  tags,
}) => {
  return (
    <ul className="taglist">
      {category && (
        <li className="category">
          <Link
            href={`/${category.id}`}
            prefetch={false}
            className={styles.category}
          >
            {category.title}
          </Link>
        </li>
      )}
      {tags
        .filter((tag) => !!tag?.id)
        .map((tag) => (
          <li key={tag.id}>
            <Link
              href={`/tags/${tag.id}`}
              prefetch={false}
              className={styles.tag}
            >
              {tag.title}
            </Link>
          </li>
        ))}
      <style jsx>
        {`
          .taglist {
            padding-left: 0;
            display: inline-flex;
            flex-wrap: wrap;
            white-space: nowrap;
            list-style: none;
          }
        `}
      </style>
    </ul>
  );
};
