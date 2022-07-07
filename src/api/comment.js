import request from '@/utils/request'
/**
 *
 * @param {type 评论类型}
 * @param {source 源id}
 * @param {offset 评论偏移量}
 * @param {limit 评论个数}
 * @returns
 */
export const getCommentList = ({ type, source, offset, limit }) => {
  return request({
    url: 'comments',
    params: { type, source, offset, limit }
  })
}
/**
 *
 * @param {点赞的评论id} target
 * @returns
 */
export const addLike = (target) => {
  return request({
    url: 'comment/likings',
    method: 'POST',
    data: { target }
  })
}
/**
 *
 * @param {点赞的评论id} target
 * @returns
 */
export const delLike = (target) => {
  return request({
    url: `comment/likings/${target}`,
    method: 'DELETE'
  })
}
/**
 * target 文章id或评论id
 *content内容
 art_id 文章id
 * @param {*} data
 * @returns
 */
export const addComment = (data) => {
  return request({
    url: 'comments',
    method: 'POST',
    data
  })
}
