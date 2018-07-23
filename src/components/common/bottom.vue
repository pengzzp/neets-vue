<template>
    <div class="neetsInfo">
        <div class="infoTitle">关注 Neets 公众号，新剧更新抢鲜看</div>
        <div class="infoImg">
            <img src="https://neets.cc/script/app/resource/images/erweima.jpg" alt="">
        </div>
        <div class="wechat">
            <span>公众号 neets</span><span>微信号 neetscc</span>
        </div>
        <div class="browser">浏览器访问 www.neets.cc</div>
    </div>
</template>

<script>
    export default {
        name:"bottom",
        data() {
            return {
                
            }
        },
    }
</script>
<style lang="scss" scoped>
.neetsInfo{
    width: 3rem;
    margin: .3rem auto;
    color: #888;
    text-align: center;
    .infoTitle{
        font-size: .14rem;
        line-height: .2rem;
        margin: 0 auto .125rem;
    }
    .infoImg{
        width: 100%;
        box-shadow: 0 1px 4px #b0b0b0;
        border-radius: .02rem;
        margin-bottom: .12rem;
        overflow: hidden;
        img{
        width: 100%;
        }
    }
    .wechat{
        font-size: .12rem;
        span{
        display: inline-block;
        width: .9rem;
        line-height: .15rem;
        font-size: .12rem;
        &:nth-of-type(2){
            margin-left: .2rem;
        }
        }
    }
    .browser{
        margin-top: .06rem;
        font-size: .12rem;
        line-height: .15rem;
    }
}
</style>
