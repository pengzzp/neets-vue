<template>
  <div>
    <!-- 头部 -->
    <top></top>
    <!-- 主界面 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Top from '../components/common/top.vue'
  export default {
    name:'index',
    components:{
      Top
    }
  }
</script>

<style scoped>

</style>
