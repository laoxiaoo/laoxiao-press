import { sidebar } from 'vuepress-theme-hope';

export const otherSidebarConfig = {
    '/other/': [
        'git', 
        'nginx',
        'network',
       {
        text: 'tool',
        prefix: 'tool/',
        collapsible: true,
        children: [
            'vscode',
            'idea',
            'clashverge',
        ],
       }
    ],
}