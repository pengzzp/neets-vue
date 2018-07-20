<template>
    <div class="my">
        <div class="null">
            <img src="../../assets/images/null.gif" alt="">
            <p>登录了才能查看</p>
            <a class="signin" @click="signin">登录</a>
        </div>
    </div>
</template>

<script>
    export default {
        name:'my',
        methods:{
            signin(){
                this.$router.push({
                    name: 'signin',
                    // query: {
                    // uri: this.movietype
                    // }
                })
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
}


</style>