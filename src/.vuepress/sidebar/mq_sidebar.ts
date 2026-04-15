import { sidebar } from 'vuepress-theme-hope';

export const mqSidebarConfig = {
    '/other/mq/': [
        'activeMq/activeMq',
        'kafka/kafka',
        'RabbitMQ/RabbitMQ',
        {
            text: 'rocketmq',
            prefix: 'rocketmq/',
            collapsible: true,
            children: [
                'rocketmq', '2-source-code',
            ],
        }
    ],
}