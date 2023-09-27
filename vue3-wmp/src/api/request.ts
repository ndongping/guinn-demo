import Taro, { request, showToast } from "@tarojs/taro";
import { RequestConfig, ResponseConfig, ResponseType } from "./types/index.d";
import getkey from "./config";

const ERR_MESSAGE = '网络异常，请重试';

class Api {
  protected baseUrl: string = process.env.BASE_URL;
  protected timeout: number = 10000;
  protected dataType = "json";
  protected responseType: ResponseType = "text";

  fetch({
    baseURL = this.baseUrl,
    key,
    data,
    url,
    method = "GET",
    header,
    timeout = this.timeout,
    dataType = this.dataType,
    responseType = this.responseType,
    isShowToast = true,
  }: RequestConfig): Promise<ResponseConfig> {
    const newHeader = {
      token: "",
      ContentType: "application/json",
      ...header,
    };
    // url解析
    let newUrl = baseURL + "/" + getkey(key);
    if (url) newUrl = url + "/" + getkey(key);
    return new Promise((resolve, reject) => {
      // 发送请求
      request({
        header: newHeader,
        method,
        url: newUrl,
        data,
        timeout,
        dataType,
        responseType,
      })
        .then((res: Taro.request.SuccessCallbackResult<any>) => {
          console.log("success", {
            url: newUrl,
            data,
            res,
          });
          // 200:服务端业务处理正常结束
          if (res.statusCode === 200) {
            if (res.data.code === 1) {
              resolve(res.data);
            } else {
              reject(res);
              if (isShowToast) {
                showToast({
                  title: res.data?.errorMessage || ERR_MESSAGE,
                  icon: "none",
                });
              }
            }
          } else {
            reject(res);
            if (isShowToast) {
              showToast({
                title: res.data?.errorMessage || ERR_MESSAGE,
                icon: "none",
              });
            }
          }
        })
        .catch((err) => {
          console.log("err", {
            url: newUrl,
            data,
            method,
            header: newHeader,
            err,
          });
          let message;
          switch (err.statusCode) {
            case 401:
              message = ERR_MESSAGE;

              break;
            default:
              message =
                err?.data?.errorMessage ||
                err?.message ||
                ERR_MESSAGE;
              break;
          }
          if (isShowToast) showToast({ title: message, icon: "none" });
          reject(err);
        });
    });
  }
}

export default Api;
