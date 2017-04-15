import * as types from './mutation-types'

const localEvent = function (item) {
  this.get = function () {
    return JSON.parse(localStorage.getItem(item));
  }
  this.set = function (obj) {
    localStorage.setItem(item, JSON.stringify(obj));
  }
  this.clear = function () {
    localStorage.removeItem(item);
  }
}
/* eslint new-cap:0 */
const local = new localEvent('mhq_blog');

export const state = local.get() || {
  info: [
    /* {
      account: 'root',
      password: 'root',
      image: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256'
    } */
  ],  // 用户信息
  list: [],  // 博客数据
  currentAccount: ''  // 当前用户
}

export const mutation = {
  [types.ADD_BLOG] (state, obj) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    // const avatar = obj.avatar || 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';
    // const name = obj.name || '随便给你一个名字';
    state.list.unshift(
      Object.assign({}, obj)
    )
    local.set(state);
  },
  // 删除博客
  [types.DELETE_BLOG] (state, index) {
    state.list.splice(index, 1);
    local.set(state);
  },
  [types.REMOVE_ALL] (state) {
    state.list = [];
    state.info = [];
    state.currentAccount = '';
    local.clear();
  },
  [types.REGISTER] (state, person) {
    let account = person.account;
    let password = person.password;
    let image = person.image;
    state.info.push(Object.assign({}, {account: account, password: password, image: image}));
    local.set(state);
  },
  [types.LOGIN] (state, account) {
    state.currentAccount = account;
    local.set(state);
  },
  [types.LOGINOUT] (state) {
    state.currentAccount = '';
    local.set(state);
  }
}
