<template>
    <div>
        <!-- 导航 -->
        <nav>
            <ul v-for="(v,i) of navlist" :key="i">
                <li 
                    v-for="(value,index) of v.lists" 
                    :key="index"
                    :data-param="v.param" 
                    :data-value="value.value"
                    :class="{active:isactive(v.param,value.value)}"
                    >
                    {{value.name}}
                    <!-- :class="{active:value.value==nav_now.(v.param)}" -->
                </li>
            </ul>
        </nav>
        <!-- 列表 -->


    </div>
</template>

<script>
import $ from 'axios'
    export default {
        name:'category',
        data() {
            return {
                navlist:[],
                nav_now:{
                    state:'',
                    type:'',
                    country:'',
                    week:'',
                    year:'',
                    order:'1'
                }
            }
        },
        mounted(){
            $.get('/api/video/allCategories')
            .then((result)=>{
                this.navlist=JSON.parse(result.data.data)
                // console.log(JSON.parse(result.data.data))
            })
        },
        methods:{
                isactive(param,value){
                    //根据当前状态，改变导航上的css状态的方法（这里的逻辑我想了大概一个小时~）
                    return this.nav_now[param]==value;
                }
        },
        computed:{
            
        }
    }
</script>

<style lang="scss" scoped>
@import '@/yo/core/reset.scss';
nav{
    width: 100%;
    background: white;
    ul{
        width:100%;
        height:.44rem;
        border-bottom: 1px solid #eee;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        padding-left: .15rem;
        overflow-x: auto;
        li{
            border: 1px solid #eee;
            border-radius: .5rem;
            text-align: center;
            color: #111;
            margin: .08rem .1rem .08rem 0;
            padding: .06rem .13rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            line-height: 1;
            font-size: .14rem;
            display: inline-block;
            &.active{
                border: 1px solid #aaa;
                background: #aaa;
                color: #fff;
            }
        }
    }
}

</style>