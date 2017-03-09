<template>
  <div class="container box" >
    <loading v-if='isLoading && !info'>
    </loading>
    <div class='blog_wraper clearfix' v-if='info'>
      <section class='side info_side box-shadow'>
        <header class='info'>
          <div class = 'img_bg user_headimg'>
          </div>
          <input class='ellipsis blogger_name' type='text' v-model='info.name'>
          </input>
          <p class='ellipsis emotion'>
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
            <li v-if='posts' v-for = '(item,index) in posts'>
              <h4>
              <a href="javascript:;" @click ='inPost(index)'>
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
            <router-link tag= 'a' class='box-shadow' href='javascript:;' to='/newPost'>
            NEW POST
            </router-link> 
          </div>
        </div>
      </section>
      <section class='side content_side'>
      <header class='blog'>
        <div class='img_bg blog_img box-shadow' v-bind:style='{ backgroundImage: "url("+imgSrc+")" }'>

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
              <span class='editPost'>
                <i class="iconfont" title='编辑'>
                &#xe600
                </i>
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

Vue.use(vueResource)
export default {
  name: 'app',
  created (){
    this.requestInfo()
    this.requestPosts()
  },
  data (){
    return {
      info: null,
      show: true,
      posts: [],
      title: '漫威电视剧《#异人族#》的前两集剧场版确定于9月1日在 IMAX 院线上映，持续两周。',
      rawHtml: '',
      imgSrc: '',
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      isLoading: true
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
    requestPosts: function(){
      this.$http.get(baseUrl+'api/v1/article/').then(
        function(data){
          this.posts = data.body
          this.imgSrc = this.posts[1].icon
          this.title = this.posts[1].title
          this.rawHtml = this.posts[1].content
        }
      )
    },
    inPost: function(i){
      history.pushState({},'','/#/'+i)
      this.imgSrc = this.posts[i].icon
      this.title = this.posts[i].title
      this.rawHtml = this.posts[i].content
    },
    imageuploaded(res) {
      if (res.errcode == 0) {
        this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
      }
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
      transform: translateX(15px);
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
    background-image: url(http://tva3.sinaimg.cn/crop.0.0.748.748.180/6b111555jw8f1wsw89wrkj20ks0ksgmw.jpg);
    margin: 40px auto;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
    position: relative;
    overflow: hidden;
    z-index: 2;

  }
  
  .blogger_name{
    font-size: 20px;
    color: #efefef;
    background-color: transparent;
    border: none;
    outline: none;
    text-align: center;
    width: 100%;
  }
  p.emotion{
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
    padding: 10px 30px;
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
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #f5f5f6;
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
    background-color: #70a19f;
    color: #fff;
    position: relative;
    z-index: 2;
    transition: all 0.3s;
  }
  .new_post a:hover{
    background-color: #5A8282;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.5);
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
    background: rgba(0,0,0,0.3);
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
  /*content_side_css*/
</style>
