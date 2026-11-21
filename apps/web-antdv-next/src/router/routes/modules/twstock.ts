import type { RouteRecordRaw } from 'vue-router';

import { IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:chart-areaspline',
      keepAlive: true,
      order: 100,
      title: $t('page.twstock.title'),
    },
    name: 'TwStock',
    path: '/twstock',
    children: [
      {
        name: 'TwStockIndex',
        path: 'histock',
        component: IFrameView,
        meta: {
          icon: 'devicon:codepen',
          iframeSrc: 'https://cdpn.io/JacobHsu/fullpage/WbNYVay',
          title: 'Stock Index',
        },
      },
      {
        name: 'TwStockWorld',
        path: 'stock-world',
        component: IFrameView,
        meta: {
          icon: 'lucide:globe',
          iframeSrc: 'https://jacobhsu.github.io/stock-world-map',
          title: 'Stock World',
        },
      },
      {
        name: 'TwStockNstockHeatmap',
        path: 'nstock-heatmap',
        component: IFrameView,
        meta: {
          icon: 'tabler:chart-treemap',
          iframeSrc: 'https://www.nstock.tw/market_index/heatmap',
          title: 'Nstock Heatmap',
        },
      },
      {
        name: 'TwStockEwt',
        path: 'ewt',
        component: IFrameView,
        meta: {
          icon: 'mdi:chart-line',
          iframeSrc: 'https://jacobhsu.github.io/stock-watch/stock/?s=EWT',
          title: 'EWT',
        },
      },
      {
        name: 'TwStockHeatmap',
        path: 'heatmap',
        component: IFrameView,
        meta: {
          icon: 'tabler:chart-treemap',
          iframeSrc: 'https://jacobhsu.github.io/twstock-heatmap',
          title: 'Heatmap',
        },
      },
      {
        name: 'TwStockIndustry',
        path: 'industry',
        component: IFrameView,
        meta: {
          icon: 'devicon:minitab',
          iframeSrc: 'https://ai.finlab.tw/industry',
          title: 'Industry',
        },
      },
      {
        name: 'TwStockDayTrading',
        path: 'day-trading',
        component: IFrameView,
        meta: {
          icon: 'devicon:chrome',
          iframeSrc: 'https://histock.tw/stock/rank.aspx?m=4&d=0&t=dt',
          title: 'Day Trading',
        },
      },
      {
        name: 'TwStockRanking',
        path: 'ranking',
        component: IFrameView,
        meta: {
          icon: 'devicon:chrome',
          iframeSrc: 'https://www.cnyes.com/twstock/ranking2.aspx',
          title: 'Ranking',
        },
      },
      {
        name: 'TwStockExDividend',
        path: 'ex-dividend',
        component: IFrameView,
        meta: {
          icon: 'lucide:percent',
          iframeSrc: 'https://jacobhsu.github.io/goodinfo-xd-xr/',
          title: 'Ex-Dividend',
        },
      },
      {
        name: 'TwStockGoodinfo',
        path: 'goodinfo',
        component: IFrameView,
        meta: {
          icon: 'lucide:percent',
          iframeSrc: 'https://jacobhsu.github.io/goodinfo-dividend',
          title: 'Goodinfo',
        },
      },
      {
        name: 'TwStockReplay',
        path: 'stock-replay',
        component: IFrameView,
        meta: {
          icon: 'lucide:history',
          iframeSrc: 'https://stock-replay.vercel.app/',
          title: 'Stock Replay',
        },
      },
      {
        name: 'TwStockTwse',
        path: 'twse',
        component: IFrameView,
        meta: {
          icon: 'devicon:googlecloud',
          iframeSrc:
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vTN9WgNr0blAuxt4eHenoVe7ea5gSSapy0JnNWQ1ymkTczwbvGO0xKgO51ouw6_pdoAT-cHR8CD6MuQ/pubhtml?gid=0&single=true',
          title: 'TWSE',
        },
      },
    ],
  },
];

export default routes;
