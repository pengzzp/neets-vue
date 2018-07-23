<template>
    <ul class="list">
        <li v-for="(v,i) of listdata" :key="i" class="item" @click="todetail(v.id)">
            <img :src="v.photos.large" alt="">
            <div class="info">
                <div><i>{{v.title}}</i><span v-show="v.rating">{{v.rating}}</span></div>
                <div>订阅<span>{{v.hot}}</span></div>
                <div><span>{{v.currentSeries>0?"更新至"+v.currentSeries:"0集全"}}</span></div>
            </div>
            <a href="" >
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
            },
        },
        data() {
            return {
                
            }
        },
        created(){
            // console.log(this.$store.state.defaultlist);
            // console.log(this.props.isShowButton)
        },
        updated(){  
        },
        computed: {
            
            // buttonBackground() {
            //     if(this.props.showButton == "no"){
            //         return 'white'
            //     }else{
            //         return '#59c4f9'
            //     }
                    
            // }
        },
        methods:{
            todetail(id){
                this.$router.push({
                    name:'detail',
                    params:{
                        id
                    }
                })
            }
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
            border-radius:5px;
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
            >div:last-child{
                span{
                    margin-left: 0;
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