import { createMemoryHistory, createRouter } from 'vue-router';

import { describe, expect, it } from 'vitest';

import { resolveHomePath } from './home-path';

const Empty = { render: () => null };

function setupRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        children: [{ component: Empty, path: 'workspace' }],
        component: Empty,
        path: '/dashboard',
      },
      { component: Empty, path: '/twstock/histock' },
      {
        component: Empty,
        name: 'FallbackNotFound',
        path: '/:path(.*)*',
      },
    ],
  });
}

const FALLBACK = '/twstock/histock';

describe('resolveHomePath', () => {
  it('keeps a homePath that matches a registered route', () => {
    expect(
      resolveHomePath(setupRouter(), '/dashboard/workspace', FALLBACK),
    ).toBe('/dashboard/workspace');
  });

  it('falls back when homePath only matches the not-found route', () => {
    expect(resolveHomePath(setupRouter(), '/workspace', FALLBACK)).toBe(
      FALLBACK,
    );
  });

  it('falls back when homePath is empty or missing', () => {
    expect(resolveHomePath(setupRouter(), '', FALLBACK)).toBe(FALLBACK);
    expect(resolveHomePath(setupRouter(), undefined, FALLBACK)).toBe(FALLBACK);
  });
});
