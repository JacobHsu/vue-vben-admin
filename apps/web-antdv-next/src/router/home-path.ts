import type { Router } from 'vue-router';

const NOT_FOUND_ROUTE_NAME = 'FallbackNotFound';

/**
 * 取得登入後要前往的首頁。
 * 後端回傳的 homePath 若對不到已註冊的路由（只命中 404 兜底路由），
 * 就退回 fallback，避免登入後直接看到「未找到页面」。
 */
export function resolveHomePath(
  router: Router,
  homePath: string | undefined,
  fallback: string,
): string {
  if (!homePath) {
    return fallback;
  }
  const { matched } = router.resolve(homePath);
  const isNotFound =
    matched.length === 0 ||
    matched.some((record) => record.name === NOT_FOUND_ROUTE_NAME);
  return isNotFound ? fallback : homePath;
}
