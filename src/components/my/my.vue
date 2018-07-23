<template>
    <div class="my">
        <div class="null" v-if="!isSignin">
            <img src="../../assets/images/null.gif" alt="">
            <p>登录了才能查看</p>
            <a class="signin" @click="signin">登录</a>
        </div>
        <div v-else class="userinfo">
            <div class="top">
                <img src="../../assets/images/headimg.jpg" alt="">
                <p>{{username}}</p>
            </div>
            <div class="qingdan">
                <h2>清单</h2>
                <div>
                    <i style="background-position: -90px -597px;"></i>
                    <span>订阅</span>
                    <p><span></span>条内容</p>
                </div>
                <div>
                    <i style="background-position: -120px -597px;"></i>
                    <span>已看完</span>
                    <p><span></span>条内容</p>
                </div>
                <div>
                    <i style="background-position: -150px -597px;"></i>
                    <span>我的清单</span>
                    <p><span></span>条内容</p>
                </div>
            </div>
            <div class="zuji">
                <h2>足迹</h2>
                <div>
                    <i style="background-position: -90px -631px;"></i>
                    <span>足迹</span>
                    <p><span></span>条内容</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'my',
        data() {
            return {
                isSignin:false
            }
        },
        created(){
            if(localStorage.getItem('neets_user')){
                this.isSignin=true;
            }
            else{
                this.isSignin=false;
            }
        },
        mounted(){
            // if(localStorage.getItem('neets_user')){
            //     this.isSignin=true
            // }else{
            //     this.isSignin=false
            // }
        },
        methods:{
            signin(){
                this.$router.push({
                    name: 'signin',
                    // query: {
                    // uri: this.movietype
                    // }
                })
            }
        },
        computed:{
            username(){
                return localStorage.getItem('username')
            }
        }
    }
</script>

<style lang="scss" scoped>
.my{
    height: 100%;
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
    .userinfo{
        .top{
            width: 100%;
            height: 1.47rem;
            background: #ffde02;
            line-height: .147rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width: .7rem;
                height: .7rem;
                border-radius: 100%;
            }
            p{
                color: #6e4902;
                text-align: center;
                padding-top: .1rem;
                font-size: .18rem;
            }
        }
        .qingdan,.zuji{
            h2{
                color: #555;
                font-size: .16rem;
                height: .4rem;
                line-height:.4rem;
                padding-left: .1rem;
                font-weight: normal;
            }
            >div{
                height: .6rem;
                width: 100%;
                background:white;
                border-bottom: 1px solid #eee;
                display: flex;
                align-items: center;
                position: relative;
                padding: 0 .1rem;
                i{
                    width: .25rem;
                    height: .25rem;
                    vertical-align: middle;
                    background: url('../../assets/images/bg.png');
                    background-size: 180px auto;
                    display: inline-block;
                    margin-right: .1rem;
                }
                >span{
                    color: #555;
                    font-size: .16rem;
                }
                p{
                    position: absolute;
                    right: .1rem;
                    color: #888;
                    font-size: .12rem;
                }
            }
        }
    }
}


</style>