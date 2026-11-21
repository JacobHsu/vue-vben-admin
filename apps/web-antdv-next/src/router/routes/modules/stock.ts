import type { RouteRecordRaw } from 'vue-router';

import { IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:chart-line',
      keepAlive: true,
      order: 200,
      title: $t('page.stock.title'),
    },
    name: 'Stock',
    path: '/stock',
    children: [
      {
        name: 'StockOpenStock',
        path: 'open-stock',
        component: IFrameView,
        meta: {
          icon: 'uis:chart',
          iframeSrc: 'https://next-open-stock.vercel.app/',
          title: 'OpenStock',
        },
      },
      {
        name: 'StockWatchlist',
        path: 'watchlist',
        component: IFrameView,
        meta: {
          icon: 'uis:align-right',
          iframeSrc:
            'https://docs.google.com/spreadsheets/d/19rG_hVniPCcqaIU8RQA5lACPUDDNxn2qbdjUjAuRFak/edit?usp=sharing',
          title: 'Watchlist',
        },
      },
      {
        name: 'StockBot',
        path: 'stockbot',
        component: IFrameView,
        meta: {
          icon: 'hugeicons:chat-01',
          iframeSrc: 'https://stockbot-groq-chat.vercel.app/',
          title: 'Stockbot',
        },
      },
      {
        name: 'StockDailyAnalysis',
        path: 'daily-analysis',
        component: IFrameView,
        meta: {
          icon: 'basil:chart-pie-solid',
          iframeSrc: 'https://jacobhsu.github.io/daily-stock-analysis',
          title: 'Stock Analysis',
        },
      },
      {
        name: 'StockEarnings',
        path: 'earnings',
        component: IFrameView,
        meta: {
          icon: 'mdi:currency-usd',
          iframeSrc: 'https://nextjs-earnings.vercel.app/earnings',
          title: 'Earnings',
        },
      },
      {
        name: 'StockRockflow',
        path: 'rockflow',
        component: IFrameView,
        meta: {
          icon: 'uil:chart-line',
          iframeSrc: 'https://rockalpha.rockflow.ai/',
          title: 'Rockflow',
        },
      },
    ],
  },
];

export default routes;
