import blogConfig from "@/blog.config";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CategoryHamburgerList } from "../common/category-hamburger-list";

export const HeaderLink = () => {
  const [isModal, setIsModal] = useState(false);
  const [showHamburgerList, setShowHamburgerList] = useState(false)

  useEffect(() => {
    if (!window) return
    const handleResize = () => {
      console.log(window.innerWidth);
      console.log(blogConfig.styles.breakPointsNumber.medium);


      window.innerWidth >= blogConfig.styles.breakPointsNumber.medium ? setShowHamburgerList(true) : setShowHamburgerList(false)
    }
    handleResize()
  }, [])

  return (
    <>
      {showHamburgerList ? (
        // ウィンドウの幅が指定のブレークポイント以上の場合に表示する内容
        <ul className="header-nav gnavi">
          {blogConfig.navigation.map((n) => (
            <li key={n.url}>
              <a href={n.url}>{n.name}</a>
            </li>
          ))}
          <style jsx>
            {`
              .header-nav {
                list-style-type: none;
                padding: 0;
                display: flex;
                justify-content: center;
                max-width: var(--container-width);
                margin: 0 auto;
                overflow-x: auto;
              }
              .header-nav li {
                a {
                  display: block;
                  padding: 15px 25px;
                  font-weight: bold;
                  color: var(--c-primary);
                }
              }

              /*==================================================
              　5-3-5 左から右に背景が伸びる
              ===================================*/

              /*背景の設定*/

              .gnavi li a{
                  /*背景色の基点とするためrelativeを指定*/
                position: relative;
                z-index: 1;
              }

              .gnavi li a::after {
                content: '';
                  /*絶対配置で線の位置を決める*/
                position: absolute;
                z-index: -1;
                bottom: 0;
                left: 0;
                  /*背景の形状*/
                width: 0;
                height:100%;
                background: var(--c-primary);
                  /*アニメーションの指定*/
                transition:all .5s;
                opacity: 0;/*はじめは透過0*/
              }

              /*現在地とhoverの設定*/
              .gnavi li.current a::after,
              .gnavi li a:hover::after {
                  /*背景の形状*/
                width: 100%;/*横幅を伸ばす*/
                opacity: 1;/*不透明に*/
              }

              .gnavi li.current a,
              .gnavi li a:hover{
                  color: #fff;
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
