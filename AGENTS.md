# AGENTS.md - laoxiao-press 项目指南

## 项目类型
VuePress 2.0 文档站点，使用 vuepress-theme-hope 主题

## 关键开发命令
- `pnpm docs:dev` - 启动开发服务器
- `pnpm docs:build` - 构建生产版本
- `pnpm docs:clean-dev` - 启动开发服务器并清理缓存
- `pnpm docs:update-package` - 更新 VuePress 相关包

## 技术栈
- **包管理器**: pnpm (必须使用 pnpm，不是 npm 或 yarn)
- **构建工具**: Vite
- **主题**: vuepress-theme-hope 2.0.0-rc.106
- **Vue**: ^3.5.31
- **TypeScript**: 配置文件在 tsconfig.json，仅处理 .vuepress 目录下的文件

## 项目结构
- 配置文件: `src/.vuepress/`
- 主要配置: `config.ts`, `theme.ts`, `navbar.ts`, `sidebar.ts`
- 内容目录: `src/` (包含 demo/, guide/ 等目录)

## 重要配置细节
- 使用中文 (`lang: "zh-CN"`)
- 已启用多个 markdown 扩展: 代码标签、组件、demo、图表、任务列表等
- 配置了加密页面 (`/demo/encrypt.html` 密码: 1234)
- 使用 Giscus 评论系统
- 图标前缀: `fa6-solid:`

## 开发注意事项
- 缓存目录: `src/.vuepress/.cache/` 和 `src/.vuepress/.temp/`
- 构建输出: `src/.vuepress/dist/`
- TypeScript 仅配置用于 `.vuepress` 目录下的文件
- 项目使用 rc 版本，可能存在不稳定性