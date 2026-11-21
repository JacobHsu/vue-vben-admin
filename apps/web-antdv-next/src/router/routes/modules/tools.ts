import type { RouteRecordRaw } from 'vue-router';

import { IFrameView } from '#/layouts';
import { $t } from '#/locales';

const GITHUB = 'https://github.com/JacobHsu';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ion:layers-outline',
      order: 910,
      title: $t('page.tools.title'),
    },
    name: 'Tools',
    path: '/tools',
    children: [
      {
        name: 'ToolsAutoma',
        path: 'automa',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: `${GITHUB}/Automa`,
          title: 'Automa',
        },
      },
      {
        name: 'ToolsChromeExtensions',
        path: 'chrome-extensions',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: `${GITHUB}/twstock_chrome_extensions`,
          title: 'Chrome Extensions',
        },
      },
      {
        name: 'ToolsPuppeteer',
        path: 'puppeteer',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: `${GITHUB}/server-puppeteer`,
          title: 'Puppeteer',
        },
      },
      {
        name: 'ToolsN8n',
        path: 'n8n',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: `${GITHUB}/n8n`,
          title: 'n8n',
        },
      },
    ],
  },
];

export default routes;
