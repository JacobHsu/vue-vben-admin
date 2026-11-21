import type { RouteRecordRaw } from 'vue-router';

import { IFrameView } from '#/layouts';
import { $t } from '#/locales';

const RWA = 'https://jacobhsu.github.io/crypto-watch/rwa';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:gold',
      keepAlive: true,
      order: 350,
      title: $t('page.commodities.title'),
    },
    name: 'Commodities',
    path: '/commodities',
    children: [
      {
        name: 'CommoditiesXaut',
        path: 'xaut',
        component: IFrameView,
        meta: {
          icon: 'token-branded:xaut',
          iframeSrc: `${RWA}?s=XAUT`,
          title: 'XAUT',
        },
      },
      {
        name: 'CommoditiesXag',
        path: 'xag',
        component: IFrameView,
        meta: {
          icon: 'hugeicons:gold-ingots',
          iframeSrc: `${RWA}?s=XAG`,
          title: 'XAG',
        },
      },
      {
        name: 'CommoditiesUso',
        path: 'uso',
        component: IFrameView,
        meta: {
          icon: 'material-symbols:oil-barrel',
          iframeSrc: `${RWA}?s=USOX`,
          title: 'USO',
        },
      },
    ],
  },
];

export default routes;
