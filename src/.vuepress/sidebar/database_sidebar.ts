import { sidebar } from 'vuepress-theme-hope';

export const databaseSidebarConfig = {
    '/database': [
        {
            text: 'MySQL',
            prefix: 'mysql/',
            collapsible: true,
            children: [
                '1-base',
                '2-innodb',
                '3-file',
                '4-index',
                '5-transaction',
                '6-application',
                '7-distributed_transaction',
            ],
        },
    ],
}