import request from '@/utils/request'

/**
 * 获取jssdk配置相关参数
 * @param url 需要签名的页面url
 * @returns
 */
export function getJsSDKConfigApi(url) {
  return request(`/api/wechat/jssdk`, {
    url,
  });
}

/**
 * 获取微信授权跳转地址
 * @param callbackUrl 回调的页面url
 * @returns
 */
export function getAuthUrlApi(callbackUrl) {
  return request({
    url: "/api/wechat/auth",
    params: {
      redirect_url: callbackUrl,
    },
  });
}

/**
 * 授权登录并获取token
 * @param code 微信授权登录回调参数
 * @returns 
 */
export function wechatAuthApi(code) {
  return request({
    method: "POST",
    url: "/api/wechat/auth",
    params: {
      code,
    },
  });
}
