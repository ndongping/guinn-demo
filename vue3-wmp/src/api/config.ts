/**
 * API 相关配置文件
 * API URL Dict api 字典
 */

const urlDict: Record<string, string> = {
  productDetail: 'goods/outward/product/getProduct'
};

const getkey = (key: string): string => {
  try {
    const bizKeys = Object.keys(urlDict);
    if (bizKeys.indexOf(key) < 0) {
      throw new Error('biz not in Dict');
    }
    let hostname = urlDict[key];
    if (!hostname) {
      throw new Error('url not in Dict');
    }
    if (hostname?.startsWith('/')) {
      hostname = hostname.substring(1);
    }
    return hostname;
  } catch (err) {
    console.error(err);
    return '';
  }
};

export default getkey;
