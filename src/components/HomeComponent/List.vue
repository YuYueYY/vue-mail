<!-- list.vue -->
<template>
  <li class="sec_li" v-on:click="sendContent">
    <router-link to="/detail" class="lp_li_a">
      <div class="lp_li_imgWrap">
        <img v-bind:src="imgUrl" alt="">
      </div>
      <p class="lp_li_name">{{ title }}</p>
      <p class="lp_li_price">￥{{ price }}元</p>
    </router-link>
  </li>
</template>
<script>
  //import Detail from '../../pages/Detail'
  import store from '../../vuex/store'
  export default {
      props:['price','title','imgUrl','content','img_detail'],
      methods:{
        sendContent:function () {
          this.$store.commit('newAuthor',this.content)
          this.$store.commit('bigImg',this.img_detail)
        }
      },
    store
  }
</script>
<style scoped>
  .sec_li {
    float: left;
    width: 50%;
    margin-bottom: 0.1rem;
  }
  .lp_li_a {
    display: block;
    padding: 0.3rem 0;
    margin: 0 0.05rem;
    text-align: center;
    background: #fff;
  }
  .lp_li_imgWrap {
    padding: 0.24rem 0;
  }
  .lp_li_imgWrap > img {
    width: auto;
    height: 2.3rem;
  }
  .lp_li_name {
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 16px;
    color: #333;
    text-align: center;
  }
  .lp_li_price {
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 16px;
    color: #fb3b3b;
    text-align: center;
  }
</style>

