import { Category, Tag } from "@/types";

export const TagList: React.VFC<{ category?: Category; tags: Tag[] }> = ({
  category,
  tags,
}) => {
  return (
    <ul className="taglist">
      {category && (
        <li className="category">
          <p>{category.title}</p>
        </li>
      )}
      {tags
        .filter((tag) => !!tag?.id)
        .map((tag) => (
          <li key={tag.id}>
            <p>{tag.title}</p>
          </li>
        ))}
      <style jsx>
        {`
          .taglist {
            padding-left: 0;
            display: inline-flex;
            flex-wrap: wrap;
            white-space: nowrap;
          }
          .taglist li {
            list-style-type: none;
            display: inline-block;
            padding: 3px 7px;
            margin-right: 1em;
            margin-bottom: 10px;
            border: 1px solid var(--c-primary);
            color: var(--c-primary);
            border-radius: 10px;
            font-size: var(--text-sm);
          }
          .taglist li.category {
            border: 1px solid var(--c-primary-sub);
            color: var(--c-primary-sub);
            border-radius: 0;
          }
        `}
      </style>
    </ul>
  );
};
