import router from "@/router";

import { toRaw } from "vue";

/**
 * 重定向
 * @param path 路径
 */
export function redirectTo(path) {
  const { replace } = router;
  replace({
    path,
    // query: {
    //   redirect: currentRoute.value.path,
    // },
  });
}

/**
 * 获取页面路由参数
 */
export function getRouteParams() {
  const { currentRoute } = router;
  const { params } = currentRoute.value;
  return params;
}

/**
 * 获取路由上query参数
 */
export function getRouteQuery() {
  const {
    currentRoute: { query },
  } = router;
  return query;
}

/**
 * 添加路由参数
 */
export function addRouteQuery(query) {
  const { push } = router;
  push({
    query: toRaw(query),
  });
}
