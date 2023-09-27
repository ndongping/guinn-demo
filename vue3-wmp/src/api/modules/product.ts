import Api from '../request';
import { ProductDetailOptions } from '../types/product.d'

class Product extends Api {

  getPruductDetail(data: ProductDetailOptions) {
    return this.fetch({
      key: 'productDetail',
      data,
      method: 'POST',
    })
  }
}

export default new Product();
