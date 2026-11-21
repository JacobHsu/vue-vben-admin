import type { RouteRecordRaw } from 'vue-router';

import { IFrameView } from '#/layouts';
import { $t } from '#/locales';

const COINGLASS_ICON = 'https://cdn.coinglasscdn.com/static/icon_200.png';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lineicons:btc',
      keepAlive: true,
      order: 300,
      title: $t('page.crypto.title'),
    },
    name: 'Crypto',
    path: '/crypto',
    children: [
      {
        name: 'CryptoBtc',
        path: 'btc',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:btc',
          iframeSrc: 'https://jacobhsu.github.io/crypto-watch/btc',
          title: 'BTC',
        },
      },
      {
        name: 'CryptoEth',
        path: 'eth',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:eth',
          iframeSrc: 'https://jacobhsu.github.io/crypto-watch/eth',
          title: 'ETH',
        },
      },
      {
        name: 'CryptoWatchEma',
        path: 'ema',
        component: IFrameView,
        meta: {
          icon: 'la:chart-line',
          iframeSrc: 'https://jacobhsu.github.io/crypto-watch/ema',
          title: 'Crypto Watch EMA',
        },
      },
      {
        name: 'CryptoTvSignal',
        path: 'tv-signal',
        component: IFrameView,
        meta: {
          icon: 'material-symbols:cardiology-rounded',
          iframeSrc: 'https://crypto-tv-signal.lovable.app/',
          title: 'Tv Signal',
        },
      },
      {
        name: 'CryptoOpenStock',
        path: 'open-stock',
        component: IFrameView,
        meta: {
          icon: 'uis:chart',
          iframeSrc: 'https://next-open-stock.vercel.app/crypto',
          title: 'OpenStock Crypto',
        },
      },
      {
        name: 'CryptoTvWidgets',
        path: 'tv-widgets',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:chain',
          iframeSrc: 'https://jacobhsu.github.io/tradingview-widgets',
          title: 'Widgets',
        },
      },
      {
        name: 'CryptoPolymarket',
        path: 'polymarket',
        component: IFrameView,
        meta: {
          icon: 'solar:chart-2-bold-duotone',
          iframeSrc: 'https://v0-crypto-currency-calendar.vercel.app/',
          title: 'Polymarket',
        },
      },
      {
        name: 'CryptoRainbow',
        path: 'rainbow',
        component: IFrameView,
        meta: {
          icon: 'emojione:rainbow',
          iframeSrc: 'https://charts.bitbo.io/rainbow/',
          title: 'Rainbow Chart',
        },
      },
      {
        name: 'CryptoWeeklyCalendar',
        path: 'weekly-calendar',
        component: IFrameView,
        meta: {
          icon: 'ic:baseline-calendar-month',
          iframeSrc: 'https://crypto-weekly-calendar.lovable.app/',
          title: 'Weekly Calendar',
        },
      },
      {
        name: 'CryptoDailyChart',
        path: 'daily-chart',
        component: IFrameView,
        meta: {
          icon: 'mdi:finance',
          iframeSrc: 'https://crypto-daily-log.lovable.app/',
          title: 'Daily Chart',
        },
      },
      {
        name: 'CryptoMaxpain',
        path: 'maxpain',
        component: IFrameView,
        meta: {
          icon: COINGLASS_ICON,
          link: 'https://www.coinglass.com/zh-TW/liquidation-maxpain',
          title: 'Maxpain',
        },
      },
      {
        name: 'CryptoMergeV2',
        path: 'merge-v2',
        component: IFrameView,
        meta: {
          icon: COINGLASS_ICON,
          link: 'https://www.coinglass.com/zh-TW/mergev2/BTC-USDT',
          title: 'Mergev2',
        },
      },
      {
        name: 'CryptoCoinglass',
        path: 'coinglass',
        component: IFrameView,
        meta: {
          icon: COINGLASS_ICON,
          link: 'https://www.coinglass.com/tv/zh-TW/Binance_ETHUSDT',
          title: 'Coinglass',
        },
      },
    ],
  },
];

export default routes;
