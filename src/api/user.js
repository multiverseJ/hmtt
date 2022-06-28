import request from '@/utils/request'
import store from '@/store'
/**
 *
 * @param {number} mobile
 * @returns promise
 */
export const getSmsCode = (mobile) => {
  return request({
    url: `/sms/codes/${mobile}`
  })
}
/**
 *
 * @param {mobile,code} param0
 * @returns
 */
export const login = ({ mobile, code }) => {
  return request({
    url: '/authorizations',
    method: 'POST',
    data: {
      mobile,
      code
    }
  })
}

export const getUserInfo = () => {
  return request({
    url: 'user',
    headers: {
      Authorization: 'Bearer ' + store.state.user.token
    }
  })
}
