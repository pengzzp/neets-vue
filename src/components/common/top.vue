<template>
    <header>
        <div class="left"  @click="pop()">
            <div class="sidebar"></div>
            <div class="headimg">
                <img src="../../assets/images/headimg.jpg" alt="" srcset="">
            </div>
            <div class="logo"></div>
        </div>
        <!-- 侧边导航 -->
        <mt-popup v-model="popupVisible" position="left" class="Popup">
            <section class="top">
                <div><img src="../../assets/images/headimg.jpg" alt=""></div>
                <div v-show="!isSignin" class="login">立即登录</div>
                <p v-show="!isSignin">登录解锁更多精彩功能</p>
                <div v-show="isSignin">zzp</div>
            </section>

            <div>
                <router-link to="/index/layout/home" @click.native="pop()">
                    <i style="background-position: -2px -281px;"></i>
                    <span>首页</span>
                </router-link>
                <router-link to="/index/layout/category" @click.native="pop()">
                    <i style="background-position: -31px -281px;"></i>
                    <span>分类检索</span>
                </router-link>
            </div>
            <div>
                <router-link to="/index/layout/subcriber" @click.native="pop()">
                    <i style="background-position: -62px -282px;"></i>
                    <span>我的订阅</span>
                    <mt-badge type="error" size="small" class="number">1</mt-badge>
                </router-link>
                <a>
                    <i style="background-position: -91px -282px;"></i>
                    <span>已看完</span>
                    <mt-badge type="error" size="small" class="number">1</mt-badge>
                </a>
                <a>
                    <i style="background-position:-92px -629px;"></i>
                    <span>足迹</span>
                    <mt-badge type="error" size="small" class="number">1</mt-badge>
                </a>
            </div>
            <div>
                <a>
                    <i style="background-position: -151px -281px;"></i>
                    <span>退出登录</span>
                </a>
            </div>
        </mt-popup>

        <div class="right">
            <div class="game">
                <img src="../../assets/images/game.png" alt="">
            </div>
            <div class="history">
                <img src="../../assets/images/history.png" alt="">
            </div>
            <div>
                <img src="../../assets/images/search.png" alt="">
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                popupVisible:false,
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
        updated() {
            
        },
        methods:{
            pop(){
                this.popupVisible=!this.popupVisible; 
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/yo/core/reset.scss';
    header{
        @include flexbox();
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: .4rem;
        background: #ffde02;
        width: 100%;
        z-index: 100;
        .left{
            @include flexbox();
            flex-direction: row;
            align-items: center;
            .sidebar{
                width:.12rem;
                height:.16rem; 
                background: url("../../assets/images/bg.png");
                background-position: -40px -635px;
                background-size: 180px auto;
            }
            .headimg{
                width: .28rem;
                height: .28rem;
                overflow: hidden;
                border-radius: 50%;
                border: 1px solid #fff;
                margin-left: .05rem;
                margin-right: .06rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .logo{
                width: .83rem;
                height: .24rem;
                background: url("../../assets/images/bg.png");
                background-position: -5px -668px;
                background-size: 180px auto;
            }
        }
        .right{
            @include flexbox();
            flex-direction:row;
            div{
                width: .35rem;
                height: .22rem;
                text-align: center;
                img{
                    height: 100%;
                }
            }
        }
    }
    .Popup{
        height: 100%;
        width: 2.8rem;
        font-size: .16rem;
        .top{
            line-height: 1;
            width: 100%;
            height: 1.45rem;
            background: #ffdc4f;    
            padding: .3rem .2rem .2rem;
            @include flexbox();
            align-items: center;
            justify-content: space-between;
            position: relative;
            div:first-child{
                width: .66rem;
                height: .66rem;
                border-radius: 50%;
                border: 2px solid #fff;
                overflow: hidden;
                img{
                    width: 100%;height: 100%;
                }
            }
            div:last-child{
                width: 1.2rem;
                padding-left: .15rem;
                color: #6e4902;
                @include ellipsis();
            }
            .login{
                color: #6e4902;
                border: 1px solid #6e4902;
                padding: .08rem .15rem;
                border-radius: 2px;
                font-size: .16rem;
                line-height: 1;
                text-align: center;
            }
            p{
                position: absolute;
                font-size: .13rem;
                margin-top: .1rem;
                color: #6e4902;
                bottom: 10px;
            }
        }
        >div{
            width: 100%;
            padding: .1rem 0;
            border-bottom: .5px solid #ddd;
            @include flexbox();
            flex-direction: column;
            a{
                padding: .1rem .15rem .1rem .2rem;
                color: #4a4a4a;
                display: block;
                width: 100%;
                font-weight: 400;
                i{
                    width: .25rem;
                    height: .25rem;
                    vertical-align: middle;
                    background: url('../../assets/images/bg.png');
                    background-size: 180px auto;
                    display: inline-block;
                    margin-right: .1rem;
                }
                .number{
                    float: right;
                    border-radius: 50%;
                }
            }
        }
    }

</style>