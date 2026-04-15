// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  // "/portfolio",
  {
    text: "\u6570\u636E\u5E93",
    icon: "database",
    link: "/database/"
  },
  {
    text: "AI",
    icon: "cpu",
    link: "/ai/"
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
    icon: "coffee",
    link: "/java/"
  },
  {
    text: "\u5176\u4ED6",
    icon: "file",
    link: "/other/"
  }
]);

// src/.vuepress/sidebar/java_sidebar.ts
var javaSidebarConfig = {
  "/java/": [
    {
      text: "Java \u57FA\u7840",
      prefix: "java-base/",
      collapsible: true,
      children: [
        {
          text: "Api\u4F7F\u7528",
          prefix: "api/",
          collapsible: true,
          children: ["1-base", "2-thread", "3-bigDecimal", "4-map", "6-stream", "7-jackson"]
        },
        {
          text: "\u5E76\u53D1\u7F16\u7A0B",
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
            "7-threadpool"
          ]
        }
      ]
    },
    {
      text: "JVM",
      prefix: "java-jvm/",
      collapsible: true,
      children: [
        "1-jvm",
        "2-jvm",
        "3-rundata",
        "4-object",
        "5-jvm",
        "6-classfile",
        "7-gc",
        "8-classload",
        "9-optimize"
      ]
    },
    {
      text: "IO",
      prefix: "java-io/",
      collapsible: true,
      children: [
        "1-tcp",
        "1-nio",
        "2-netty-base",
        "3-netty-advanc"
      ]
    },
    "version",
    "mockito",
    {
      text: "Mybatis",
      prefix: "java-mybatis/",
      collapsible: true,
      children: [
        "JDBC",
        "1-custom-persistence",
        "2-architecture",
        "3-advanced-application",
        "4-plugin",
        "5-cache",
        "MybatisPlus"
      ]
    },
    {
      text: "Spring",
      prefix: "spring/",
      collapsible: true,
      children: [
        "1-base",
        "2-ioc",
        "3-springbean",
        "4-event",
        "5-environment",
        "6-model",
        "7-util",
        "8-servlet",
        "10-beanPost"
      ]
    },
    "SpringBoot",
    {
      text: "SpringCloud",
      prefix: "springcloud/",
      collapsible: true,
      children: [
        "0-base",
        "1-register-Center",
        "2-load-balance",
        "3-restful",
        "4-gateway",
        "4-distributed-transaction",
        "5-trafficFault-tolerant",
        "6-full-link-log"
      ]
    }
  ]
};

// src/.vuepress/sidebar/database_sidebar.ts
var databaseSidebarConfig = {
  "/database": [
    {
      text: "MySQL",
      prefix: "mysql/",
      collapsible: true,
      children: [
        "1-base",
        "2-innodb",
        "3-file",
        "4-index",
        "5-transaction",
        "6-application",
        "7-distributed_transaction"
      ]
    },
    {
      text: "Elasticsearch",
      prefix: "es/",
      collapsible: true,
      children: [
        "1-base",
        "2-describe",
        "3-curd",
        "4-mapping",
        "5-java-api",
        "6-aggs",
        "7-problem"
      ]
    },
    {
      text: "Redis",
      prefix: "redis/",
      collapsible: true,
      children: [
        "1-base",
        "2-redis-datastructure",
        "3-redis-sample",
        "4-persistence",
        "5-replication",
        "6-sentinel",
        "7-cluster",
        "8-api",
        "9-transation"
      ]
    },
    "zookeeper/README.md"
  ]
};

// src/.vuepress/sidebar/base_sidebar.ts
import { sidebar } from "vuepress-theme-hope";

// src/.vuepress/sidebar/ai_sidebar.ts
var aiSidebarConfig = {
  "/ai/code/": [
    "1-README"
  ]
};

// src/.vuepress/sidebar/mq_sidebar.ts
var mqSidebarConfig = {
  "/other/mq/": [
    "activeMq/activeMq",
    "kafka/kafka",
    "RabbitMQ/RabbitMQ",
    {
      text: "rocketmq",
      prefix: "rocketmq/",
      collapsible: true,
      children: [
        "rocketmq",
        "2-source-code"
      ]
    }
  ]
};

// src/.vuepress/sidebar/base_sidebar.ts
var baseSidebarConfig = sidebar({
  ...javaSidebarConfig,
  ...databaseSidebarConfig,
  ...aiSidebarConfig,
  ...mqSidebarConfig
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  author: {
    name: "\u6E58A\u8001\u8427"
    //url: "https://mister-hope.com",
  },
  logo: "./image/logo.png",
  // repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "src",
  // 导航栏
  navbar: navbar_default,
  // 侧边栏
  sidebar: baseSidebarConfig,
  // 页脚
  // footer: "默认页脚",
  displayFooter: true,
  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234"
      }
    }
  },
  // 仓库显示
  repoDisplay: false,
  repo: "laoxiao-press/laoxiao-press",
  //底部编辑此页去掉
  editLink: false,
  // 多语言配置
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },
  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em") {
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended"
            };
          }
        }
      }
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    // 取消注释它们如果你需要 TeX 支持
    // math: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 @mathjax/src
    //   type: "mathjax",
    // },
    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
    // 在启用之前安装 chart.js
    // chartjs: true,
    // insert component easily
    // 在启用之前安装 echarts
    // echarts: true,
    // 在启用之前安装 flowchart.ts
    // flowchart: true,
    // 在启用之前安装 mermaid
    // mermaid: true,
    // markmap 插件
    markmap: true
    // playground: {
    //   presets: ["ts", "vue"],
    // },
    // 在启用之前安装 @vue/repl
    // vuePlayground: true,
    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },
  // 在这里配置主题提供的插件
  plugins: {
    // 注意: 仅用于测试! 你必须自行生成并在生产环境中使用自己的评论服务
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },
    components: {
      components: ["Badge", "VPCard"]
    },
    icon: {
      prefix: "fa6-solid:"
    }
    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "\u6E58A\u8001\u8427",
  description: "\u8001\u8427\u7684\u7B14\u8BB0",
  theme: theme_default
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvamF2YV9zaWRlYmFyLnRzIiwgInNyYy8udnVlcHJlc3Mvc2lkZWJhci9kYXRhYmFzZV9zaWRlYmFyLnRzIiwgInNyYy8udnVlcHJlc3Mvc2lkZWJhci9iYXNlX3NpZGViYXIudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL2FpX3NpZGViYXIudHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL21xX3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9naXQveGlhb3hpYW8tcHJlc3MvbGFveGlhby1wcmVzcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxnaXRcXFxceGlhb3hpYW8tcHJlc3NcXFxcbGFveGlhby1wcmVzc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZ2l0L3hpYW94aWFvLXByZXNzL2xhb3hpYW8tcHJlc3Mvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbGFuZzogXCJ6aC1DTlwiLFxuICB0aXRsZTogXCJcdTZFNThBXHU4MDAxXHU4NDI3XCIsXG4gIGRlc2NyaXB0aW9uOiBcIlx1ODAwMVx1ODQyN1x1NzY4NFx1N0IxNFx1OEJCMFwiLFxuXG4gIHRoZW1lLFxuICAvLyBcdTU0OEMgUFdBIFx1NEUwMFx1OEQ3N1x1NTQyRlx1NzUyOFxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovZ2l0L3hpYW94aWFvLXByZXNzL2xhb3hpYW8tcHJlc3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZ2l0XFxcXHhpYW94aWFvLXByZXNzXFxcXGxhb3hpYW8tcHJlc3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZ2l0L3hpYW94aWFvLXByZXNzL2xhb3hpYW8tcHJlc3Mvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhci5qc1wiO1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XHJcbmltcG9ydCB7YmFzZVNpZGViYXJDb25maWd9IGZyb20gXCIuL3NpZGViYXIvYmFzZV9zaWRlYmFyLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vdnVlcHJlc3MtdGhlbWUtaG9wZS1kb2NzLWRlbW8ubmV0bGlmeS5hcHBcIixcclxuXHJcbiAgYXV0aG9yOiB7XHJcbiAgICBuYW1lOiBcIlx1NkU1OEFcdTgwMDFcdTg0MjdcIixcclxuICAgIC8vdXJsOiBcImh0dHBzOi8vbWlzdGVyLWhvcGUuY29tXCIsXHJcbiAgfSxcclxuXHJcbiAgbG9nbzogXCIuL2ltYWdlL2xvZ28ucG5nXCIsXHJcblxyXG4gIC8vIHJlcG86IFwidnVlcHJlc3MtdGhlbWUtaG9wZS92dWVwcmVzcy10aGVtZS1ob3BlXCIsXHJcblxyXG4gIGRvY3NEaXI6IFwic3JjXCIsXHJcblxyXG4gIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRlxyXG4gIG5hdmJhcixcclxuXHJcbiAgLy8gXHU0RkE3XHU4RkI5XHU2ODBGXHJcbiAgc2lkZWJhcjogYmFzZVNpZGViYXJDb25maWcsXHJcbiAgLy8gXHU5ODc1XHU4MTFBXHJcbiAgLy8gZm9vdGVyOiBcIlx1OUVEOFx1OEJBNFx1OTg3NVx1ODExQVwiLFxyXG4gIGRpc3BsYXlGb290ZXI6IHRydWUsXHJcblxyXG4gIC8vIFx1NTJBMFx1NUJDNlx1OTE0RFx1N0Y2RVxyXG4gIGVuY3J5cHQ6IHtcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICBcIi9kZW1vL2VuY3J5cHQuaHRtbFwiOiB7XHJcbiAgICAgICAgaGludDogXCJQYXNzd29yZDogMTIzNFwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIjEyMzRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8gXHU0RUQzXHU1RTkzXHU2NjNFXHU3OTNBXHJcbiAgcmVwb0Rpc3BsYXk6IGZhbHNlLFxyXG4gIHJlcG86ICdsYW94aWFvLXByZXNzL2xhb3hpYW8tcHJlc3MnLFxyXG5cclxuICAvL1x1NUU5NVx1OTBFOFx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVx1NTNCQlx1NjM4OVxyXG4gIGVkaXRMaW5rOiBmYWxzZSxcclxuICAvLyBcdTU5MUFcdThCRURcdThBMDBcdTkxNERcdTdGNkVcclxuICAvLyBtZXRhTG9jYWxlczoge1xyXG4gIC8vICAgZWRpdExpbms6IFwiXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcIixcclxuICAvLyB9LFxyXG5cclxuICAvLyBcdTU5ODJcdTY3OUNcdTYwRjNcdTg5ODFcdTVCOUVcdTY1RjZcdTY3RTVcdTc3MEJcdTRFRkJcdTRGNTVcdTY1MzlcdTUzRDhcdUZGMENcdTU0MkZcdTc1MjhcdTVCODNcdTMwMDJcdTZDRTg6IFx1OEZEOVx1NUJGOVx1NjZGNFx1NjVCMFx1NjAyN1x1ODBGRFx1NjcwOVx1NUY4OFx1NTkyN1x1OEQxRlx1OTc2Mlx1NUY3MVx1NTRDRFxyXG4gIC8vIGhvdFJlbG9hZDogdHJ1ZSxcclxuXHJcbiAgLy8gXHU2QjY0XHU1OTA0XHU1RjAwXHU1NDJGXHU0RTg2XHU1Rjg4XHU1OTFBXHU1MjlGXHU4MEZEXHU3NTI4XHU0RThFXHU2RjE0XHU3OTNBXHVGRjBDXHU0RjYwXHU1RTk0XHU0RUM1XHU0RkREXHU3NTU5XHU3NTI4XHU1MjMwXHU3Njg0XHU1MjlGXHU4MEZEXHUzMDAyXHJcbiAgbWFya2Rvd246IHtcclxuICAgIGFsaWduOiB0cnVlLFxyXG4gICAgYXR0cnM6IHRydWUsXHJcbiAgICBjb2RlVGFiczogdHJ1ZSxcclxuICAgIGNvbXBvbmVudDogdHJ1ZSxcclxuICAgIGRlbW86IHRydWUsXHJcbiAgICBmaWd1cmU6IHRydWUsXHJcbiAgICBnZm06IHRydWUsXHJcbiAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcclxuICAgIGltZ1NpemU6IHRydWUsXHJcbiAgICBpbmNsdWRlOiB0cnVlLFxyXG4gICAgbWFyazogdHJ1ZSxcclxuICAgIHBsYW50dW1sOiB0cnVlLFxyXG4gICAgc3BvaWxlcjogdHJ1ZSxcclxuICAgIHN0eWxpemU6IFtcclxuICAgICAge1xyXG4gICAgICAgIG1hdGNoZXI6IFwiUmVjb21tZW5kZWRcIixcclxuICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcclxuICAgICAgICAgIGlmICh0YWcgPT09IFwiZW1cIikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxyXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGlwXCIgfSxcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBzdWI6IHRydWUsXHJcbiAgICBzdXA6IHRydWUsXHJcbiAgICB0YWJzOiB0cnVlLFxyXG4gICAgdGFza2xpc3Q6IHRydWUsXHJcbiAgICB2UHJlOiB0cnVlLFxyXG5cclxuICAgIC8vIFx1NTNENlx1NkQ4OFx1NkNFOFx1OTFDQVx1NUI4M1x1NEVFQ1x1NTk4Mlx1Njc5Q1x1NEY2MFx1OTcwMFx1ODk4MSBUZVggXHU2NTJGXHU2MzAxXHJcbiAgICAvLyBtYXRoOiB7XHJcbiAgICAvLyAgIC8vIFx1NTQyRlx1NzUyOFx1NTI0RFx1NUI4OVx1ODhDNSBrYXRleFxyXG4gICAgLy8gICB0eXBlOiBcImthdGV4XCIsXHJcbiAgICAvLyAgIC8vIFx1NjIxNlx1ODAwNVx1NUI4OVx1ODhDNSBAbWF0aGpheC9zcmNcclxuICAgIC8vICAgdHlwZTogXCJtYXRoamF4XCIsXHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NEY2MFx1OTcwMFx1ODk4MVx1NUU3Qlx1NzA2Rlx1NzI0N1x1RkYwQ1x1NUI4OVx1ODhDNSBAdnVlcHJlc3MvcGx1Z2luLXJldmVhbGpzIFx1NUU3Nlx1NTNENlx1NkQ4OFx1NEUwQlx1NjVCOVx1NkNFOFx1OTFDQVxyXG4gICAgLy8gcmV2ZWFsanM6IHtcclxuICAgIC8vICAgcGx1Z2luczogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGNoYXJ0LmpzXHJcbiAgICAvLyBjaGFydGpzOiB0cnVlLFxyXG5cclxuICAgIC8vIGluc2VydCBjb21wb25lbnQgZWFzaWx5XHJcblxyXG4gICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGVjaGFydHNcclxuICAgIC8vIGVjaGFydHM6IHRydWUsXHJcblxyXG4gICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IGZsb3djaGFydC50c1xyXG4gICAgLy8gZmxvd2NoYXJ0OiB0cnVlLFxyXG5cclxuICAgIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSBtZXJtYWlkXHJcbiAgICAvLyBtZXJtYWlkOiB0cnVlLFxyXG5cclxuICAgIC8vIG1hcmttYXAgXHU2M0QyXHU0RUY2XHJcbiAgICBtYXJrbWFwOiB0cnVlLFxyXG5cclxuICAgIC8vIHBsYXlncm91bmQ6IHtcclxuICAgIC8vICAgcHJlc2V0czogW1widHNcIiwgXCJ2dWVcIl0sXHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIFx1NTcyOFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1NUI4OVx1ODhDNSBAdnVlL3JlcGxcclxuICAgIC8vIHZ1ZVBsYXlncm91bmQ6IHRydWUsXHJcblxyXG4gICAgLy8gXHU1NzI4XHU1NDJGXHU3NTI4XHU0RTRCXHU1MjREXHU1Qjg5XHU4OEM1IHNhbmRwYWNrLXZ1ZTNcclxuICAgIC8vIHNhbmRwYWNrOiB0cnVlLFxyXG4gIH0sXHJcblxyXG4gIC8vIFx1NTcyOFx1OEZEOVx1OTFDQ1x1OTE0RFx1N0Y2RVx1NEUzQlx1OTg5OFx1NjNEMFx1NEY5Qlx1NzY4NFx1NjNEMlx1NEVGNlxyXG4gIHBsdWdpbnM6IHtcclxuICAgIC8vIFx1NkNFOFx1NjEwRjogXHU0RUM1XHU3NTI4XHU0RThFXHU2RDRCXHU4QkQ1ISBcdTRGNjBcdTVGQzVcdTk4N0JcdTgxRUFcdTg4NENcdTc1MUZcdTYyMTBcdTVFNzZcdTU3MjhcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTRFMkRcdTRGN0ZcdTc1MjhcdTgxRUFcdTVERjFcdTc2ODRcdThCQzRcdThCQkFcdTY3MERcdTUyQTFcclxuICAgIC8vIGNvbW1lbnQ6IHtcclxuICAgIC8vICAgcHJvdmlkZXI6IFwiR2lzY3VzXCIsXHJcbiAgICAvLyAgIHJlcG86IFwidnVlcHJlc3MtdGhlbWUtaG9wZS9naXNjdXMtZGlzY3Vzc2lvbnNcIixcclxuICAgIC8vICAgcmVwb0lkOiBcIlJfa2dET0dfUHQyQVwiLFxyXG4gICAgLy8gICBjYXRlZ29yeTogXCJBbm5vdW5jZW1lbnRzXCIsXHJcbiAgICAvLyAgIGNhdGVnb3J5SWQ6IFwiRElDX2t3RE9HX1B0Mk00Q09ENjlcIixcclxuICAgIC8vIH0sXHJcblxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBjb21wb25lbnRzOiBbXCJCYWRnZVwiLCBcIlZQQ2FyZFwiXSxcclxuICAgIH0sXHJcblxyXG4gICAgaWNvbjoge1xyXG4gICAgICBwcmVmaXg6IFwiZmE2LXNvbGlkOlwiLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBcdTU5ODJcdTY3OUNcdTRGNjBcdTk3MDBcdTg5ODEgUFdBXHUzMDAyXHU1Qjg5XHU4OEM1IEB2dWVwcmVzcy9wbHVnaW4tcHdhIFx1NUU3Nlx1NTNENlx1NkQ4OFx1NEUwQlx1NjVCOVx1NkNFOFx1OTFDQVxyXG4gICAgLy8gcHdhOiB7XHJcbiAgICAvLyAgIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXHJcbiAgICAvLyAgIGNhY2hlSFRNTDogdHJ1ZSxcclxuICAgIC8vICAgY2FjaGVJbWFnZTogdHJ1ZSxcclxuICAgIC8vICAgYXBwZW5kQmFzZTogdHJ1ZSxcclxuICAgIC8vICAgYXBwbGU6IHtcclxuICAgIC8vICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcclxuICAgIC8vICAgICBzdGF0dXNCYXJDb2xvcjogXCJibGFja1wiLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBtc1RpbGU6IHtcclxuICAgIC8vICAgICBpbWFnZTogXCIvYXNzZXRzL2ljb24vbXMtaWNvbi0xNDQucG5nXCIsXHJcbiAgICAvLyAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBtYW5pZmVzdDoge1xyXG4gICAgLy8gICAgIGljb25zOiBbXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stNTEyLnBuZ1wiLFxyXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stMTkyLnBuZ1wiLFxyXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTUxMi5wbmdcIixcclxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxyXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgIF0sXHJcbiAgICAvLyAgICAgc2hvcnRjdXRzOiBbXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgIG5hbWU6IFwiRGVtb1wiLFxyXG4gICAgLy8gICAgICAgICBzaG9ydF9uYW1lOiBcIkRlbW9cIixcclxuICAgIC8vICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxyXG4gICAgLy8gICAgICAgICBpY29uczogW1xyXG4gICAgLy8gICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXHJcbiAgICAvLyAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAvLyAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXHJcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgLy8gICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIF0sXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgIF0sXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2dpdC94aWFveGlhby1wcmVzcy9sYW94aWFvLXByZXNzL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGdpdFxcXFx4aWFveGlhby1wcmVzc1xcXFxsYW94aWFvLXByZXNzXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9naXQveGlhb3hpYW8tcHJlc3MvbGFveGlhby1wcmVzcy9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIFwiL1wiLFxuICAvLyBcIi9wb3J0Zm9saW9cIixcbiAge1xuICAgIHRleHQ6IFwiXHU2NTcwXHU2MzZFXHU1RTkzXCIsXG4gICAgaWNvbjogXCJkYXRhYmFzZVwiLFxuICAgIGxpbms6IFwiL2RhdGFiYXNlL1wiLFxuICB9LFxuICB7XG4gICAgdGV4dDogXCJBSVwiLFxuICAgIGljb246IFwiY3B1XCIsXG4gICAgbGluazogXCIvYWkvXCIsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICB0ZXh0OiBcIlx1NjMwN1x1NTM1N1wiLFxuICAvLyAgIGljb246IFwibGlnaHRidWxiXCIsXG4gIC8vICAgcHJlZml4OiBcIi9ndWlkZS9cIixcbiAgLy8gICBjaGlsZHJlbjogW1xuICAvLyAgICAge1xuICAvLyAgICAgICB0ZXh0OiBcIkJhclwiLFxuICAvLyAgICAgICBpY29uOiBcImxpZ2h0YnVsYlwiLFxuICAvLyAgICAgICBwcmVmaXg6IFwiYmFyL1wiLFxuICAvLyAgICAgICBjaGlsZHJlbjogW1wiYmF6XCIsIHsgdGV4dDogXCIuLi5cIiwgaWNvbjogXCJlbGxpcHNpc1wiLCBsaW5rOiBcIlwiIH1dLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgdGV4dDogXCJGb29cIixcbiAgLy8gICAgICAgaWNvbjogXCJsaWdodGJ1bGJcIixcbiAgLy8gICAgICAgcHJlZml4OiBcImZvby9cIixcbiAgLy8gICAgICAgY2hpbGRyZW46IFtcInJheVwiLCB7IHRleHQ6IFwiLi4uXCIsIGljb246IFwiZWxsaXBzaXNcIiwgbGluazogXCJcIiB9XSxcbiAgLy8gICAgIH0sXG4gIC8vICAgXSxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHRleHQ6IFwiVjIgXHU2NTg3XHU2ODYzXCIsXG4gIC8vICAgaWNvbjogXCJib29rXCIsXG4gIC8vICAgbGluazogXCJodHRwczovL3RoZW1lLWhvcGUudnVlanMucHJlc3MvemgvXCIsXG4gIC8vIH0sXG4gIHtcbiAgICB0ZXh0OiBcIkphdmFcIixcbiAgICBpY29uOiBcImNvZmZlZVwiLFxuICAgIGxpbms6IFwiL2phdmEvXCIsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlx1NTE3Nlx1NEVENlwiLFxuICAgIGljb246IFwiZmlsZVwiLFxuICAgIGxpbms6IFwiL290aGVyL1wiLFxuICB9XG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovZ2l0L3hpYW94aWFvLXByZXNzL2xhb3hpYW8tcHJlc3Mvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxnaXRcXFxceGlhb3hpYW8tcHJlc3NcXFxcbGFveGlhby1wcmVzc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxcamF2YV9zaWRlYmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9naXQveGlhb3hpYW8tcHJlc3MvbGFveGlhby1wcmVzcy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvamF2YV9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLWhvcGUnO1xuXG5leHBvcnQgY29uc3QgamF2YVNpZGViYXJDb25maWcgPSB7XG4gICAgJy9qYXZhLyc6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0phdmEgXHU1N0ZBXHU3ODQwJyxcbiAgICAgICAgICAgIHByZWZpeDogJ2phdmEtYmFzZS8nLFxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FwaVx1NEY3Rlx1NzUyOCcsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogJ2FwaS8nLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFsnMS1iYXNlJywgJzItdGhyZWFkJywgJzMtYmlnRGVjaW1hbCcsICc0LW1hcCcsICc2LXN0cmVhbScsICc3LWphY2tzb24nXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NUU3Nlx1NTNEMVx1N0YxNlx1N0EwQicsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogJ2NvbmN1cnJlbnQvJyxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnMS1iYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICcyLWNhcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnNC1qdWMtbG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnNS1zeW5jaHJvbml6ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzEtY29uY3VycmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnNS1qdWMtY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICczLW1ldGhvZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnNC1zaWduYWxDb21tdW5pY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc3LXRocmVhZHBvb2wnLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnSlZNJyxcbiAgICAgICAgICAgIHByZWZpeDogJ2phdmEtanZtLycsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgJzEtanZtJyxcbiAgICAgICAgICAgICAgICAnMi1qdm0nLFxuICAgICAgICAgICAgICAgICczLXJ1bmRhdGEnLFxuICAgICAgICAgICAgICAgICc0LW9iamVjdCcsXG4gICAgICAgICAgICAgICAgJzUtanZtJyxcbiAgICAgICAgICAgICAgICAnNi1jbGFzc2ZpbGUnLFxuICAgICAgICAgICAgICAgICc3LWdjJyxcbiAgICAgICAgICAgICAgICAnOC1jbGFzc2xvYWQnLFxuICAgICAgICAgICAgICAgICc5LW9wdGltaXplJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdJTycsXG4gICAgICAgICAgICBwcmVmaXg6ICdqYXZhLWlvLycsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgJzEtdGNwJyxcbiAgICAgICAgICAgICAgICAnMS1uaW8nLFxuICAgICAgICAgICAgICAgICcyLW5ldHR5LWJhc2UnLFxuICAgICAgICAgICAgICAgICczLW5ldHR5LWFkdmFuYycsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBcInZlcnNpb25cIixcbiAgICAgICAgXCJtb2NraXRvXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdNeWJhdGlzJyxcbiAgICAgICAgICAgIHByZWZpeDogJ2phdmEtbXliYXRpcy8nLFxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICdKREJDJyxcbiAgICAgICAgICAgICAgICAnMS1jdXN0b20tcGVyc2lzdGVuY2UnLFxuICAgICAgICAgICAgICAgICcyLWFyY2hpdGVjdHVyZScsXG4gICAgICAgICAgICAgICAgJzMtYWR2YW5jZWQtYXBwbGljYXRpb24nLFxuICAgICAgICAgICAgICAgICc0LXBsdWdpbicsXG4gICAgICAgICAgICAgICAgJzUtY2FjaGUnLFxuICAgICAgICAgICAgICAgICdNeWJhdGlzUGx1cycsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnU3ByaW5nJyxcbiAgICAgICAgICAgIHByZWZpeDogJ3NwcmluZy8nLFxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICcxLWJhc2UnLFxuICAgICAgICAgICAgICAgICcyLWlvYycsXG4gICAgICAgICAgICAgICAgJzMtc3ByaW5nYmVhbicsXG4gICAgICAgICAgICAgICAgJzQtZXZlbnQnLFxuICAgICAgICAgICAgICAgICc1LWVudmlyb25tZW50JyxcbiAgICAgICAgICAgICAgICAnNi1tb2RlbCcsXG4gICAgICAgICAgICAgICAgJzctdXRpbCcsXG4gICAgICAgICAgICAgICAgJzgtc2VydmxldCcsXG4gICAgICAgICAgICAgICAgJzEwLWJlYW5Qb3N0JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgICdTcHJpbmdCb290JyxcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1NwcmluZ0Nsb3VkJyxcbiAgICAgICAgICAgIHByZWZpeDogJ3NwcmluZ2Nsb3VkLycsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgJzAtYmFzZScsXG4gICAgICAgICAgICAgICAgJzEtcmVnaXN0ZXItQ2VudGVyJyxcbiAgICAgICAgICAgICAgICAnMi1sb2FkLWJhbGFuY2UnLFxuICAgICAgICAgICAgICAgICczLXJlc3RmdWwnLFxuICAgICAgICAgICAgICAgICc0LWdhdGV3YXknLFxuICAgICAgICAgICAgICAgICc0LWRpc3RyaWJ1dGVkLXRyYW5zYWN0aW9uJyxcbiAgICAgICAgICAgICAgICAnNS10cmFmZmljRmF1bHQtdG9sZXJhbnQnLFxuICAgICAgICAgICAgICAgICc2LWZ1bGwtbGluay1sb2cnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICBdLFxufTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2dpdC94aWFveGlhby1wcmVzcy9sYW94aWFvLXByZXNzL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZ2l0XFxcXHhpYW94aWFvLXByZXNzXFxcXGxhb3hpYW8tcHJlc3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXGRhdGFiYXNlX3NpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2dpdC94aWFveGlhby1wcmVzcy9sYW94aWFvLXByZXNzL3NyYy8udnVlcHJlc3Mvc2lkZWJhci9kYXRhYmFzZV9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLWhvcGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlU2lkZWJhckNvbmZpZyA9IHtcclxuICAgICcvZGF0YWJhc2UnOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnTXlTUUwnLFxyXG4gICAgICAgICAgICBwcmVmaXg6ICdteXNxbC8nLFxyXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICcxLWJhc2UnLFxyXG4gICAgICAgICAgICAgICAgJzItaW5ub2RiJyxcclxuICAgICAgICAgICAgICAgICczLWZpbGUnLFxyXG4gICAgICAgICAgICAgICAgJzQtaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgJzUtdHJhbnNhY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgJzYtYXBwbGljYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgJzctZGlzdHJpYnV0ZWRfdHJhbnNhY3Rpb24nLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnRWxhc3RpY3NlYXJjaCcsXHJcbiAgICAgICAgICAgIHByZWZpeDogJ2VzLycsXHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgJzEtYmFzZScsXHJcbiAgICAgICAgICAgICAgICAnMi1kZXNjcmliZScsXHJcbiAgICAgICAgICAgICAgICAnMy1jdXJkJyxcclxuICAgICAgICAgICAgICAgICc0LW1hcHBpbmcnLFxyXG4gICAgICAgICAgICAgICAgJzUtamF2YS1hcGknLFxyXG4gICAgICAgICAgICAgICAgJzYtYWdncycsXHJcbiAgICAgICAgICAgICAgICAnNy1wcm9ibGVtJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1JlZGlzJyxcclxuICAgICAgICAgICAgcHJlZml4OiAncmVkaXMvJyxcclxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAnMS1iYXNlJyxcclxuICAgICAgICAgICAgICAgICcyLXJlZGlzLWRhdGFzdHJ1Y3R1cmUnLFxyXG4gICAgICAgICAgICAgICAgJzMtcmVkaXMtc2FtcGxlJyxcclxuICAgICAgICAgICAgICAgICc0LXBlcnNpc3RlbmNlJyxcclxuICAgICAgICAgICAgICAgICc1LXJlcGxpY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICc2LXNlbnRpbmVsJyxcclxuICAgICAgICAgICAgICAgICc3LWNsdXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgJzgtYXBpJyxcclxuICAgICAgICAgICAgICAgICc5LXRyYW5zYXRpb24nLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3pvb2tlZXBlci9SRUFETUUubWQnLFxyXG5cclxuICAgIF0sXHJcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2dpdC94aWFveGlhby1wcmVzcy9sYW94aWFvLXByZXNzL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZ2l0XFxcXHhpYW94aWFvLXByZXNzXFxcXGxhb3hpYW8tcHJlc3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXGJhc2Vfc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZ2l0L3hpYW94aWFvLXByZXNzL2xhb3hpYW8tcHJlc3Mvc3JjLy52dWVwcmVzcy9zaWRlYmFyL2Jhc2Vfc2lkZWJhci50c1wiO2ltcG9ydCB7amF2YVNpZGViYXJDb25maWd9IGZyb20gXCIuL2phdmFfc2lkZWJhci5qc1wiO1xyXG5pbXBvcnQge2RhdGFiYXNlU2lkZWJhckNvbmZpZ30gZnJvbSBcIi4vZGF0YWJhc2Vfc2lkZWJhci5qc1wiO1xyXG5pbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtaG9wZSc7XHJcbmltcG9ydCB7YWlTaWRlYmFyQ29uZmlnfSBmcm9tIFwiLi9haV9zaWRlYmFyLmpzXCI7XHJcbmltcG9ydCB7bXFTaWRlYmFyQ29uZmlnfSBmcm9tIFwiLi9tcV9zaWRlYmFyLmpzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlU2lkZWJhckNvbmZpZyA9IHNpZGViYXIoe1xyXG4gIC4uLmphdmFTaWRlYmFyQ29uZmlnLFxyXG4gIC4uLmRhdGFiYXNlU2lkZWJhckNvbmZpZyxcclxuICAuLi5haVNpZGViYXJDb25maWcsXHJcbiAgLi4ubXFTaWRlYmFyQ29uZmlnLFxyXG59KTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2dpdC94aWFveGlhby1wcmVzcy9sYW94aWFvLXByZXNzL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZ2l0XFxcXHhpYW94aWFvLXByZXNzXFxcXGxhb3hpYW8tcHJlc3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXGFpX3NpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2dpdC94aWFveGlhby1wcmVzcy9sYW94aWFvLXByZXNzL3NyYy8udnVlcHJlc3Mvc2lkZWJhci9haV9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLWhvcGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFpU2lkZWJhckNvbmZpZyA9IHtcclxuICAgICcvYWkvY29kZS8nOiBbXHJcbiAgICAgICAgJzEtUkVBRE1FJyxcclxuICAgIF0sXHJcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2dpdC94aWFveGlhby1wcmVzcy9sYW94aWFvLXByZXNzL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZ2l0XFxcXHhpYW94aWFvLXByZXNzXFxcXGxhb3hpYW8tcHJlc3NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXG1xX3NpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2dpdC94aWFveGlhby1wcmVzcy9sYW94aWFvLXByZXNzL3NyYy8udnVlcHJlc3Mvc2lkZWJhci9tcV9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLWhvcGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1xU2lkZWJhckNvbmZpZyA9IHtcclxuICAgICcvb3RoZXIvbXEvJzogW1xyXG4gICAgICAgICdhY3RpdmVNcS9hY3RpdmVNcScsXHJcbiAgICAgICAgJ2thZmthL2thZmthJyxcclxuICAgICAgICAnUmFiYml0TVEvUmFiYml0TVEnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ3JvY2tldG1xJyxcclxuICAgICAgICAgICAgcHJlZml4OiAncm9ja2V0bXEvJyxcclxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAncm9ja2V0bXEnLCAnMi1zb3VyY2UtY29kZScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1UsU0FBUyx3QkFBd0I7OztBQ0FuQyxTQUFTLGlCQUFpQjs7O0FDQXhCLFNBQVMsY0FBYztBQUV6VixJQUFPLGlCQUFRLE9BQU87QUFBQSxFQUNwQjtBQUFBO0FBQUEsRUFFQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBeUJBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FB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
