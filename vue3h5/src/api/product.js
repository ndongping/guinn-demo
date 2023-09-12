import request from '@/utils/request'

// 查询生成表数据
export function getProduct(query) {
  return request({
    url: '/goods/outward/product/getProduct',
    method: 'get',
    params: query
  })
}
