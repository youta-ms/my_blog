import { useState } from 'react';
import blogConfig from "@/blog.config";
import Link from "next/link";
import { SocialList } from "../common/template-social-list";
import { HeaderLink } from "@/components/common/header-link";
import Image from "next/image";

type OnLoadingCompleteResult = { naturalHeight: number; naturalWidth: number };

export function Header() {
  const [aspectRatio, setAspectRatio] = useState(0);
  const onLoadingComplete = (e: OnLoadingCompleteResult) => {
    setAspectRatio(e.naturalWidth / e.naturalHeight);
  };
  return (
    <header className="header-outer">
      <div className="header-inner">
        <div className="header-content">
          <div className="social-list-wrap">
            <SocialList />
          </div>
          <div className="logo-wrap">
            <Link href="/">
              <div
                className="netx_img_box"
                style={{
                aspectRatio: `${aspectRatio || '340 / 283'}`,
                position: 'relative',
              }}>
                <Image
                  src={blogConfig.siteLogo.url}
                  alt={blogConfig.siteName}
                  fill
                  loading="eager"
                  blurDataURL={blogConfig.article.defaultThumbnail}
                  placeholder="blur"
                  onLoadingComplete={(e) => onLoadingComplete(e)}
                />
              </div>
            </Link>
          </div>
          {blogConfig.subNavigation.length > 0 && (
            <ul className="header-sub-nav">
              {blogConfig.subNavigation.map((n) => (
                <li key={n.url}>
                  <Link
                    href={n.url}
                    prefetch={false}
                  >
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <HeaderLink />
        </div>
      </div>
      <style jsx>
        {`
          .header-outer {
            background-color: var(--c-base);
          }
          .header-inner {
            padding-top: 33px;
            top: 0;
            width: 100%;
            z-index: 10;
          }
          .header-content {
            max-width: calc(var(--container-width) + 20px);
            margin: 0 auto;
            position: relative;

            @media screen and (max-width: ${blogConfig.styles.breakPoints
              .medium}) {
                margin: 0 10px 0;
            }
          }
          .logo-wrap {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;

            .netx_img_box {
              width: ${blogConfig.siteLogo.width}px;
              height: ${blogConfig.siteLogo.height}px;
            }
          }
          .header-sub-nav {
            position: absolute;
            top: 0;
            right: 0;
            list-style-type: none;
            display: flex;
            font-size: var(--text-sm);
            color: var(--c-white);
            li {
              margin-right: 35px;
              &:last-child {
                margin-right: 10px;
              }
            }
            @media screen and (max-width: ${blogConfig.styles.breakPoints
                .medium}) {
              display: none;
            }
          }
          .social-list-wrap {
            position: absolute;
            top: 0;
            left: 10px;
            @media screen and (max-width: ${blogConfig.styles.breakPoints
                .medium}) {
              display: none;
            }
          }
        `}
      </style>
    </header>
  );
}
