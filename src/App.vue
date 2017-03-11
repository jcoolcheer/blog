<template>
  <div class="container box" >
    <loading v-if='isLoading && !info'>
    </loading>
    <div class='blog_wraper clearfix' v-if='info'>
      <section class='side info_side box-shadow'>
        <header class='info'>
          <router-link class = 'img_bg user_headimg' tag = 'div' to='/emotion'>
          </router-link>
          <input class='ellipsis blogger_name' type='text' v-model='info.name'>
          </input>
          <p class='ellipsis sigEmotion'>
            清澈高远，大气磅礴
          </p>
        </header>
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
        <div class='lists_zone'>
          <ul class='posts_list'>
            <li v-if='posts' v-for = '(item,index) in titles' @click ='inPost(index,item)' :class='[ index === i ? "des" : "" ]'>
              <h4>
              <a href="javascript:;">
                 {{ item.title }}
              </a>
              </h4>
              <p>
                Posted at {{ item.release_time || "2017-06-22" }}
              </p>
            </li>
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
                <i class="iconfont info">
                  &#xe669
                </i>
                <span class="count info">
                  0
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
      <footer class='postBtn' v-if = 'i != 1'>
        <router-link class='editPostBtn' tag = 'a' :to = '{ name: "editPost",params: { pID: this.pID } }'>
          EDIT
        </router-link>
        <a class='deletePostBtn' @click.stop = 'deletePost'>
          {{ deleteReminder }}
        </a>
      </footer>

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
import VueCoreImageUpload  from 'vue-core-image-upload'
import loading from './components/loading'
import emotion from './components/emotion'

Vue.use(vueResource)
export default {
  name: 'app',
  created (){
    this.requestInfo()
    this.requesTitles()
  },
  data (){
    return {
      info: null,
      show: true,
      titles: [],
      posts: [],
      pID: -1,
      title: '漫威电视剧《#异人族#》的前两集剧场版确定于9月1日在 IMAX 院线上映，持续两周。',
      i: -1,
      rawHtml: '',
      imgSrc: '',
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      isLoading: true,
      deleteReminder: 'DELETE',
      toDelete: true
    }
  },
  components: {
    VueCoreImageUpload,
    loading
  },
  methods: {
    requestInfo: function(){
      this.$http.get(baseUrl+'api/v1/user/1').then(function(data){
        this.info = data.body
        this.isLoading = false
      })
    },
    requesTitles: function(){
      this.$http.get(baseUrl+'api/v1/title/').then(
        function(data){
          this.titles = data.body
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
        }
      )
    },
    inPost: function(i,item){
      this.i = i
      this.toDelete = true
      this.pID = item.id
      history.pushState({},'','/#/'+i)
      this.showPost(i)
    },
    showPost: function(i){
      this.$http.get(baseUrl+'api/v1/article/'+this.pID).then(
        function(data){
          this.desPost = data.body
          this.imgSrc = this.desPost.icon
          this.title = this.desPost.title
          this.rawHtml = this.desPost.content
        }
      )
    },
    imageuploaded(res) {
      if (res.errcode == 0) {
        this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
      }
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
  html,body,div,p,ul,ol,li,p,h1,h2,h3,h4,h5,input,textarea{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

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
  blockquote p,.general p{
    line-height: 2;
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
  header.info{
    text-align: center;
    padding: 0 20px;
  }
  .user_headimg{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #858585;
    cursor: pointer;
    background-image: url(http://tva3.sinaimg.cn/crop.0.0.748.748.180/6b111555jw8f1wsw89wrkj20ks0ksgmw.jpg);
    margin: 40px auto;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
    position: relative;
    overflow: hidden;
    z-index: 2;
  }
  .user_headimg:hover{
    animation: remind 0.3s ease-out;
  }
/*  @keyframes remind{
    0%{
      transform: scale(1);
    }

    40%{
      transform: scale(1.05);
    }
    80%{
      transform: scale(0.9);
    }
    100%{
      transform: scale(1);
    }
  }*/

  .blogger_name{
    font-size: 20px;
    color: #efefef;
    background-color: transparent;
    border: none;
    outline: none;
    text-align: center;
    width: 100%;
  }
  p.sigEmotion{
    font-size: 14px;
    line-height: 40px;
    color: #aaa;
  }
  /*info_side css*/

  /*list_side_css*/
  .list_side{
    border-right: 1px solid #e5e5e6;
  }
  header.list{
    height: 65px;
    line-height: 65px;
    background-color: #f5f5f6;
    color: #4d4f4f;
  }
  header.list>i{
    float: left;
  }
  header.list>i{
    width: 80px;
    text-align: center;
    display: block;
    height: 100%;
    font-size: 20px;
  }
  header.list>div{
    margin-left: 80px;
    padding: 0 10px;
  }
  input.search_blog_input{
    width: 100%;
    height: 65px;
    border: none;
    outline: none;
    background-color: #f5f5f6;
    color: #4d4f4f;
    font-size: 14px;
  }
  .lists_zone{
    padding: 10px 25px;
    height: calc(100% - 65px );
  }
  .lists_zone>p{
    line-height: 50px;
    margin-bottom: 20px;
    font-weight: bold;
    color: #4c556e;
    display: none;
  }
  .posts_list{
    padding-top: 20px;
    height: calc( 100% - 90px );
    overflow: auto;
  }
  .posts_list li{
    padding: 5px;
    margin: 15px 0;
    border-bottom: 1px solid #f5f5f6;
    cursor: pointer;
  }
  .posts_list li:first-child{
    margin-top: 0;
  }
  .posts_list li.des{
    background: #f5f5f6;
  }
  .posts_list li>h4{
    color: #3d3f3f;
  }
  .posts_list li a{
    color: #4d4f4f;
  }
  .posts_list li>p{
    font-size: 13px;
    line-height: 2;
    color: #888;
  }
  .new_post{
    width: 100%;
    height: 90px;
    line-height: 90px;
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
    height: 50px;
    line-height: 50px;
    border-radius: 3px;
    font-size: 13px;
    font-weight: bold;
    background-color: rgba(112,161,159,0.8);
    color: #fff;
    position: relative;
    z-index: 2;
    transition: all 0.3s;
  }
  .new_post a:hover{
    background-color: rgba(112,161,159,1);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.38);
  }
  /*list_side_css*/


  /*content_side_css*/
  header.blog{
    position: relative;
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
  }
  article p{
    margin-bottom: 20px;
    line-height: 1.8;
  }

  footer.postBtn{
    text-align: center;
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
  section.content_side:hover footer.postBtn{
    display: block;
  }
  footer.postBtn>a{
    display: inline-block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    margin: 0 20px;
    color: #fff;
    border-radius: 3px;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: none;
    position: relative;
  }
  .editPostBtn{
    background: rgba(77,79,79,0.8);
  }
  .deletePostBtn{
    background: rgba(244,67,54,0.8);
  }
  footer.postBtn>a:hover{
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.38);
  }
  .editPostBtn:hover{
    background-color: rgba(77,79,79,1);
  }
  .deletePostBtn:hover{
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
</style>
