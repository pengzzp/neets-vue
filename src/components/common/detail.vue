<template>
    <div class="detailContainer">
      <!-- 下载app -->
      <nav>
        <div>
          <span>下载app，解锁更多内容</span><router-link to="/mobile-download"><img src="../../assets/images/more.png" alt=""></router-link>
        </div>
      </nav>
      <!-- 正文 -->
      <main>
        <div class="content">
          <!-- 背景模糊图 -->
          <div class="bgImg">
            <img :src="imgUrl.large" alt="">
          </div>
          <p class="title">{{detail.title}}</p>
          <!-- 中间区块 -->
          <div class="middle">
            <div class="small_img">
              <!-- <img :src="imgUrl.large" alt="" v-show="imgCondition"> -->
              <img :src="defaultImg" alt="">
            </div>
            <div class="info">
              <p>评分：{{detail.rating}}</p>
              <p> 订阅：{{detail.hot}}</p>
              <p> 更新至：{{detail.currentSeries}}集/共{{detail.episodesCount}}集</p>
              <p :isfinished="isfinished">{{isfinished}}</p>
              <div class="btns">
                <mt-button type="primary">+ 订阅</mt-button>
                <mt-button type="primary">...</mt-button>
              </div>
            </div>
          </div>
          <!-- 简介 -->
          <article>
            <p class="summary_title">简介</p>
            <div class="summary">
              {{detail.summary}}
            </div>
            <div class="nomore">
              没有更多了
            </div>
          </article>
          <!-- 合集 -->
          <div class="collection">
            <p>合集</p>
            <div class="collection_hide">
              <div class="collection_show">
                <ul v-for="collection of collections" :key="collection.id">
                  <div>
                    <li>
                      <p>
                        <span>{{collection.domainName}}</span>&nbsp;&nbsp;<span>{{collection.videoName}}</span><i>{{collection.tags}}</i>
                      </p>
                    </li>
                  </div>
                </ul>
                <p @click="loadMoreCollections" v-if="isCollectionsShow">显示更多</p>
              </div>
            </div>
          </div>
          <!-- 分集 -->
          <div class="series">
            <p>分集</p>
            <div class="series_hide">
              <div class="series_show">
                <ul v-for="num of series" :key="num.id">
                  <div>
                    <li>
                      <div>
                        <span>{{num.name}}</span>
                      </div>
                    </li>
                    <div>
                        <input type="checkbox" :id="num.id">
                        <label :for="num.id"></label>
                        </div>
                    </div>
                </ul>
                <p @click="loadMoreSeries" v-if="isSeriesShow">显示更多</p>
              </div>
            </div>
          </div>
          <!-- 全网搜索 -->
          <div class="search">
            <h4>Neets全网搜索</h4>
            <div class="searchList">
              <div class="searchItem" v-for="(search,index) of searchList.list" :key="index">
                <div class="lineOne">
                  <span>{{search.name}}</span>
                  <i>{{search.label}}</i>
                </div>
                <div class="lists" v-for="searchItem of search.themes" :key="searchItem.themeId">
                  <a href="javascript:void(0)">
                    <div>{{searchItem.themeName}}&nbsp;{{searchItem.auxiliaryInfo}}</div>
                    <div><b>{{searchItem.seriesCount}}</b></div>
                  </a>
                </div>
                <div class="searchMore">
                  <span>{{search.name}}</span>更多搜索结果››
                </div>
              </div>
              <div class="loadMoreSearch">
                <a href="javascript:void(0)">
                  查看全部{{searchList.total}}条结果››
                </a>
              </div>
            </div>
          </div>
          <!-- 新剧推荐 -->
          <div class="newDrama">
            <h4>新剧推荐</h4>
            <List v-if="isShowlist" :listdata="listdata" style="background:transparent"/>
            <p><router-link to="/index/layout/category">查看全部››</router-link></p>
          </div>
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
        </div>
      </main>
    </div>
</template>

<script>
import $ from "axios";
import { Button } from "mint-ui";
import List from '../common/list.vue';
export default {
  name: "detail",
  data() {
    return {
      detail: {},
      defaultImg:"../../assets/images/loadingimg.jpg",
      imgUrl: {},
      collections:{},
      series:{},
      searchList:{},
      listdata:[],
      isCollectionsShow:true,
      isSeriesShow:true,
      isShowlist:true,
      isNewDramaShow:true,
      imgCondition:true,
      id:this.$route.params.id
    };
  },
  components: {
    [Button.name]: Button,
    List,
  },
  computed: {
    isfinished() {
      if (this.detail.state == 1) {
        return "已完结";
      } else {
        return this.detail.refreshDesc + "更新";
      }
    },
    getDate(){
      return new Date().getTime();
    }
  },
  methods: {
    // --------------点击[显示更多]，显示更多视频合集
    loadMoreCollections(){
      $.get("https://neets.cc/api/videoSource/list/2/5?adapteType=0&enable=3&num=-1&videoId="+this.id+"&filter=1").then(result => {
        let res = result.data.data.list;
        this.collections = this.collections.concat(res)
        this.isCollectionsShow = false
      })
    },
    // --------------点击[显示更多]，显示更多视频分集
    loadMoreSeries(){
      $.get("https://neets.cc/api/videoSeries/list/"+this.id+"/2/10?enable=3&").then(result => {
        let res = result.data.data.list;
        this.series = this.series.concat(res)
        this.isSeriesShow = false
      })
    },
  },
  mounted() {
    // --------------视频详细信息
    $.get("api/video/detail/"+this.id+"").then(result => {
      this.detail = result.data.data;
      this.imgUrl = JSON.parse(result.data.data.photos);
      console.log(this.imgUrl)
    });
    // --------------视频合集
    $.get("https://neets.cc/api/videoSource/list/1/5?adapteType=0&enable=3&num=-1&videoId="+this.id+"&filter=1").then(result => {
      this.collections = result.data.data.list;
    })
    // --------------视频分集
    $.get("https://neets.cc/api/videoSeries/list/"+this.id+"/1/10?adapteType=0&enable=3").then(result => {
      this.series = result.data.data.list;
    })
    // --------------全网搜索
    $.get("https://neets.cc/api/full-text/videos/"+this.id+"/grab-datas?pageNo=1&pageSize=6&seriesSize=1&themeSize=3&filter=1").then(result => {
      this.searchList = result.data.data;
    })
    // 新剧推荐
    $.get("https://neets.cc/api/video/search/1/4?odder=2").then(result => {
      this.listdata = result.data.data.list
    }
    )
  }
};
</script>

<style lang="scss" scoped>
@import '@/yo/core/reset.scss';
.detailContainer {
  position: relative;
  height: 100%;
  width: 100%;
  background: #f4f5f6;
  @include flexbox();
  flex-direction: column;
  nav {
    background: white;
    position: absolute;
    width: 100%;
    z-index: 2;
    height: 0.315rem;
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
  main {
    @include flex();
    flex-direction: column;
    position: absolute;
    top: .315rem;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .content{
      width: 100%;
      min-height: 10rem;
      height: auto;
      overflow-y: scroll;
      @include flexbox();
      flex-direction: column;
      .bgImg{
        position: absolute;
        height: 1.85rem;
        width: 100%;
        top: 0;
        z-index: 0;
        overflow: hidden;
        filter: blur(25px);
        opacity: .8;
        &::before{
          content: " ";
          background: black;
          opacity: 0.3;
          z-index: 1;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
        img{
          width: 100%;
        }
      }
      .title {
        z-index: 2;
        color: white;
        width: 100%;
        font-size: 0.2rem;
        line-height: 0.27rem;
        padding: 0.115rem 0.15rem 0.1rem;
      }
      .middle{
        z-index: 2;
        @include flexbox();
        flex-direction: row;
        .small_img{
          width: 1.25rem;
          height: 1.65rem;
          overflow: hidden;
          border: .03rem solid white;
          border-radius: .05rem;
          margin-left: .15rem;
          img{
            width:100%;
            height: 100;
            ;
          }
        }
        .info{
          color: white;
          padding-left: 0.15rem;
          padding-bottom: 0.15rem;
          padding-top: 0.1rem;
          font-size: 0.14rem;
          line-height: .2rem;
          @include flexbox();
          flex-direction: column;
          .btns{
            padding-top: 0.23rem;
            margin-right: 0.15rem;
            padding-bottom: 0.1rem;
            width: 100%;
            .mint-button {
              background: #59c4f9;
              height: 0.325rem;
              &:nth-of-type(1) {
                width: 1.64rem;
                margin-right: 0.05rem;
                font-size: 0.16rem;
              }
              &:nth-of-type(2) {
                line-height: 0.325rem;
                font-size: 0.16rem;
                width: .325rem;
              }
            }
          }
        }
      }
      article{
        margin-top: .125rem;
        .summary_title{
          font-size: .16rem;
          color: #555;
          margin-left: .15rem;
          margin-top: .3rem;
          margin-bottom: .05rem;
        }
        .summary{
          width: 100%;
          margin: 0 auto;
          margin-top: .12rem;
          padding-left: .15rem;
          padding-right: .15rem;
          color: #888;
          font-size: .12rem;
        }
        .nomore{
          text-align: center;
          color: #888;
          margin: .15rem;
          display: block;
          font-size: .13rem;
          line-height: 1;
        }
      }
      .collection{
        width: 100%;
        >p{
          color: #555;
          margin-left: .15rem;
          margin-bottom: .05rem;
          font-size: .16rem;
        }
        .collection_hide{
          width: 100%;
          .collection_show{
            @include flexbox();
            flex-direction: column;
            width: 100%;
            height: auto;
            ul{
              div{
                li{
                    border: 1px solid #eee;
                    margin: .1rem .15rem 0;
                    background-color: #fff;
                    border-radius: .05rem;
                    color: #555;
                    height: .4rem;
                  >p{
                    position: relative;
                    float: left;
                    margin-left: .15rem;
                    margin-top: .12rem;
                    line-height: 1;
                    width: 100%;
                    padding-right: 50px;
                    font-size: .14rem;
                    color: #555;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    span{
                      line-height: 1;
                      margin-top: .12rem;
                      font-size: .14rem;
                      color: #555;
                    }
                    i{
                      font-style: normal;
                      margin-left: 10px;
                      color: #3f7cc1;
                      font-size: .12rem;
                    }
                  }
                }
              }
            }
            p{
              margin-top: .1rem;
              text-align: center;
              font-size: .13rem;
              line-height: 1;
              color: #3f7cc1;
            }
          }
        }
      }
      .series{
        margin-top: .25rem;
        width: 100%;
        height: auto;
        >p{
          color: #555;
          margin-left: .15rem;
          margin-bottom: .05rem;
          font-size: .16rem;
        }
        .series_hide{
          width: 100%;
          .series_show{
            @include flexbox();
            flex-direction: column;
            width: 100%;
            height: auto;
            ul{
              >div{
                position: relative;
                li{
                  // position: absolute;
                  border: 1px solid #eee;
                  margin: .1rem .15rem 0;
                  background-color: #fff;
                  border-radius: .05rem;
                  color: #555;
                  height: .4rem;
                  >div{
                    text-align: left;
                    margin-left: .15rem;
                    margin-top: .12rem;
                    line-height: 1;
                    width: 100%;
                    padding-right: 50px;
                    font-size: .14rem;
                    color: #555;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    span{
                      line-height: 1;
                      margin-left: .35rem;
                      margin-top: .12rem;
                      font-size: .14rem;
                      color: #555;
                    }
                  }
                }
                div{
                  position: absolute;
                  right: 0;
                  top: 0;
                      input{
                        display: none;
                        
                      }
                      label{
                        border: 2px solid #aaa;
                        margin-top: .1rem;
                        border-radius: 3px;
                        width: 20px;
                        height: 20px;
                        display: inline-block;
                        box-sizing: border-box;
                        position: relative;
                        margin-right: .25rem;
                        vertical-align: middle;
                      }
                    }
              }
            }
            p{
              margin-top: .1rem;
              text-align: center;
              font-size: .13rem;
              line-height: 1;
              color: #3f7cc1;
            }
          }
        }
      }
      .search{
        padding: 0 .15rem;
        margin-top: .3rem;
        font-size: .16rem;
        h4{
          color: #111;
          margin-bottom: .15rem;
          font-weight: 400;
        }
        .searchList{
          @include flexbox();
          flex-direction: column;
          .searchItem{            
            background: #fff;
            margin-bottom: .1rem;
            font-size: .12rem;
            padding: .075rem .15rem;
            .lineOne{
              padding: .085rem 0;
              line-height: 1;
              font-size: .12rem;
              color: #111;
              border-bottom: .5px solid #ddd;
              i{
                font-style: normal;
                margin-left: .05rem;
                color: #3f7cc1;
              }
              
            }
            .lists{
              padding: .075rem 0;
              line-height: .2rem;
              font-size: .13rem;
              a{
                color: #3f7cc1;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: 1.3;
                @include flexbox();
                flex-direction: row;
                justify-content: space-between;
                // align-items: flex-end;
                div{
                  &:nth-of-type(2){
                    b{
                      font-weight: 400;
                      font-size: .11rem;
                      display: inline-block;
                      padding: .02rem .06rem;
                      line-height: 1;
                      background: #59c4f9;
                      border-radius: 3px;
                      color: #fff;
                      margin-top: .01rem;
                    }
                  }
                }
              }
            }
            .searchMore{
              font-size: .12rem;
              color: #3f7cc1;
              text-align: right;
              padding: .075rem 0;
            }
          }
        }
        .loadMoreSearch{
          text-align: center;
          margin-top: .15rem;
          font-size: .13rem;
          line-height: 1;
          a{
          color: #3f7cc1;

          }
        }
      }
      .newDrama{
        h4{
          margin-top: .3rem;
          color: #555;
          margin-left: .15rem;
          margin-bottom: .05rem;
          font-size: .16rem;
        }

        p{
          margin-top: .2rem;
          text-align: center;
          font-size: .13rem;
          line-height: 1;
          a{
            color: #3f7cc1;
          }
        }
      }
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
    }
  }
}

</style>
