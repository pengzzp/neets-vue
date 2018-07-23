<template>
    <div class="contact">
        <div class="wechat"><img src="../../assets/images/wechat.png" alt="wechat">公众号</div>
        <div class="weibo"><img src="../../assets/images/weibo.png" alt="weibo">官方微博</div>
        <div class="download"><router-link to="/mobile-download">下载App<img src="../../assets/images/next.png" alt="next"></router-link></div>
        <div class="cat"><img src="../../assets/images/cat.png" alt=""></div>
    </div>
</template>

<script>
    export default {
        name:'contact'
    }
</script>

<style lang="scss" scoped>
@import '@/yo/core/reset.scss';
    .contact{
        position: fixed;
        bottom: .15rem;
        left: 0;
        right: 0;
        @include flexbox();
        align-items: center;
        z-index: 9999;
        width: 85.3%;
        margin: 0 auto;
        padding: 0 .1rem 0 .15rem;
        background: #363a48;
        font-size: .15rem;
        color: #fff;
        box-shadow: 0 2px 6px rgba(0,0,0,.4);
        height: .44rem;
        border-radius: .03rem;
       .wechat{
            @include flexbox();
            align-items: center;
            img{
                width: .145rem;
                margin-right: .05rem;
            }
        }
        .weibo{
            margin-left: .13rem;
            @include flexbox();
            align-items: center;
            img{
                width: .23rem;
            }
        }
        .download{
            @include flexbox();
            @include flex();
            justify-content: flex-end;
            a{
                color: white;
                img{
                    width: .08rem;
                    margin-left: .05rem;
                }
            }
        }
        .cat{
            position: absolute;
            right: .22rem;
            top: -.32rem;
            img{
                width: .5rem;
                height: .32rem;;
            }
        }
    }
</style>
