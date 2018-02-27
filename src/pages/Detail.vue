<!-- Detail.vue -->
<template>
  <div class="detail">
    <detail-header></detail-header>
    <img v-bind:src="detail_src" alt="">
    <p>{{content}}</p>
  </div>
</template>
<style>
  .detail {
    padding: 0.24rem;
    font-size: 12px;
  }
  img {
    display: block;
    width: 80%;
    margin: 0 auto 0.2rem;
  }
  p {
    font-size: 14px;
    line-height: 0.5rem;
    text-align: justify;
    padding-bottom: 0.24rem;
  }
</style>
<script>
  import DetailHeader from '../components/DetailComponent/DetailHeader'
  import store from '../vuex/store'
  import {mapState} from 'vuex'
  export default {
    //props:['price','title','imgUrl','content'],
    components: {
      DetailHeader
    },
    computed:mapState({
      content:function (state) {//箭头函数会有剪箭头的指向问题
          let localData = window.localStorage.getItem('newAuthor')

          if(state.content == 0 && localData){
              this.$store.commit('newAuthor',localData) //同步操作
        }
        return state.content
      },
      detail_src:function (state) {//箭头函数会有剪箭头的指向问题
        let localData = window.localStorage.getItem('bigImg')

        if(state.detail_src == 0 && localData){
          this.$store.commit('bigImg',localData) //同步操作
        }
        return state.detail_src
      }
    })
  }
</script>
