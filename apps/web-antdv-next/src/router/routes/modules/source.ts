import type { RouteRecordRaw } from 'vue-router';

import { IFrameView } from '#/layouts';
import { $t } from '#/locales';

const GITHUB = 'https://github.com/JacobHsu';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:github',
      order: 900,
      title: $t('page.source.title'),
    },
    name: 'Source',
    path: '/source',
    children: [
      {
        name: 'SourceOpenStock',
        path: 'open-stock',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: `${GITHUB}/next-open-stock`,
          title: 'OpenStock',
        },
      },
      {
        name: 'SourceCryptoWatch',
        path: 'crypto-watch',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: `${GITHUB}/crypto-watch`,
          title: 'CryptoWatch',
        },
      },
      {
        name: 'SourceStockReplay',
        path: 'stock-replay',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: `${GITHUB}/stock-replay`,
          title: 'StockReplay',
        },
      },
      {
        name: 'SourceStockWorldMap',
        path: 'stock-world-map',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: `${GITHUB}/stock-world-map`,
          title: 'Stock World Map',
        },
      },
      {
        name: 'SourceGoodinfoDividend',
        path: 'goodinfo-dividend',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: `${GITHUB}/goodinfo-dividend`,
          title: 'Goodinfo Dividend',
        },
      },
      {
        name: 'SourceGoodinfoXdXr',
        path: 'goodinfo-xd-xr',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: `${GITHUB}/goodinfo-xd-xr`,
          title: 'Goodinfo XD XR',
        },
      },
      {
        name: 'SourceTwstockHeatmap',
        path: 'twstock-heatmap',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: `${GITHUB}/twstock-heatmap`,
          title: 'Twstock Heatmap',
        },
      },
    ],
  },
];

export default routes;
