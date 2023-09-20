import request from '@/utils/request'

// 查询生成表数据
export function getProduct(params) {
  return request({
    url: '/goods/outward/product/getProduct',
    method: 'get',
    params,
  })
}

export function getPop(params) {
  return request({
    url: 'member/bar_pop',
    method: 'post',
    params,
    isRepeatSubmit: true
  })
}
