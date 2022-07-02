import request from '@/utils/request'
export const getSuggestList = q => {
  return request({
    url: 'suggestion',
    params: {
      q
    }
  })
}
/**
 *
 * @param {*} page 当前第几页 per_page每页数量 q关键字
 * @returns
 */
// eslint-disable-next-line camelcase
export const getSearchResult = ({ page = 1, per_page, q }) => {
  return request({
    url: 'search',
    params: {
      page,
      per_page,
      q
    }
  })
}
