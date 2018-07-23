<template>
  <div class="index">
    <!-- 头部 -->
    <Top></Top>
    <!-- 主界面 -->
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import Top from '../components/common/top.vue'
  export default {
    name:'index',
    components:{
      Top
    },
    mounted(){
      this.$store.dispatch('get_navlist')
      // this.$store.dispatch('get_defaultlist')
    }
  }
</script>

<style lang="scss" scoped>
.index{
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>
