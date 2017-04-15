import * as types from './mutation-types'
// es2015解构
export default {
  removeAll ({ commit }) {
    commit(types.REMOVE_ALL)
  },
  register ({ commit }, person) {
    commit(types.REGISTER, person)
  },
  login ({ commit }, account) {
    commit(types.LOGIN, account)
  },
  loginOut ({ commit }) {
    commit(types.LOGINOUT)
  },
  addBlog ({ commit }, blog) {
    commit(types.ADD_BLOG, blog)
  },
  deleteBlog ({ commit }, index) {
    commit(types.DELETE_BLOG, index)
  }
};
