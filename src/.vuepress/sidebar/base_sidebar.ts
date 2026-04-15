import {javaSidebarConfig} from "./java_sidebar.js";
import {databaseSidebarConfig} from "./database_sidebar.js";
import { sidebar } from 'vuepress-theme-hope';
import {aiSidebarConfig} from "./ai_sidebar.js";



export const baseSidebarConfig = sidebar({
  ...javaSidebarConfig,
  ...databaseSidebarConfig,
  ...aiSidebarConfig,
});