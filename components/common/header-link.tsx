import blogConfig from "@/blog.config";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { CategoryHamburgerList } from "../common/category-hamburger-list";

export const HeaderLink = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    console.log(isModal);
  }, [isModal]);


  return (
    <>
      {windowDimensions.width >= Number(blogConfig.styles.breakPointsNumber.medium) ? (
        // ウィンドウの幅が指定のブレークポイント以上の場合に表示する内容
        <ul className="header-nav">
          {blogConfig.navigation.map((n) => (
            <li key={n.url}>
              <Link href={n.url}>{n.name}</Link>
            </li>
          ))}
          <style jsx>
            {`
              .header-nav {
                list-style-type: none;
                padding: 0;
                display: flex;
                justify-content: center;
                border-bottom: 3px solid #f0f4f2;
                max-width: var(--container-width);
                margin: 0 auto;
                overflow-x: auto;
              }
              .header-nav li {
                padding: 15px 25px;
                text-transform: uppercase;
                font-weight: bold;
                color: var(--c-text-gray-lighter);
              }
            `}
          </style>
        </ul>
      ) : (
        <>
          <div className={isModal ? "openbtn8 active" : "openbtn8" } onClick={() => setIsModal(!isModal)}>
            <div className="openbtn-area">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* ここからメニュー */}
          <div className="menu-content">
            <div className="sp_hamburger_box">
              <CategoryHamburgerList isModal={isModal} />
            </div>
          </div>
          {/* ここまでメニュー */}
          <style jsx>
            {`
              /*==================================================
              　5-2-8 3本線が横方向に回転して×に
              ===================================*/

              /*ボタン外側※レイアウトによってpositionや形状は適宜変更してください*/

              .openbtn8{
                position: absolute;/*ボタン内側の基点となるためrelativeを指定*/
                top: 50%;
                right: 0%;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                cursor: pointer;
                width: 50px;
                height:50px;
                z-index: 100;
                border-radius: 5px;
              }

              /*ボタン内側*/
              .openbtn8 .openbtn-area{
                transition: all .6s;/*アニメーションの設定*/
                width:50px;
                height:50px;
              }

              .openbtn8 span {
                display: inline-block;
                transition: all .4s;
                position: absolute;
                left: 14px;
                height: 3px;
                border-radius: 2px;
                background: #fff;
                width: 45%;
                background: var(--c-primary);
              }

              .openbtn8 span:nth-of-type(1) {
                top:15px;
              }

              .openbtn8 span:nth-of-type(2) {
                top:23px;
              }

              .openbtn8 span:nth-of-type(3) {
                top:31px;
              }

              /*activeクラスが付与されると .openbtn-areaが360度回転し、その中の線が回転して×に*/
              .openbtn8.active .openbtn-area{
                transform: rotate(360deg);
              }

              .openbtn8.active span:nth-of-type(1) {
                top: 18px;
                left: 18px;
                transform: translateY(6px) rotate(-45deg);
                width: 30%;
                background: var(--c-gray);
              }

              .openbtn8.active span:nth-of-type(2) {
                opacity: 0;
              }

              .openbtn8.active span:nth-of-type(3){
                top: 30px;
                left: 18px;
                transform: translateY(-6px) rotate(45deg);
                width: 30%;
                background: var(--c-gray);
              }

              // 以下メニュー
              .openbtn8.active ~ .menu-content {
                left: 0;/*メニューを画面内へ*/
              }
              .menu-content {
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 100%;/*leftの値を変更してメニューを画面外へ*/
                z-index: 80;
                background: var(--c-primary);
                transition: all 0.5s;/*アニメーション設定*/
              }
              .sp_hamburger_box {
                padding: 7em 1em 0;
              }
              .sp_title {
                margin-bottom: 1em;
                color:#ffffff !important;
                font-weight: bold;
              }
              .menu-content ul li {
                border-bottom: solid 1px #ffffff;
                list-style: none;
              }
              .sp_list {
                display: block;
                width: 100%;
                font-size: 15px;
                box-sizing: border-box;
                color:#ffffff;
                text-decoration: none;
                padding: 9px 15px 10px 0;
                position: relative;
              }
              .sp_list::before {
                content: "";
                width: 7px;
                height: 7px;
                border-top: solid 2px #ffffff;
                border-right: solid 2px #ffffff;
                transform: rotate(45deg);
                position: absolute;
                right: 11px;
                top: 16px;
              }
            `}
          </style>
        </>
      )}
    </>
  );
};
