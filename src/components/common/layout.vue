<template>
    <div>
        <!-- 导航 -->
        <nav></nav>
        
        <!-- 切换的页面 -->
        <div>
        <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name:'layout'
    }
</script>

<style scoped>

</style>