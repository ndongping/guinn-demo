import { getAuthUrlApi, wechatAuthApi } from "@/api/wechat";

/*
 * 跳转到微信授权
 */
export function jump2Auth(callbackUrl) {
  getAuthUrlApi(callbackUrl).then((authUrl) => {
    if (import.meta.env.DEV) {
      window.location.href = callbackUrl + "?code=test";
    } else {
      window.location.href = authUrl;
    }
  }).catch(err => {
    // 测试
    window.location.href = callbackUrl + "?code=test";
  });
}

/**
 * 获取用户信息
 * @param code
 * @returns
 */
export async function getUserInfo(code) {
  const userInfo = await wechatAuthApi(code)
  return userInfo;
}
