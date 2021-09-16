import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */
export const state = {
  loading: false,
  UserList: [111, 222, 333], //用户列表
  themeObj: {
    autograph: 'Write the Code. Change the World.',//控制首页头像下方问题
    center_smailimg: '',//控制首页右侧图片
    user_start: 1,//控制首页右侧图片文字
  },//主题
  aboutmeObj: '',//关于我的信息
  host: "http://" + window.location.host + "/port/",//接口路径
  keywords: '',//关键词
  errorImg: 'this.onerror=null;this.src="' + require('../../static/img/tou.jpg') + '"'
}

export default new Vuex.Store({
  state,
})
