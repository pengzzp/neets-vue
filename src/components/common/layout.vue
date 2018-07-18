<template>
    <div class="layout">
        <!-- 导航 -->
        <nav>
            <router-link 
            v-for="(v,i) of navlist" 
            :key="i"
            :to="{path:v.path}"
            active-class="active">
            {{ v.name }}
            </router-link>
        </nav>
        <!-- 切换的页面 -->
        <div class="main">
        <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name:'layout',
        data() {
            return {
                navlist:[
                    {
                        name:'首页',
                        path:'/index/layout/home'
                    },
                    {
                        name:'订阅',
                        path:'/index/layout/subcriber'
                    },
                    {
                        name:'分类',
                        path:'/index/layout/category'
                    },
                    {
                        name:'我',
                        path:'/index/layout/my'
                    }
                ],
                isloading:true
            }
        },
    }
</script>

<style lang="scss" scoped>
@import '@/yo/core/reset.scss';
.layout{
    flex: 1;
    @include flexbox();
    flex-direction: column;
    nav{
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        position: relative;
        z-index: 1;
        background-color: #f4f5f6;
        box-shadow: 0 1px 5px #aaa;
        font-size: .16rem;
        @include flexbox();
        a{
            width: 25%;
            text-align: center;
            color:#888;
            &.active{
                color: #ffa200;
                font-weight: 700;
                border-bottom: .02rem solid #ffa200;
            }
        }
    }
    .main{
        flex: 1;
        overflow-y: auto;
    }
}
</style>