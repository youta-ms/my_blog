import blogConfig from "@/blog.config";
import Link from "next/link";
import { HamburgerSubTitle } from "../texts";
import { useState, useEffect } from "react";

export const CategoryHamburgerList = (props: { isModal: boolean }) => {
  const [isModal, setIsModal] = useState(props.isModal);

  useEffect(() => {
    setIsModal(props.isModal);
  }, [props.isModal]);

  return (
    <>
      <HamburgerSubTitle>{blogConfig.widgets.categoryList.title}</HamburgerSubTitle>
      <ul className="category-nav">
        {blogConfig.showCategories.map((category) => (
          <li key={category.id} className="category-item" onClick={() => setIsModal(!isModal)}>
            <Link href={`/${category.id}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .subtitle {
            color: #FFF!important;
          }
          .category-nav {
            list-style-type: none;
            padding: 0;
          }
          .category-item {
            border-bottom: 1px solid #FFF;
            padding-top: 20px;
            padding-bottom: 20px;
            position: relative;
          }
          .category-item:first-child {
            border-top: 1px solid #FFF;
          }
          .category-item:after {
            content: "";
            display: block;
            width: 20px;
            height: 20px;
            background: var(--c-primary);
            border-radius: 50%;
            position: absolute;
            right: 5px;
            top: 50%;
            margin-top: -10px;
          }
          .category-item :global(a) {
            margin-top: -20px;
            margin-bottom: -20px;
            padding-top: 20px;
            padding-bottom: 20px;
            display: block;
            position: relative;
            color: #FFF;
          }
          .category-item :global(a):before {
            content: "";
            position: absolute;
            right: 10px;
            top: calc(50% - 2px);
            margin-top: -2px;
            width: 8px;
            height: 2px;
            transform: rotate(45deg);
            z-index: 1;
            display: block;
            background-color: #fff;
          }
          .category-item :global(a):after {
            content: "";
            position: absolute;
            right: 10px;
            top: calc(50% + 3px);
            margin-top: -2px;
            width: 8px;
            height: 2px;
            transform: rotate(-45deg);
            z-index: 1;
            display: block;
            background-color: #fff;
          }
        `}
      </style>
    </>
  );
};
