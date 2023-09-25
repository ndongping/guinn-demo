// eslint-disable-next-line filename/match
import wx from "weixin-js-sdk";


export function useWxSDK() {
  /**
   * 初始化设置
   */
  function initConfig(configInfo) {
    return new Promise((resolve) => {
      wx.config({
        debug: false,
        appId: configInfo.appId,
        timestamp: configInfo.timestamp,
        nonceStr: configInfo.nonceStr,
        signature: configInfo.signature,
        jsApiList: configInfo.jsApiList ?? [
          "chooseImage",
          "uploadImage",
          "previewImage",
          "onMenuShareTimeline",
          "onMenuShareAppMessage",
          "chooseWXPay",
        ],
        openTagList: [],
      });
      wx.ready(() => {
        resolve(true);
      });
    });
  }

  /** 设置微信分享 */
  function setShareInfo(
    shareInfo,
    onSuccess,
    onCancel
  ) {
    wx.onMenuShareTimeline({
      title: shareInfo.title, // 分享标题
      link: shareInfo.link, // 分享链接，可以不是当前页面，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: shareInfo.imgUrl,
      success: function () {
        // 用户确认分享后执行的回调函数
        onSuccess();
      },
      cancel: function () {
        onCancel();
        // 用户取消分享后执行的回调函数
      },
    });
    wx.onMenuShareAppMessage({
      title: shareInfo.title, // 分享标题
      desc: shareInfo.desc,
      link: shareInfo.link, // 分享链接，可以不是当前页面，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: shareInfo.imgUrl,
      type: "link", // 分享类型,music、video或link，不填默认为link
      success: function () {
        // 用户确认分享后执行的回调函数
        onSuccess();
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
        onCancel();
      },
    });
  }

  /** 是否是ios微信 */
  function isiOSWechat() {
    return window.__wxjs_is_wkwebview;
  }

  return {
    initConfig,
    setShareInfo,
    isiOSWechat,
  };
}
