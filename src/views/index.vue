<template>
  <div class="index">
    <!-- 头部 -->
    <Top></Top>
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
    },
    mounted(){
      this.$store.dispatch('get_navlist')
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
