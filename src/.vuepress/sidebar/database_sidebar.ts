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
        {
            text: 'Elasticsearch',
            prefix: 'es/',
            collapsible: true,
            children: [
                '1-base',
                '2-describe',
                '3-curd',
                '4-mapping',
                '5-java-api',
                '6-aggs',
                '7-problem',
            ],
        },
    ],
}