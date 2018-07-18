<template>
    <div class="category">
        <!-- 导航 -->
        <nav>
            <ul v-for="(v,i) of navlist" :key="i">
                <li 
                    v-for="(value,index) of v.lists" 
                    :key="index"
                    :data-param="v.param" 
                    :data-value="value.value"
                    :class="{active:isactive(v.param,value.value)}"
                    @click="choice(v.param,value.value)"
                    >
                    {{value.name}}
                    <!-- :class="{active:value.value==nav_now.(v.param)}" -->
                </li>
            </ul> 
        </nav>
        <!-- 列表 -->
        <List v-if="isShowlist" :listdata="listdata"></List>
        <div v-else  class="null">
            <img src="../../assets/images/null.gif" alt="">
            <p>什么都没找到哦</p>
        </div>
    </div>
</template>

<script>
import $ from 'axios';
import List from '../common/list.vue';
import {mapState} from 'vuex'

    export default {
        name:'category',
        data() {
            return {
                // navlist:[],
                nav_now:{
                    state:'',
                    type:'',
                    country:'',
                    week:'',
                    year:'',
                    order:'1'
                },
                listdata:[]
            }
        },
        components:{
            List
        },
        mounted(){
            // $.get('/api/video/allCategories')
            // .then((result)=>{
            //     this.navlist=JSON.parse(result.data.data)
            // })
            //我把列表数据放入了vuex中,在index.vue中获取
            
        },
        updated(){
            // console.log(this.isShowlist)
        },
        methods:{
            isactive(param,value){
                //根据当前状态，改变导航上的css状态的方法（这里的逻辑我想了大概一个小时~）
                return this.nav_now[param]==value;
            },
            choice(style,value){
                this.nav_now[style]=value;
                $.get('/api/video/searchByES',{
                    params:{
                        pageNo: 1,
                        pageSize: 10,
                        ...this.nav_now
                    }
                })
                .then(function(result){
                    // console.log(result)
                    if(result.data.message=="获取记录成功"){
                        result.data.data.list.forEach(function(item){
                           item.photos=JSON.parse(item.photos)
                        });
                        this.listdata=result.data.data.list
                    }else{
                        this.listdata=[]
                    }
                    // console.log(this.listdata)
                }.bind(this))
            }
        },
        computed:{
            ...mapState(['navlist']),
            isShowlist(){
                // if(this.listdata!==[]){
                //     return false
                // }else{
                //     return true
                // }
                return this.listdata.length!=0
            }
        }
    }
</script>

<style lang="scss" >
@import '@/yo/core/reset.scss';
.category{
    height: 100%;
    nav{
    width: 100%;
    background: white;
    margin-bottom: .1rem;
        ul{
            width:100%;
            height:.44rem;
            border-bottom: 1px solid #eee;
            overflow-x: auto;
            overflow-y: hidden;
            white-space: nowrap;
            padding-left: .15rem;
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
    .null{
        height:2rem;
        width: 100%;
        margin-top: .7rem;
        text-align: center;
        img{
            width: .75rem;
            height: .96rem;
        }
        p{
            color: #a7a8a8;
            margin-top: .2rem;
            font-size: .14rem;
        }
    }

}


</style>