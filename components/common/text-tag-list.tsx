import { Category, Tag } from "@/types";
import styles from "./common.module.css";

export const TagList: React.VFC<{ category?: Category; tags: Tag[] }> = ({
  category,
  tags,
}) => {
  return (
    <ul className="taglist">
      {category && (
        <li className="category">
          <p
            className={styles.category}
          >
            {category.title}
          </p>
        </li>
      )}
      {tags
        .filter((tag) => !!tag?.id)
        .map((tag) => (
          <li key={tag.id}>
            <p
              className={styles.tag}
            >
              {tag.title}
            </p>
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
            margin-bottom: 10px;

            li {
              margin-right: 0.5em;
              vertical-align: middle;
            }
          }
        `}
      </style>
    </ul>
  );
};
