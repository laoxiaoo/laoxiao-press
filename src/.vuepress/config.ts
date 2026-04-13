import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "湘A老萧",
  description: "老萧的笔记",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
