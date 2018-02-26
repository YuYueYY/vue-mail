<!-- Home.vue -->
<template>
  <div class="container">
    <!-- .vue 不区分大小写，大写字母改成-连接 -->
    <home-header></home-header>

    <div class="content">
      <ul class="cont_ul">
        <list
        v-for="item in items"
        :price="item.price"
        :title="item.title"
        :imgUrl="item.imgUrl"
        :content="item.content"
        >
        </list>
      </ul>
    </div>
  </div>
</template>

<style>

</style>

<script>
  //导入用到的子组件
  import HomeHeader from '../components/HomeComponent/HomeHeader'
  import List from '../components/HomeComponent/List'
  import Detail from './Detail'
  export default{
      data(){
          return{
              items:[
//                { price:"129.00",title:"怪物猎人世界",imgUrl:"../assets/img/monsterHunter.jpg"},
//                { price:"256.00",title:"怪物猎人世界",imgUrl:"../assets/logo.png" },
//                { price:"399.00",title:"怪物猎人世界" },
//                { price:"998.00",title:"怪物猎人世界" },
//                { price:"99.00",title:"怪物猎人世界" },
//                { price:"89.00",title:"怪物猎人世界" },
//                { price:"188.00",title:"怪物猎人世界" },
//                { price:"999.98",title:"怪物猎人世界" },
              ]
          }
      },
    //在components 字段中，包含导入的子组件
    components:{
          HomeHeader,
          List,
          Detail
    },
    created(){
      this.$http.get('../static/db.json').then((data)=>{
        this.items = data.body.items
      })
    },

  }
</script>
