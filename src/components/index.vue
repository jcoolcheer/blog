<template lang="html">
  <div class="index" @click = 'showTags = false'>
    <loading v-if='isLoading && !info'>
    </loading>
    <div class='blog_wraper clearfix' v-if='info' :class = '[inPostMode ? "inPost" : ""]'>
      <section class='side info_side box-shadow'>
        <header class='info'>
          <router-link class = 'img_bg user_headimg' tag = 'div' to='/emotion' >
          </router-link>
          <input class='ellipsis blogger_name' type='text' v-model='info.name'>
          </input>
          <p class='ellipsis sigEmotion'>
            清澈高远，大气磅礴
          </p>
          <i class='iconfont' @click.stop = 'showTags = !showTags'>
            &#xe62b
          </i>
        </header>
        <ul class='tags' :class = '[showTags ? "showT" : ""]'>
          <li :class = 't === -1 ? "des" : ""' @click.stop = 'allTitles()'>
            全部
          </li>
          <li v-for ='(item,index) in tags' class = 'ellipsis' @click.stop = 'setTag(item.id,index)' :class='[ t === index ? "des" : "" ]'>
            {{ item.title }}
          </li>
        </ul>
      </section>
      <section class='side list_side'>
        <header class='list clearfix'>
          <i class='iconfont'>
            &#xe601
          </i>
          <div>
            <input type="text" name="search_blog" class='search_blog_input' placeholder="SEARCH POSTS HERE">
          </div>
        </header>

        <div class='lists_zone' >
          <ul class='posts_list list-complete' >
          <!-- <transition-group class='posts_list list-complete' tag = 'ul'> -->

            <router-link  tag = 'li' v-if='titles.length && !loadingList'  v-for = '(item,index) in titles' active-class='des' :to = '{ name: "post",params: { id: item.id } }'  :class='["list-complete-item",item.newPost ? "new" : ""]' :key = 'item'>
              <h4>
               {{ item.title }}
              </h4>
              <p>
                Posted at {{ item.release_time || "2017-06-22" }}
              </p>
            </router-link>
            <li key = 'loading' v-if = 'loadingList' class = 'loadingList'>
              <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
              </div>
            </li>
            <li v-if = '!titles.length && !loadingList' key = 'blank' class='noPost'>
              <blankPost >
              </blankPost>
            </li>
          <!-- </transition-group> -->
          </ul>
          <div class='new_post'>
            <div class='mask bottom'>
            </div>
            <router-link tag= 'a' class='' href='javascript:;' to='/newPost'>
            LOADING MORE
            </router-link>
          </div>
        </div>
      </section>
      <transition name ='postAnimation'>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vueResource from 'vue-resource'
import { baseUrl } from '../baseUrl'
import loading from '../components/loading'
import emotion from '../components/emotion'
import blankPost from '../components/blankPost'
import singlePost from '../components/singlePost'

import gif from '../assets/emo.gif'
Vue.use(vueResource)
export default {
  name: 'app',
  created (){
    this.requestInfo()
    this.requesTitles()
    this.requesTags()
  },
  data (){
    return {
      info: null,
      show: true,
      titles: [],
      tags: [],
      t: -1,
      inPostMode: false, // item点击后移动端须展示内容页面，隐藏列表和info页面
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      isLoading: true,
      loadingList: true,
      showTags: false,
      gif
    }
  },
  components: {
    loading,
    blankPost,
    singlePost
  },
  methods: {
    requestInfo: function(){
      this.$http.get(baseUrl+'api/v1/user/1').then(function(data){
        this.info = typeof(data.body) === 'string' ? JSON.stringify(data.body) : data.body
        this.$store.state.info = this.info
        this.isLoading = false
      })
    },
    requesTitles: function(){
      this.$http.get(baseUrl+'api/v1/title/').then(
        function(data){
          this.computeTitles(data)
          this.loadingList = false

        }
      )
    },
    computeTitles: function(data){
      const titles = typeof(data.body) === 'string' ? JSON.parse(data.body) : data.body
      this.$store.commit('clearTitle')
      this.$store.commit('addTitle',titles)
      this.titles = this.$store.state.titles
      this.titles.length && this.init()
    },
    requesTags: function(){
      this.$http.get(baseUrl+'api/v1/tag/').then(
        function(data){
          this.tags = data.body
        }
      )
    },
    init: function(){
      if(!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
          this.$router.push({ name: 'post',params: { id: this.titles[0].id } })
      }
    },
    allTitles: function(){
      this.t = -1
      this.requesTitles()
      this.showTags = false
    },
    setTag: function(id,index){
      this.t = index
      this.loadingList = true
      this.$http.get(baseUrl+'api/v1/title/'+id).then(
        function(data){
          this.computeTitles(data)
          this.loadingList = false
          this.i = -1
        },
        function(){
          this.titles = []
          this.loadingList = false
          this.i = -1
        }
      )
      this.showTags = false
    },
    clearContent: function(){
      this.title = ''
      this.imgSrc = ''
      this.rawHtml = ''
    },
  },
  watch: {
    'titles': function(){
      console.log(this.titles)
    }
  }
}
</script>

<style lang = 'css'>
  html{
    font-size: 12px;
  }
  html,body,div,p,ul,ol,li,p,h1,h2,h3,h4,h5,input,textarea{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",'sans-serif';
  }
  html,body,.container,.index,.blog_wraper{
    height: 100%;
    color: #2d2f2f;
    letter-spacing: 1px;
  }
  ::-webkit-scrollbar
  {
    width: 1px;
    height: 1px;
    background-color: #000;
    display: none;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #f5f5f6;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 20px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #000;
  }
  /*common css class*/
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  blockquote,.general{
    margin: 10px 0;
    margin-bottom: 20px;
    padding: 15px;
    line-height: 2;
    background-color: #f5f5f6;
    border-left: 6px solid #4d4f4f;
    color: #4d4f4f;
  }
  article blockquote p,.general p{
    line-height: 2;
    margin-bottom: 0;
  }
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
 .box-shadow{
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
  }
 .ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .img_bg{
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .routeAnimation-enter-active{
    animation: routeIn 0.5s ease-out;
  }
  .routeAnimation-leave-active{
    animation: routeout 0.5s ease-out;
  }
  @keyframes routeIn{
    0%{
      opacity: 0;
      transform: translateX(100%);
    }
    50%{
      opacity: 0.7;
      transform: translateX(-20px);
    }
    70%{
      opacity: 1;
      transform: translateX(15px) ;
    }
    100%{
      transform: translateX(0);
    }
  }
    @keyframes routeout{
    0%{
      opacity: 1;
      transform: translateX(0);
    }
    100%{
      opacity: 0;
      transform: translateX(100%);
    }
  }
  /*common css class*/

  /*info_side css*/
  .side{
    float: left;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }

  .info_side{
    width: 16.66%;
    background-color: #4d4f4f;
  }
  .list_side{
    width: 33.22%;
  }
  .content_side{
    background-color: #fff;
    width: 50.12%;
    animation: showPost 0.3s;
    transition: all 0.3s;
  }
  @media screen and (max-device-width: 1080px) {
    html{
      font-size: 12px
    }
    .info_side{
      height: 33vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div.user_headimg{
      width: 8rem;
      height: 8rem;
      margin-top: 0;
      margin-bottom: 0.7rem;
      border: 0.3rem solid #858585;
    }
    .info .sigEmotion{
      margin: 0.2rem 0;
    }
    .info_side,.list_side{
      width: 100%;
    }
    .inPost .content_side{
      display: block;
      width: 100%;
    }
    .inPost .info_side,.inPost .list_side,header.list,.new_post,section.content_side:hover footer.generalBtnWrap.post{
      display: none;
    }

    .side.list_side,div.lists_zone{
      height: 67vh;
    }
    .blog_wraper ul.tags{
      position: absolute;
      width: 40vw;
      max-height: 50vh;
      overflow: scroll;
      background-color: red;
      z-index: 999;
      top: 10vh;
      left: 5vw;
      border-radius: 3px;
      background-color: #fff;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
      padding: 1.5rem;
      display: none;
    }
    .blog_wraper ul.tags.showT{
      display: block;
    }
    .side header.info i.iconfont{
      display: block;
    }
    .blog_wraper ul.tags li{
      border-bottom: 1px solid #efefef;
    }
    .blog_wraper ul.tags li:last-child{
      border-bottom: none;
      margin-bottom: 0;
    }
    ul.posts_list{
      height: 100%;
    }
  }
  header.info{
    text-align: center;
    padding: 0 2.5rem;
    position: relative;
  }
  header.info i.iconfont{
    display: none;
    position: absolute;
    color: #eee;
    left: 0;
    top: 0;
    font-size: 1.8rem;
  }
  .user_headimg{
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    border: 0.4rem solid #858585;
    cursor: pointer;
    background-image: url(http://tva3.sinaimg.cn/crop.0.0.748.748.180/6b111555jw8f1wsw89wrkj20ks0ksgmw.jpg);
    background-size: cover;
    background-position: center;
    margin: 2rem auto;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
    position: relative;
    overflow: hidden;
    z-index: 2;
  }

  .user_headimg:hover{
    animation: remind 0.3s ease-out;
  }
  .blogger_name{
    font-size: 1.5rem;
    color: #efefef;
    background-color: transparent;
    border: none;
    outline: none;
    text-align: center;
    width: 100%;
  }
  p.sigEmotion{
    font-size: 0.8rem;
    line-height: 2rem;
    color: #aaa;
  }
  ul.tags{
    margin: 0 auto;
    max-height: calc( 100% - 250px );
    overflow: auto;
  }
  ul.tags li{
    color: #888;
    padding: 0 0.83rem;
    margin-bottom: 0.2rem;
    padding-bottom: 0.2rem;
    text-align: center;
    font-size: 1.08rem ;
    line-height: 2.3;
    cursor: pointer;
  }
  ul.tags li:hover{
    color: #ddd;
  }
  ul.tags li.des{
    background-color: #4e5259;
    color: #fff;
  }
  /*info_side css*/

  /*list_side_css*/
  .list_side{
    border-right: 1px solid #e5e5e6;
  }
  header.list{
    height: 4.8rem;
    line-height: 4.8rem;
    background-color: #f5f5f6;
    color: #4d4f4f;
  }
  header.list>i{
    float: left;
  }
  header.list>i{
    width: 6.5rem;
    text-align: center;
    display: block;
    height: 100%;
    font-size: 2rem;
    color: #888;
  }
  header.list>div{
    margin-left: 6.5rem;
    padding: 0 10px;
  }
  input.search_blog_input{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: #f5f5f6;
    color: #4d4f4f;
    font-size: 1.2rem;
  }
  .lists_zone{
    height: calc(100% - 4.8rem );
  }
  .posts_list{
    padding-top: 1.6rem;
    height: calc( 100% - 9rem );
    overflow: auto;
  }
  .posts_list li{
    padding: 0.9rem 4.2rem;
    margin: 10px 0;
    border-bottom: 1px solid #f5f5f6;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
    transform: translateX(0);
  }
  .posts_list li:hover{
    transform: translateX(-0.9rem);
  }
  .posts_list li::after{
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    right: 4rem;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: all 0.2s;
  }
  .posts_list li.des::after,.posts_list li.new::after{
    width: 0.9rem;
    height: 0.9rem;
  }
  .posts_list li.des::after{
    background-color: #4d4d4f;
  }

  .posts_list li.new::after{
    background-color: #7bbfea;
  }
  .posts_list li.loadingList{
    border-bottom: none;
  }
  .posts_list li:first-child{
    margin-top: 0;
  }

  .posts_list li>h4{
    font-size: 1.25rem;
  }
  .posts_list li a{
    color: #4d4f4f;
  }
  .posts_list li>p{
    font-size: 1.1rem;
    line-height: 2;
    color: #888;
  }
  .new_post{
    width: 100%;
    height: 8rem;
    line-height: 8rem;
    background-color: #fff;
    text-align: center;
    position: relative;
    bottom: 0;
  }
  .mask{
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .mask.bottom{
    left: 10px;
    right: 10px;
    background-color: #fff;
    filter: blur(10px);
    z-index: 1;
  }
  .new_post a{
    display: inline-block;
    width: 70%;
    height: 4rem;
    line-height: 4rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: bold;
    background-color: rgba(143,160,164,0.8);
    color: #fff;
    position: relative;
    z-index: 2;
    transition: all 0.3s;
  }
  .new_post a:hover{
    background-color: rgba(143,160,164,1);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.38);
  }
  /*list_side_css*/




  .spinner {
    width: 5rem;
    height: 5rem;
    position: relative;
    margin: 2.5rem auto;
  }

  .double-bounce1, .double-bounce2 {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: #4d4f4f;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: bounce 2.0s infinite ease-in-out;
    animation: bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }
  .uyanpost .postwrap .postaction{
    background-color: yellow!important;
  }
</style>
