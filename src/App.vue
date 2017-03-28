<template>
  <div class="container box" >
    <loading v-if='isLoading && !info'>
    </loading>
    <div class='blog_wraper clearfix' v-if='info'>
      <section class='side info_side box-shadow'>
        <header class='info'>
          <router-link class = 'img_bg user_headimg' tag = 'div' to='/emotion' >
          </router-link>
          <input class='ellipsis blogger_name' type='text' v-model='info.name'>
          </input>
          <p class='ellipsis sigEmotion'>
            清澈高远，大气磅礴
          </p>
        </header>
        <ul class='tags'>
          <li v-for ='(item,index) in tags' class = 'ellipsis' @click = 'setTag(item.id,index)' :class='[ t === index ? "des" : "" ]'>
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
            <li key = 'loading' v-if = 'loadingList' class = 'loadingList'>
              <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
              </div>
            </li>
            <li v-if='titles.length && !loadingList'  v-for = '(item,index) in titles' @click ='inPost(index,item)' :class='[ index === i ? "des" : "" ,"list-complete-item",item.newPost ? "new" : ""]' :key = 'item'>
              <h4>
              <a href="javascript:;">
                 {{ item.title }}
              </a>
              </h4>
              <p>
                Posted at {{ item.release_time || "2017-06-22" }}
              </p>
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
            NEW POST
            </router-link>
          </div>
        </div>
      </section>
      <section class='side content_side'>
        <transition name = 'postShow'>
          <div class="hasPost" v-if = 'titles.length && !loadingList && !tempBlank'>
            <header class='blog'>
              <div class='img_bg blog_img box-shadow' v-if='imgSrc.length >= 10' v-bind:style='{ backgroundImage: "url("+imgSrc+")" }'>

              </div>
              <div class='img_bg blog_img box-shadow' v-if='imgSrc.length < 10' style='backgroundImage: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489125503481&di=fe96dbb3122030a646e09e4b35382387&imgtype=0&src=http%3A%2F%2Fifanr-cdn.b0.upaiyun.com%2Fwp-content%2Fuploads%2F2016%2F07%2FBojack-Horseman-Season-3-1024x576.jpg)'>
              </div>
              <div class='blog_info'>
                <div class='likes'>
                  <p class='clearfix'>
                    <span>
                      <i class="iconfont info">
                        &#xe6bc
                      </i>
                      <span class="count info">
                        0
                      </span>
                    </span>
                    <span>
                      <i class="iconfont info" @click = 'likethis' :class='[liked ? "liked" : ""]'>
                        &#xe669
                      </i>
                      <span class="count info">
                        {{ likes }}
                      </span>
                    </span>
                  </p>
                </div>
                <div class='title'>
                  <h1 class='blog_title'>
                    {{ title }} ​​​​
                  </h1>
                </div>
              </div>
            </header>
            <article v-html='rawHtml'>
            </article>
            <footer class='generalBtnWrap post' >
              <router-link class='generalBtn positiveBtn' tag = 'a' :to = '{ name: "editPost",params: { pID: this.pID } }'>
                EDIT
              </router-link>
              <a class='generalBtn negativeBtn' @click.stop = 'deletePost'>
                {{ deleteReminder }}
              </a>
            </footer>
            <div id="uyan_frame"></div>
          </div>
        </transition>
        <noContent v-if = '(!titles.length && !loadingList) || tempBlank'>
        </noContent>
      </section>
    </div>
    <div class='features'>
      <transition name ='routeAnimation'>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vueResource from 'vue-resource'
import { baseUrl } from './baseUrl'
import marked from 'marked'
import loading from './components/loading'
import emotion from './components/emotion'
import blankPost from './components/blankPost'
import noContent from './components/noContent'
import gif from './assets/emo.gif'
Vue.use(vueResource)
export default {
  name: 'app',
  created (){
    this.requestInfo()
    this.requesTitles()
    this.requesTags()

  },
  activated (){
    // alert(2)
  },
  data (){
    return {
      info: null,
      show: true,
      titles: [],
      t: -1,
      tags: [],
      pID: -1,
      title: '',
      i: -1,
      rawHtml: '',
      imgSrc: '',
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      isLoading: true,
      deleteReminder: 'DELETE',
      toDelete: true,
      loadingList: true,
      tempBlank: false,
      likes: 0,
      liked: false,
      gif
    }
  },
  components: {
    loading,
    blankPost,
    noContent
  },
  methods: {
    requestInfo: function(){
      this.$http.get(baseUrl+'api/v1/user/1').then(function(data){
        this.info = typeof(data.body) === 'string' ? JSON.stringify(data.body) : data.body
        this.$store.state.info = this.info
        this.isLoading = false
      })
    },
    beforeRouterEnter: function(){
      //
    },
    requesTitles: function(){
      this.$http.get(baseUrl+'api/v1/title/').then(
        function(data){
          this.computeTitles(data)
          this.loadingList = false
          this.titles.length && this.init()
        }
      )
    },
    computeTitles: function(data){
      const titles = typeof(data.body) === 'string' ? JSON.parse(data.body) : data.body
      this.$store.commit('clearTitle')
      this.$store.commit('addTitle',titles)
      this.titles = this.$store.state.titles
    },
    init: function(){
      this.pID = this.titles[0].id
      this.showPost()
      this.i = 0
    },
    requesTags: function(){
      this.$http.get(baseUrl+'api/v1/tag/').then(
        function(data){
          this.tags = data.body
        }
      )
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
    },
    deletePost: function(){
      this.toDelete = !this.toDelete
      this.toDelete && (this.deleting())
    },
    deleting: function(){
      this.$http.delete(baseUrl+'api/v1/article/'+this.pID).then(
        function(){
          this.titles.splice(this.i,1)
          this.i = -1
          this.tempBlank = true
          this.clearContent()
        }
      )
    },
    clearContent: function(){
      this.title = ''
      this.imgSrc = ''
      this.rawHtml = ''
    },
    inPost: function(i,item){
      item.newPost && delete item.newPost
      this.i = i
      this.liked = false
      this.toDelete = true
      this.pID = item.id
      history.pushState({},'','/#/'+this.pID)
      this.showPost(i)
      this.liked = localStorage.likes && JSON.parse(localStorage.likes)[this.pID]
    },
    showPost: function(){
      this.$http.get(baseUrl+'api/v1/article/'+this.pID).then(
        function(data){
          this.tempBlank = false
          this.desPost = data.body
          this.imgSrc = this.desPost.icon
          this.title = this.desPost.title
          this.likes = this.desPost.like
          this.rawHtml = marked(this.desPost.content)
          this.liked = localStorage.likes && JSON.parse(localStorage.likes)[this.pID]
        }
      )
    },
    likethis: function(){
      if(this.liked){
        this.cancelLike()
        return
      }else{
        this.addLike()
      }

    },
    addLike: function(){
      this.$http.patch(baseUrl+'api/v1/article/'+this.pID,JSON.stringify({ like: this.likes+1 })).then(
        function(){
          this.liked = true
          this.likes += 1
          const liked =  localStorage.likes && JSON.parse(localStorage.likes) || {}
          liked[this.pID] = true
          localStorage.likes = JSON.stringify(liked)
        }
      )
    },
    cancelLike: function(){
      this.$http.patch(baseUrl+'api/v1/article/'+this.pID,JSON.stringify({ like: this.likes-1 })).then(
        function(){
          this.liked = false
          this.likes -= 1
          const liked =  localStorage.likes && JSON.parse(localStorage.likes) || {}
          delete liked[this.pID]
          localStorage.likes = JSON.stringify(liked)
        }
      )
    }
  },
  watch: {
    'toDelete': function(n,o){
      this.deleteReminder = n === true ? "DELETE" : "SURE"
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
  html,body,.container,.blog_wraper{
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
    animation: routeout 0.2s ease-out;
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
    width: 50.12%;
    animation: showPost 0.3s;
  }
  @media screen and (max-device-width: 1080px) {
    html{
      font-size: 25px;
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
      border: 0.3rem solid #858585;
    }
    .info_side,.list_side{
      width: 100%;
    }
    .content_side{
      display: none;
    }
    ul.tags{
      display: none;
    }
    header.list{
      display: none;
    }
    .side.list_side{
      height: 67vh;
    }
    div.lists_zone{
      height: 67vh;
    }
    ul.posts_list{
      height: 100%;
    }
    .new_post{
      display: none;
    }

  }
  header.info{
    text-align: center;
    padding: 0 2.5rem;
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
    padding: 0 10px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 13px;
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


  /*content_side_css*/
  .postShow-enter-active{
    animation: postShow 0.1s ease-out;
  }
  .postShow-leave-active{
    animation: postHide 0.1s ease-out;
  }
  @keyframes postShow{
    0%{
      transform: scale(0);
    }
    100%{
      transform: scale(1);
    }
  }
  @keyframes postHide{
    0%{
      transform: scale(1);
    }
    100%{
      transform: scale(0);
    }
  }
  .content_side>div.hasPost{
    height: 100%;
  }
  header.blog{
    position: relative;
    overflow: hidden;
  }

  .blog_info{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.2);
    text-align: left;
  }
  .blog_img{
    background-size: cover;
    background-position: center;
    height: 220px;
    transition: all 0.2s;
  }
  header.blog:hover .blog_img{
    transform: scale(1.3);
  }
  .likes{
    color: #fff;
    height: 50px;
  }
  .likes>p{
    height: 80px;
    padding: 0 30px;
    line-height: 80px;
  }
  .likes>p>span{
    margin: 0 20px;
    color: #ccc;
  }
  .likes>p>span>i{
    cursor: pointer;
  }
  .likes>p>span:first-child{
    margin-left: 0;
  }
  .iconfont.info{
    font-size: 20px;
    margin-right: 5px;
    transition: all 0.15s;
  }
  .iconfont.liked{
    color: #fd5b78
  }
  .count.info{
    color: #fff;
  }
  .editPost{
    float: right;
  }
  .editPost i{
    font-size: 20px;
  }
  .title{
    height: 170px;
    padding: 0 30px;
    display: flex;
  }
  .blog_title{
    align-self: flex-end;
    flex-grow: 1;
    margin-bottom: 30px;
    color: #fff;
  }
  article{
    padding: 20px 30px;
    font-size: 15px;
  }
  article p{
    margin-bottom: 20px;
    line-height: 1.8;
  }
  article img{
    display: block;
    width: 80%;
    margin: 20px 0;
  }
  article p:first-of-type img{
    display: none;
  }
  article ul:first-child{
    display: none;
  }

  article ul:first-child li{
    display: inline-block;
    padding: 3px 20px;
    border-radius: 30px;
    font-size: 13px;
    margin: 0 10px 15px 0;
    background-color: #f5f5f6;
    border: 1px solid #eee;
    opacity: 0.9;
  }
  .generalBtnWrap{
    text-align: center;
  }
  .generalBtnWrap.post{
    display: none;
    animation: showPostBtn 0.3s;
  }
  @keyframes showPostBtn{
    0%{
      opacity: 0;
      transform: scale(0);
    }
    100%{
      opacity: 1;
      transform: scale(1);
    }
  }
  section.content_side:hover footer.generalBtnWrap{
    display: block;
  }
  .generalBtn{
    display: inline-block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0 20px;
    color: #fff;
    border-radius: 3px;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: none;
    position: relative;
  }
  .generalBtn:hover{
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.38);
  }
  .positiveBtn{
    background: rgba(77,79,79,0.8);
  }
  .negativeBtn{
    background: rgba(244,67,54,0.8);
  }

  .positiveBtn:hover{
    background-color: rgba(77,79,79,1);
  }
  .negativeBtn:hover{
    background-color: rgba(244,67,54,1);
  }
  @keyframes showPost {
    0%{
      transform: scale(0);
      opacity: 0;
    }
    100%{
      transform: scale(1);
      opacity: 1;
    }
  }

  .spinner {
    width: 60px;
    height: 60px;
    position: relative;
    margin: 30px auto;
  }

  .double-bounce1, .double-bounce2 {
    width: 60px;
    height: 60px;
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
