import Taro from "@tarojs/taro";

export type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export type ResponseType = keyof Taro.request.ResponseType;

export type RequestConfig = Overwrite<
  Taro.request.Option,
  { key: string; baseURL?: string; isShowToast?: boolean; url?: string }
>;

export interface ResponseConfig<T = any> {
  readonly status: boolean;
  readonly message: string;
  data: T;
  origin?: T;
  statusCode?: number;
}
