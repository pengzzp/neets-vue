<template>
    <div class="subscriber">
        <div class="null" v-if="!isSignin">
            <img src="../../assets/images/null.gif" alt="">
            <p>登录了才能查看</p>
            <a class="signin" @click="signin">登录</a>
        </div>
        <div class="recent" v-if="isSignin">
            <div class="recent_title">
                <div>最近观看</div>
                <div>
                    <span>全部</span>
                    <span>（5）</span>
                </div>
            </div>
            <div class="recent_content">
                <div v-for="item in recentLists" :key="item.id" class="card">
                    <div class="imgBox">
                        <img :src="item.photos.large" alt="">
                    </div>
                    <p>{{item.title}}</p>
                    <h5>共{{item.episodesCount}}集</h5>
                </div>
            </div>
            <p class="recentUpdateTitle">最近更新</p>
            <list v-if="isShowlist" :listdata="recentUpdateLists" ></list>
        </div>
        
    </div>
</template>

<script>
import List from '../common/list.vue'
import {mapState} from 'vuex'
    export default {
        data() {
            return {
                isSignin:false,
                isShowlist:true,
                recentUpdateLists:[
                    {
                        id:"3b498111c26c4ff2ab9ada04727dd294",
                        photos:'{"small":"http://img.neets.cc/video/3b498111c26c4ff2ab9ada04727dd294/small.jpg","large":"http://img.neets.cc/video/3b498111c26c4ff2ab9ada04727dd294/large.jpg","medium":"http://img.neets.cc/video/3b498111c26c4ff2ab9ada04727dd294/medium.jpg"}',
                        episodesCount:11,
                        title:'逃避虽可耻但有用',
                        state:1,
                        showButton:0
                    },
                    {
                        id:"EQZK1vYHJkrZ2nRaaPhixN",
                        photos:'{"small":"http://img.neets.cc/video/EQZK1vYHJkrZ2nRaaPhixN/small.png","large":"http://img.neets.cc/video/EQZK1vYHJkrZ2nRaaPhixN/large.jpg","medium":"http://img.neets.cc/video/EQZK1vYHJkrZ2nRaaPhixN/medium.png"}',
                        episodesCount:32,
                        title:'过来抱抱我',
                        state:1,
                        showButton:0
                    },
                    {
                        id:"7e8efa8ede784d349a3d4811e6cb1708",
                        photos:'{"small":"http://img.neets.cc/video/7e8efa8ede784d349a3d4811e6cb1708/small.jpg","large":"http://img.neets.cc/video/7e8efa8ede784d349a3d4811e6cb1708/large.jpg","medium":"http://img.neets.cc/video/7e8efa8ede784d349a3d4811e6cb1708/medium.jpg"}',
                        episodesCount:20,
                        title:'小谢尔顿 第一季',
                        state:1,
                        showButton:0
                    },
                    {
                        id:"5b063067cd4b4e8cb63baec11151f850",
                        photos:'{"small":"http://img.neets.cc/video/5b063067cd4b4e8cb63baec11151f850/small.jpg","large":"http://img.neets.cc/video/5b063067cd4b4e8cb63baec11151f850/large.jpg","medium":"http://img.neets.cc/video/5b063067cd4b4e8cb63baec11151f850/medium.jpg"}',
                        episodesCount:11,
                        title:'请回答1988',
                        state:1,
                        showButton:0
                    },
                ]
            }
        },
        components:{
            List,
        },
        computed:{
            ...mapState(['recentLists']),
        },
        methods: {
            signin() {
                this.$router.push({
                    name: 'signin',
                })
            }
        },
        created() {
            if(localStorage.getItem('neets_user')){
                this.isSignin=true;
            }
            else{
                this.isSignin=false;
            }
            this.recentUpdateLists.forEach(function(item){
                item.photos=JSON.parse(item.photos)
            });
              
        },
    }
</script>

<style lang="scss" scoped>
@import '@/yo/core/reset.scss';
.subscriber{
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
        .signin{
            text-align: center;
            border: 1px solid #ffa200;
            width: .58rem;
            margin: .3rem auto;
            border-radius: .58rem;
            line-height: 1;
            padding: .06rem 0;
            color: #ffa200;
            font-size: .14rem;
            display: inline-block;
        }
    }
    .recent{
        .recent_title{
            @include flexbox();
            width: 100%;
            height: .53rem;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;
            background-color: #fff;
            padding: 0 .12rem;
            div{
                &:nth-child(1){
                    line-height: .21rem;
                    font-size: .16rem;
                    color: #333;
                }
                &:nth-child(2){
                    line-height: .165rem;
                    padding: .185rem 0;
                    font-size: .12rem;
                    color: #999;
                    span{
                        line-height: .165rem;
                    }
                }
            }
        }
        .recent_content{
            @include flexbox();
            width: 100%;
            overflow-x: scroll;
            background-color: #fff;
            margin-bottom: .12rem;
            padding-bottom: .2rem;
            .card{
                box-sizing: content-box;
                width: 1.02rem;
                padding-left: .12rem;
                .imgBox{
                    position: relative;
                    width: 1.02rem;
                    height: 1.42rem;
                    overflow: hidden;
                    border-radius: 6px;
                    transform: translate(0);
                    img{
                        width: auto;
                        min-width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        border-radius: 6px;
                        transform: translate(-50%,-50%);
                    }
                }
                p{
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: .225rem;
                    margin-top: .09rem;
                    font-size: .16rem;
                    color: #212121;
                }
                h5{
                    line-height: .165rem;
                    margin-top: .03rem;
                    font-size: .12rem;
                    color: #ffa200;
                    font-weight: normal;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
        .recentUpdateTitle{
        @include flexbox();
        width: 100%;
        height: .53rem;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        background-color: #fff;
        padding: 0 .12rem;
    }
    }
    
}
    
</style>
