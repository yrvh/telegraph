// 登录, 注册, 获取用户信息  过程中的接口
import service from '../../utils/request'
import constant from '../../utils/constant'

const root = '/api123'   // 路由跟路径

// 登录获取token的接口
export function myLogin(data) {
  return service({
    url: root + constant.login,
    method: 'post',
    data: data,
  })
}
// 验证token是否过期的接口
export function myOverdue(data) {
  return service({
    url: root + constant.overdue,
    method: 'get',
    data: data,
  })
}