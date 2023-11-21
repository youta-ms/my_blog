import { BlogConfig } from "./types/config";

const blogConfig: BlogConfig = {
  use: "mdx", // mdx or notion
  siteLogo: {
    url: "/images/logo.png",
    width: 300,
    height: 80.1045,
  },
  siteName: "Youtaの雑記ブログ",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  title: "Youtaの雑記ブログ",
  description: "現役Webエンジニアが主にプログラミング・興味のあることについて書くブログです。",
  googleAnalyticsCode: "", // G-**********
  googleAdsenseCode: "", // ca-pub-****************
  notFoundPage: {
    title: "404",
    subtitle: "お探しのページが見つかりませんでした。",
    image: "/images/not-found.jpeg",
    description: `申し訳ありません。\nお探しのページは一時的にアクセスが出来ない状況にあるか、もしくは移動、削除され見つけることができません。`,
  },
  notFoundTagId: {
    title: "404",
    subtitle: "タグに関する記事が見つかりませんでした。",
    image: "/images/not-found.jpeg",
    description: `申し訳ありません。\n現在選択されたタグに関連する記事は見つかりませんでした。\n他のタグをお試しいただくか、もしくは他のカテゴリの記事をご覧いただくことをおすすめいたします。\n新しい情報をお届けできるよう努めてまいりますので、どうぞお楽しみにお待ちください。`,
  },
  topPage: {
    title: "NEW POSTS",
    readMoreLabel: "Read More",
  },
  categoryPage: {
    title: "POSTS",
    readMoreLabel: "Read More",
  },
  articlePage: {
    afterContentAd: "",
  },
  widgets: {
    categoryList: {
      title: "CATEGORY",
    },
    tagList: {
      title: "TAG",
    },
    share: {
      title: "Share",
      socials: ["twitter", "facebook"],
    },
    fixedSidebar: {
      ad: "",
    },
  },
  styles: {
    containerMaxWidth: "1280px",
    colors: {
      primary: "#20B2AB",
      primarySub: "#FFA17A",
      primaryLighter: "#EFF7F3",
      primaryGradient: "linear-gradient(to right, #00AAA2, #E7FEFC)",
      base: "#0d4062",
      border: "",
      bg: "#F7F7F7",
      text: "#333333",
      grayLighter: "#A0A0A0",
      white: "#FFFFFF",
    },
    breakPoints: {
      huge: "1440px",
      large: "1170px",
      medium: "768px",
      small: "450px",
    },
    breakPointsNumber: {
      huge: 1440,
      large: 1170,
      medium: 768,
      small: 450,
    },
  },
  hero: {
    title: "HOME",
    image: "/images/plane.jpeg",
    description: "Webの世界を駆ける20代エンジニアの、日常とアイデアの記録",
  },
  footer: {
    title: "Webの世界を駆ける20代エンジニアの、日常とアイデアの記録",
  },
  article: {
    defaultThumbnail: "/images/plane.jpeg",
    articlesPerPage: 6,
  },
  navigation: [
    {
      name: "HTML/CSS",
      url: `/markup`,
    },
    {
      name: "PHP",
      url: `/php`,
    },
    {
      name: "VCS",
      url: `/vcs`,
    },
    {
      name: "JavaScript",
      url: `/javascript`,
    },
  ],
  subNavigation: [
    {
      name: "免責事項",
      url: "/terms",
    },
    {
      name: "プライバシーボリシー",
      url: "/privacy",
    },
    {
      name: "お問い合わせ",
      url: "/contact",
    },
  ],
  account: {
    name: "Youta",
    description: "山口県出身の現役のWebエンジニアです。仕事を通して学んだことや、生活していく中で学んだことを発信していきます。",
    image: `/images/me.jpeg`,
    social: {
      twitter: "https://twitter.com/youta_ms",
      github: "https://github.com/youta-ms",
    },
  },
  writers: [
    {
      id: "me",
      name: "Youta",
      description: "山口県出身の現役のWebエンジニアです。仕事を通して学んだことや、生活していく中で学んだことを発信していきます。",
      image: "/images/me.jpeg",
    },
  ],
  categories: [
    {
      id: "markup",
      title: "HTML/CSS",
      imagePath: "/images/london.jpeg",
      description: "HTML/CSSに関する記事です",
    },
    {
      id: "php",
      title: "PHP",
      imagePath: "/images/london.jpeg",
      description: "PHPに関する記事です",
    },
    {
      id: "vcs",
      title: "VCS",
      imagePath: "/images/london.jpeg",
      description: "VCSに関する記事です",
    },
    {
      id: "javascript",
      title: "JavaScript",
      imagePath: "/images/london.jpeg",
      description: "JavaScriptに関する記事です",
    },
    {
      id: "nextJs",
      title: "Next.js",
      imagePath: "/images/london.jpeg",
      description: "Next.jsに関する記事です",
    },
    {
      id: "web3",
      title: "Web3.0",
      imagePath: "/images/web3_thumbnail.jpg",
      description: "Web3.0に関する記事です",
    },
  ],
  showCategories: [
    {
      id: "markup",
      title: "HTML/CSS",
      imagePath: "/images/london.jpeg",
      description: "HTML/CSSに関する記事です",
    },
    {
      id: "php",
      title: "PHP",
      imagePath: "/images/london.jpeg",
      description: "PHPに関する記事です",
    },
    {
      id: "vcs",
      title: "VCS",
      imagePath: "/images/london.jpeg",
      description: "VCSに関する記事です",
    },
    {
      id: "javascript",
      title: "JavaScript",
      imagePath: "/images/london.jpeg",
      description: "JavaScriptに関する記事です",
    },
  ],
  tags: [
    {
      id: "coding",
      title: "HTML/CSS",
    },
    {
      id: "laravel",
      title: "Laravel",
    },
    {
      id: "git",
      title: "Git",
    },
    {
      id: "dao",
      title: "DAO",
    },
    {
      id: "web3",
      title: "Web3.0",
    },
    {
      id: "blockchain",
      title: "Blockchain",
    },
    {
      id: "digital_token",
      title: "Digital Token",
    },
    {
      id: "nft",
      title: "NFT",
    },
    {
      id: "metaverse",
      title: "MetaVerse",
    },
    {
      id: "js",
      title: "JS/Jquery",
    },
    {
      id: "wordpress",
      title: "WordPress",
    },
    {
      id: "next",
      title: "Next.js",
    },
  ],
};

export default blogConfig;
