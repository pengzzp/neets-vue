<template>
    <ul class="list">
        <li v-for="(v,i) of listdata" :key="i" class="item">
            <img :src="v.photos.large" alt="">
            <div class="info">
                <div><i>{{v.title}}</i><span v-show="v.rating">{{v.rating}}</span></div>
                <div>订阅<span>{{v.hot}}</span></div>
                <div>更新至<span>{{v.currentSeries}}</span></div>
            </div>
            <a href="">
                <i>+</i>
                <span>订阅</span>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name:'List',
        props: {
            listdata:{
                type: Array
            }
        },
        created(){
            
        },
        mounted(){
            
        },
        updated(){
            // console.log(this.listdata)
           
               
        }
        
    }
</script>

<style lang="scss" scoped>
@import '@/yo/core/reset.scss';
.list{
    width: 100%;
    background: white;
    .item{
        width: 100%;
        height: 1.05rem;
        @include flexbox();
        padding: 5px 10px;
        justify-content: space-between;
        align-items: center;
        img{
            width: .68rem;
            height: .9rem;
        }
        .info{
            width: 1.96rem;
            height: .53rem;
            font-size: .12rem;
            color: #888;
            >div{
                span{
                    margin-left: 5px;
                }
            }
            >div:first-child{
                font-size: .16rem;
                color: black;
                line-height: .19rem;
                span{
                    color: #ffac2d;
                    font-style: normal;
                    font-size: .16rem;
                }
            }
        }
        a{
            color: #fff;
            background-color: #59c4f9;
            width: .62rem;
            border-radius: 2px;
            line-height: .25rem;
            text-align: center;
            border: 1px solid #59c4f9;
            font-size: .12rem;
            @include flexbox();
            justify-content: center;
            align-items: center;
            i{
                font-size: .16rem;
            }
        }

    }
}

</style>