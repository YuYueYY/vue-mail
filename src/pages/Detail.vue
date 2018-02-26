<!-- Detail.vue -->
<template>
  <div class="detail">
    <detail-header></detail-header>
    <img src="../assets/img/monsterHunter.jpg" alt="">
    <p>{{$store.state.author}}</p>
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
  export default {
    props:['price','title','imgUrl','content'],
    components: {
      DetailHeader
    }
  }
</script>
