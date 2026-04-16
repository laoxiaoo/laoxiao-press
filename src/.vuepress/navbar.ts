import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/portfolio",
  //icon 默认加载的是Material Symbols； 设置示例：https://icon-sets.iconify.design/material-symbols/page-42.html
  {
    text: "数据库",
    icon: "database",
    link: "/database/",
  },
  {
    text: "AI",
    icon: "material-symbols:book-6-outline",
    link: "/ai/",
  },
  // {
  //   text: "指南",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
  {
    text: "Java",
    icon: "code",
    link: "/java/",
  },
  {
    text: "其他",
    icon: "file",
    link: "/other/",
  }
]);
