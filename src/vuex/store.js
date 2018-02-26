/**
 * Created by yuyue on 18/2/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  //定义状态
  state:{
    author:"yuyueyy"
  },
  mutations:{
    newAuthor(state,msg){
      state.author = msg
    }
  }
})

export default store
