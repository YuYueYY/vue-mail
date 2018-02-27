/**
 * Created by yuyue on 18/2/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  //定义状态
  state:{
    content:"",
    detail_src:""
  },
  mutations:{
    newAuthor(state,msg){
      state.content = msg
      //添加缓存
      window.localStorage.setItem('newAuthor',msg)
    },
    bigImg(state,test){
      state.detail_src = test
      window.localStorage.setItem('bigImg',test)
    }
  }
})

export default store
