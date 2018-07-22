<template>
  <div class="container">
    <main>
      <div class="slide" >
        
        <mt-swipe :auto="0" :stopPropagation="true" :continuous="false" @change="handleChange">
        <mt-swipe-item v-for="item of showList" :key="item.id" >
          <!-- <div
          class="card_bg"
          :style="{
            'background-image': item.bgUrl,
            }"
            > 
             </div> -->
            <div class="card">
              <div class="card_box">
                <div class="card_title">
                  <img src="https://neets.cc/mobile-download/index_files/logo_text.png" alt="">
                  <span>你的私人追剧管家</span>
                </div>
                <figure>
                  <img :src="item.imgUrl" alt="">
                </figure>
                <figcaption>
                  <p>{{item.quotes.line1}}</p>
                  <p>{{item.quotes.line2}}</p>
                </figcaption>
              </div>
              <div class="card_ad">
                <h1>{{item.figCaption.line1}}</h1>
                <h1>{{item.figCaption.line2}}</h1>
              </div>
            </div>
          </mt-swipe-item>
        </mt-swipe>
        <div
          class="card_bg"
          :style="{
            'background-image': bg_img[index],
          }"
        >
        </div>
      </div>
    <!-- <div class="pagination">
    </div> -->
    <button><img src="https://neets.cc/mobile-download/index_files/logo.png">立即下载neets</button>
    </main>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  data() {
    return {
      showList: {
        card1: {
          id: "1",
          imgUrl: "https://neets.cc/mobile-download/index_files/pic_1.png",
          bgUrl:
            'url("https://neets.cc/mobile-download/index_files/bg_1.png?max_age=2592000")',
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
          id: "2",
          imgUrl: "https://neets.cc/mobile-download/index_files/pic_2.png",
          bgUrl:
            'url("https://neets.cc/mobile-download/index_files/bg_2.png?max_age=2592000")',
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
          id: "3",
          imgUrl: "https://neets.cc/mobile-download/index_files/pic_3.png",
          bgUrl:
            'url("https://neets.cc/mobile-download/index_files/bg_3.png?max_age=2592000")',
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
          id: "4",
          imgUrl: "https://neets.cc/mobile-download/index_files/pic_4.png",
          bgUrl:
            'url("https://neets.cc/mobile-download/index_files/bg_4.png?max_age=2592000")',
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
      index:0,
      bg_img:{
        0:'url("https://neets.cc/mobile-download/index_files/bg_1.png?max_age=2592000")',
        1:'url("https://neets.cc/mobile-download/index_files/bg_2.png?max_age=2592000")',
        2:'url("https://neets.cc/mobile-download/index_files/bg_3.png?max_age=2592000")',
        3:'url("https://neets.cc/mobile-download/index_files/bg_4.png?max_age=2592000")',
      }
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  methods: {
    handleChange(index){
      this.index = index
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  main {
    height: 100%;
    position: relative;
    .slide {
      height: 100%;
      z-index: 2;
      // position: absolute;
      .card_bg {
        position: absolute;
        top: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        > img {
          width: 3.73rem;
          height: 6.67rem;
          background-size: cover;
        }
      }
      .mint-swipe {
        z-index: 1;
        height: 6.67rem !important;
        position: relative;
        .mint-swipe-items-wrap {
          height: 6.67rem !important;
          position: absolute;
          width: 100%;
          .mint-swipe-item {
            height: 6.67rem !important;
            position: absolute;
            .card_bg {
              width: 100%;
              height: 100%;
              > img {
                width: 3.73rem;
                height: 6.67rem;
                background-size: cover;
              }
            }
            .card {
              position: absolute;
              width: 80%;
              height: 75%;
              background: white;
              border-radius: 10px;
              left: 10%;
              top: 6%;
              // overflow: hidden;
              display: flex;
              flex-direction: column;
              .card_box {
                height: auto;
                .card_title {
                  height: 40px;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 56px;
                    height: 18px;
                    margin-right: 10px;
                    vertical-align: middle;
                  }
                  span {
                    line-height: 18px;
                    font-size: 14px;
                    color: rgb(51, 51, 51);
                    vertical-align: middle;
                  }
                }
                figure {
                  height: 200px;
                  width: 100%;
                  margin-bottom: 10px;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                figcaption {
                  height: 30px;
                  font-size: 10px;
                  color: rgb(102, 102, 102);
                  margin: 0 10px;
                  text-align: right;
                  white-space: nowrap;
                }
              }
              .card_ad {
                flex: 1;
                text-align: center;
                font-weight: 600;
                font-size: 20px;
                color: rgb(51, 51, 51);
                margin-top: 25%;
                margin-bottom: 25%;
              }
            }
          }
        }
        .mint-swipe-indicators{
          bottom: 12% !important;
        }
      }
    }
    // .pagination{
    //   position: absolute;
    //   height: 0.05rem;
    //   margin: 0.25rem 0;
    //   background: white;
    //   bottom: 10%;
    //   width: 100%;
    // }
    > button {
      position: absolute;
      bottom: 5%;
      left: 16.67%;
      width: 66.7%;
      height: 40px;
      background: rgb(255, 222, 2);
      color: rgb(51, 51, 51);
      line-height: 0.4rem;
      text-align: center;
      font-size: 16px;
      border-radius: 20px;
      border-color: transparent;
      img {
        width: 20px;
        height: 17px;
        display: inline-block;
        margin-right: 6px;
        vertical-align: middle;
      }
    }
  }
}
</style>
