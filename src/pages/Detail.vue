<!-- Detail.vue -->
<template>
  <div class="detail">
    <detail-header></detail-header>
    <img src="../assets/img/monsterHunter.jpg" alt="">
    <p>《怪物猎人：世界》是由CAPCOM制作发行的一款动作冒险游戏，在全球范围内都享有盛赞，本代怪物猎人发生了诸多进化，玩法与画面都有非常巨大的进步，游戏最多支持4人联机。在游戏中玩家将扮演一位猎人，需要探索一片新发现的神秘土地，关于这片土地人们知之甚少，所以将这片大陆称为“新世界”。猎人们必须利用他们的聪明才智和个人能力才能在激烈、变化多端的战斗中存活下来，并且最终成为终极猎人。</p>
    <p></p>
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
  import DetailHeader from '../components/DetailHeader'

  export default {
    components: {
      DetailHeader
    }
  }
</script>
