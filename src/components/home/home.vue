<template>
    <div class="indexContainer">
        <Contact/>
        <div class="navBox">
            <ul>
                <router-link to="/index/layout/category"  v-for="(v,i) in titles" :key="v.id" @click.native="tocategory(i)">
                    <li><div></div>{{ v.title }}</li>
                </router-link>
            </ul>
        </div>
        <div class="signin" v-if="!isSignin">
            <router-link to="/index/layout/my">
                <img src="../../assets/images/img_login.png" alt="">
            </router-link>
        </div>
        <div v-else class="mySubscirber">
            <p>我的订阅</p>
            <List v-if="isShowlist" :listdata="recentLists"  />
        </div>
        <div class="newDrama">
            <p>新剧开播</p>
            <List v-if="isShowlist" :listdata="newDrama" style="background:transparent"/>
            <div class="loadMore">
                <router-link to="/index/layout/category">查看全部››</router-link>
            </div>
        </div>
        <div class="endRecommendation">
            <p>完结推荐</p>
            <List v-if="isShowlist" :listdata="endRecommendation" style="background:transparent"/>
            <div class="loadMore">
                <router-link to="/index/layout/category">查看全部››</router-link>
            </div>
        </div>
        
        <Bottom/>
    </div>
</template>

<script>
import List from '../common/list.vue'
import Bottom from '../common/bottom.vue'
import Contact from '../common/contact.vue'
import $ from "axios";
import {mapState} from 'vuex'
    export default {
        data() {
            return {
                newDrama:[],
                endRecommendation:[],
                isShowlist:true,
                isSignin:false,
                isShowButton:false,
                titles:[
                    {
                        title:'美剧',
                        id:'01'
                    },
                    {
                        title:'韩剧',
                        id:'02'
                    },
                    {
                        title:'日剧',
                        id:'03'
                    },
                    {
                        title:'动漫',
                        id:'04'
                    },
                    {
                        title:'全部',
                        id:'05'
                    },
                ],
                navList:[
                    {
                        pageNo: 1,
                        state:'',
                        type:'tv',
                        country:'america',
                        week:'',
                        year:'',
                        order:'1'
                    },
                    {
                        pageNo: 1,
                        state:'',
                        type:'tv',
                        country:'korea',
                        week:'',
                        year:'',
                        order:'1'
                    },
                    {
                        pageNo: 1,
                        state:'',
                        type:'tv',
                        country:'japan',
                        week:'',
                        year:'',
                        order:'1'
                    },
                    {
                        pageNo: 1,
                        state:'',
                        type:'animation',
                        country:'',
                        week:'',
                        year:'',
                        order:'1'
                    },
                    {
                        pageNo: 1,
                        state:'',
                        type:'',
                        country:'',
                        week:'',
                        year:'',
                        order:'1'
                    },
                ]
            }
        },
        components: {
            List,
            Bottom,
            Contact,
        },
        computed: {
            ...mapState(['recentLists']),

        },
        methods: {
            handleClickSignin(){

            },
            tocategory(i){
                this.$store.commit('change',this.navList[i])
            }

        },
        created(){
            if(localStorage.getItem('neets_user')){
                this.isSignin=true;
            }
            else{
                this.isSignin=false;
            }
            // console.log(this.$store.state.recentLists)
        },
        mounted() {
            //注释以下这一段是因为浏览器抛出warning：
            //Error in created hook: "SyntaxError: Unexpected token o in JSON at position 1"
            //原因：获取到的数据已经是对象类型，我又将其转换为对象类型；
            //解决方法：把vuex里的数据写成对象～
            // this.$store.state.recentLists.forEach(function(item){
            //     item.photos=JSON.parse(item.photos)
            // });
            $.get('https://neets.cc/api/video/recommend/1/6').then(result => {
              result.data.data.list.forEach(function(item){
                    item.photos=JSON.parse(item.photos)
                });
              this.newDrama = result.data.data.list
              
            })
            $.get('https://neets.cc/api/video/searchByES/?pageNo=1&pageSize=6&state=1&country=').then(result => {
              result.data.data.list.forEach(function(item){
                    item.photos=JSON.parse(item.photos)
                });
              this.endRecommendation = result.data.data.list
            })
        },
    }
</script>

<style lang="scss" scoped>
@import '@/yo/core/reset.scss';
.indexContainer{
    @include flexbox();
    flex-direction: column;
    background: white;
    .navBox{
        width: 100%;
        margin-top: .15rem;
        background: white;
        ul{
            @include flexbox();
            flex-direction: row;
            justify-content: center;
            align-items: center;
            a{
                @include flex();
                cursor: pointer;
                color: #111;
                li{
                    text-align: center;
                    line-height: 1;
                    font-size: .12rem;
                    div{
                        background-image: url(../../assets/images/Artboard.png);
                        width: 45px;
                        height: 48px;
                        margin: 0 auto;
                        margin-bottom: .06rem;
                        background-size: 265px 68px;
                    }
                }
                &:nth-child(1){
                    div{
                        
                        background-position: -10px -10px;
                    }
                }
                &:nth-child(2){
                    div{
                        background-position: -60px -8px;
                    }
                }
                &:nth-child(3){
                    div{
                        background-position: -110px -8px;
                    }
                }
                &:nth-child(4){
                    div{
                        background-position: -160px -8px;
                    }
                }
                &:nth-child(5){
                    div{
                        background-position: -210px -8px;
                    }
                }
            }


        }
    }
    .signin{
        padding: .12rem;
        padding-bottom: 0;
        padding-top: .075rem;
        margin-top: .2rem;
        img{
            width: 100%;
        }
    }
    .mySubscirber{
        p{
            font-size: .16rem;
            color: #111;
            margin-left: .15rem;
            margin-top: .2rem;
            margin-bottom: .05rem;
            line-height: 1;
        }
    }
    .newDrama{
        p{
            font-size: .16rem;
            color: #111;
            margin-left: .15rem;
            margin-top: .2rem;
            margin-bottom: .05rem;
            line-height: 1;
        }
        .loadMore{
            text-align: center;
            margin-top: .15rem;
            font-size: .13rem;
            line-height: 1;
            color: #3f7cc1;
            a{
                text-decoration: none;
                cursor: pointer;
                padding: .1rem;
                color: #3f7cc1;
            }
        }
    }
    .endRecommendation{
        p{
            font-size: .16rem;
            color: #111;
            margin-left: .15rem;
            margin-top: .2rem;
            margin-bottom: .05rem;
            line-height: 1;
        }
        .loadMore{
            text-align: center;
            margin-top: .15rem;
            font-size: .13rem;
            line-height: 1;
            color: #3f7cc1;
            a{
                text-decoration: none;
                cursor: pointer;
                padding: .1rem;
                color: #3f7cc1;
            }
        }
    }
}
</style>
