import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/ai/": "structure",
  "/demo/": "structure", 
  "/guide/": "structure",
  "/java/": "structure",
  "/": [
    "",
    "portfolio",
    {
      text: "案例",
      icon: "laptop-code",
      link: "/demo/",
    },
    {
      text: "AI",
      icon: "cpu", 
      link: "/ai/",
    },
    {
      text: "文档",
      icon: "book",
      link: "/guide/",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
