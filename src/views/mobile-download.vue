<template>
  <div class="container">
    <div class="card">
      <mt-swipe :auto="0">
      <mt-swipe-item v-for="item of showList" :key="item.id" >
        <div
        class="card_bg"
        :style="{
          'background-image': item.bgUrl,
          'background-size': 'cover',
          opacity: 0.1
          }"
          >
        </div>
        <div class="title">
          <img src="https://neets.cc/mobile-download/index_files/logo_text.png" alt="">
          你的私人追剧管家
        </div>
        <div class="card_info">
          <figure>
            <img :src="item.imgUrl" alt="">
          </figure>
          <figcaption>
            <p>{{item.quotes.line1}}</p>
            <p>{{item.quotes.line2}}</p>
          </figcaption>
          <h1>{{item.figCaption.line1}}</h1>
          <h1>{{item.figCaption.line2}}</h1>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    </div>
  </div>
</template>

<script>
import $ from 'axios'
import {Swipe, SwipeItem} from 'mint-ui'
export default {
  data() {
    return {
      showList: {
        card1: {
          id:"1",
          imgUrl: "https://neets.cc/mobile-download/index_files/pic_1.png",
          bgUrl:'url("https://neets.cc/mobile-download/index_files/bg_1.png?max_age=2592000")',
          quotes: {
            line1: "“缘分这件事，彼此不负就够了",
            line2: "但人呐，想不负此生真的很难”"
          },
          figCaption: {
            line1: "全新neets",
            line2: "资源丰富，搜一搜？"
          }
        },
        card2: {
           id:"2",
          imgUrl: "https://neets.cc/mobile-download/index_files/pic_2.png",
          bgUrl:'url("https://neets.cc/mobile-download/index_files/bg_2.png?max_age=2592000")',
          quotes: {
            line1: "“Sir please, I don't wanna go…I ",
            line2: "don't wanna go...I'm sorry…”"
          },
          figCaption: {
            line1: "收藏订阅新建",
            line2: "清单一“处”即达"
          }
        },
        card3: {
           id:"3",
          imgUrl: "https://neets.cc/mobile-download/index_files/pic_3.png",
          bgUrl:'url("https://neets.cc/mobile-download/index_files/bg_3.png?max_age=2592000")',
          quotes: {
            line1: "“你知道世界上最冷的地方是哪吗？",
            line2: "是没有你的地方。”"
          },
          figCaption: {
            line1: "世界很大",
            line2: "我们用“足迹”帮你记录"
          }
        },
        card4: {
           id:"4",
          imgUrl: "https://neets.cc/mobile-download/index_files/pic_4.png",
          bgUrl:'url("https://neets.cc/mobile-download/index_files/bg_4.png?max_age=2592000")',
          quotes: {
            line1: "“我信佛，吃素。”",
            line2: "“羊也吃素。”"
          },
          figCaption: {
            line1: "now",
            line2: "精彩观剧体验的开始"
          }
        }
      },
      test:'你好'
    };
  },
  components:{
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  methods:{
    $
  }
};
</script>

<style lang="scss" scoped>
.container{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .card{
    width: 80%;
    height: 542px;
    border-radius: 10px;
    position: absolute;
    // left: 0;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // margin: 0 auto;
    top: 4%;
    left: 10%;
    background: pink;
    overflow: hidden;


  }
}
</style>
