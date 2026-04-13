import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/ai/": "structure",
  "/demo/": "structure", 
  "/guide/": "structure",
  "/java/": [
    {
      text: "Java 基础",
      prefix: "java-base/",
      collapsible: true,
      children: [
        {
          text: "Api",
          prefix: "api/",
          collapsible: true,
          children: ["1-base", "2-thread", "3-bigDecimal", "4-map", "6-stream"],
        },
        {
          text: "Concurrent",
          prefix: "concurrent/",
          collapsible: true,
          children: [
            "1-base",
            "2-cas",
            "4-juc-lock",
            "5-synchronized",
            "1-concurrent",
            "5-juc-con",
            "3-method",
            "4-signalCommunication",
            "7-threadpool",
          ],
        },
      ],
    },
    {
      text: "Mybatis",
      prefix: "java-mybatis/",
      collapsible: true,
      children: [
        "",
        "/java/java-mybatis/sidebar.html",
        "4-plugin",
        "MybatisPlus",
        "5-cache",
        "3-advanced-application",
        "2-architecture",
        "1-custom-persistence",
      ],
    },
  ],
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
