<template>
    <div class="detaiContainer">
        <nav>
            <div>
                <span>下载app，解锁更多内容</span><img src="../../assets/images/more.png" alt="">
            </div>
        </nav>
        <main>
            <!-- <div
                class="bgImg"
                :style="{
                    'backfground-image':'url(imgUrl.large)',
                    'filter':'25px',
                    }"
            ></div> -->
            <p class="title">{{detail.title}}</p>
            <div class="small_img">
                <img :src="imgUrl.large" alt="">
            </div>
            <div class="info">
                <p>评分：{{detail.rating}}</p>
               <p> 订阅：{{detail.hot}}</p>
               <p> 更新至：{{detail.currentSeries}}集/共{{detail.episodesCount}}集</p>
               <p :isfinished="isfinished">{{isfinished}}</p>
            </div>
            <article class="summart">
                简介
                <!-- {{detail.summary}} -->
            </article>
        </main>
    </div>
</template>

<script>
import $ from 'axios'
export default {
  name: "detail",
  data() {
    return {
        detail:{},
        imgUrl:'',
    }
  },
  computed:{
      isfinished(){
          if(this.detail.state == 1){
               return '已完结'
          }else{
              return this.detail.refreshDesc + '更新'
          }
           
        
      }
  },
  methods:{

  },
  mounted(){
    $.get('api/video/detail/e69378d2aa6e403eb0ae8eba79258ee2')
        .then((result)=>{
            this.detail = result.data.data
            this.imgUrl = JSON.parse(result.data.data.photos)
            console.log(typeof this.imgUrl.large)
        })
  }

};
</script>

<style lang="scss" scoped>
.detaiContainer {
  nav {
    background: white;
    div {
      height: 0.315rem;
      padding-left: 0.16rem;
      padding-right: 0.16rem;
      background: rgba(255, 173, 46, 0.1);
      font-size: 0.16rem;
      span {
        line-height: 0.315rem;
        color: #ffad2e;
        font-size: 0.12rem;
      }
      img {
        float: right;
        width: 0.095rem;
        height: 0.14rem;
        margin-top: 0.0875rem;
      }
    }
  }
  main{
    //   position: relative;
    float: left;
      .bgImg{
        //   position: absolute;
          width: 100%;
          height: 223.5px;
          opacity: .8;
          z-index: 0;
      }
      .title{
        //   position: absolute;
        //   top: 0;
          z-index: 1;
          color: white;
          width: 100%;
          font-size: .2rem;
          line-height: .27rem;
          padding: .115rem .15rem .1rem;
      }
      .small_img{
          float: left;
          z-index: 100;
          width: 1.25rem;
          height: 1.65rem;
          overflow: hidden;
          border: .03rem solid white;
          border-radius: .05rem;
          background: #f4f5f6;
          box-shadow: 0 2px 4px #777;
          margin-left: .15rem;
          img{
              width: auto;
              min-width: 100%;
              height: 100%;
          }
      }
      .info{
        //   position: absolute;
        //   right: 0;
        float: right;
        padding-left: .2rem;
        padding-bottom: .15rem;
        padding-top: .1rem;
        font-size: .16rem;
        color: white;
      }
  }
}
</style>
