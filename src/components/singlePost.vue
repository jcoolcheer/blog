<template lang="html">
  <div class="content_side_wraper" >
    <section class='side content_side'　@click = 'fullScreen = !fullScreen' :class = '[fullScreen ? "full" : ""]'>
      <transition name = 'postShow'>
        <div class="hasPost" v-if = 'titles.length && !tempBlank'>
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
                    <i class="iconfont info" @click.stop = 'likethis' :class='[liked ? "liked" : ""]'>
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
            <a class='generalBtn negativeBtn' @click.stop.stop = 'deletePost'>
              {{ deleteReminder }}
            </a>
          </footer>
          <div id="uyan_frame"></div>
        </div>
      </transition>
      <noContent v-if = '!titles.length || tempBlank'>
      </noContent>
    </section>
  </div>
</template>

<script>
import { baseUrl } from '../baseUrl'
import marked from 'marked'
import noContent from '../components/noContent'
export default {
  created () {
    this.getTitles()
    this.inPost()
  },
  data () {
    return{
      inPostMode: false,
      liked: false,
      pID: this.$route.params.id,
      titles: this.$store.state.titles,
      deleteReminder: 'DELETE',
      title: '',
      rawHtml: '',
      imgSrc: '',
      toDelete: true,
      likes: 0,
      liked: false,
      tempBlank: false,
      fullScreen: false
    }
  },
  components: {
    noContent,
  },
  methods: {
    getTitles: function(){
      // console.log(this.$store.state.titles,',,,,,')
    },
    inPost: function(){
      this.inPostMode = true
      this.liked = false
      this.toDelete = true
      this.showPost()
      this.liked = localStorage.likes && JSON.parse(localStorage.likes)[this.pID]
    },
    deletePost: function(){
      this.toDelete = !this.toDelete
      this.toDelete && (this.deleting())
    },
    deleting: function(){
      this.$http.delete(baseUrl+'api/v1/article/'+this.pID).then(
        function(){
          this.$store.commit('deleteTitle',i)
          this.titles.splice(this.i,1)
          this.tempBlank = true
          this.clearContent()
        }
      )
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
      this.liked ? this.cancelLike() : this.addLike()
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
    },
    '$route': function(to,from){
      this.pID = to.params.id
      this.inPost()
    },
    '$store.state.titles': function(n,v){
      this.titles = n
    }
  }

}
</script>

<style lang="css">
.blog_wraper{
  position: relative;
}
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
  height: 19rem;
  transition: all 0.2s;
}
header.blog:hover .blog_img{
  transform: scale(1.3);
}
.likes{
  color: #fff;
  height: 7rem;
}
.likes>p{
  height: 7rem;
  padding: 0 2.5rem;
  line-height: 7rem;
}
.likes>p>span{
  margin: 0 1.8rem;
  color: #ccc;
}
.likes>p>span>i{
  cursor: pointer;
}
.likes>p>span:first-child{
  margin-left: 0;
}
.iconfont.info{
  font-size: 1.8rem;
  margin-right: 0.34rem;
  transition: all 0.15s;
  vertical-align: middle;
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
  font-size: 1.8rem;
}
.title{
  height: 11rem;
  padding: 0 2.5rem;
  display: flex;
}
.blog_title{
  align-self: flex-end;
  flex-grow: 1;
  margin-bottom: 2.5rem;
  color: #fff;
}
article{
  padding: 1.8rem 2.5rem;
  font-size: 1.25rem;
}
article p{
  margin-bottom: 1.8rem;
  line-height: 1.8;
}
article img{
  display: block;
  width: 80%;
  margin: 1.8rem 0;
}
article p:first-of-type img{
  display: none;
}
article ul:first-child{
  display: none;
}

article ul:first-child li{
  display: inline-block;
  padding: 0.25rem 1.8rem;
  border-radius: 2.5rem;
  font-size: 1.05rem;
  margin: 0 0.8rem 1.25rem 0;
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
  width: 16.7rem;
  height: 3.3rem;
  line-height: 3.3rem;
  text-align: center;
  margin: 0 1rem;
  color: #fff;
  border-radius: 0.25rem;
  font-size: 1.08rem;
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

@media screen and (max-device-width: 1080px){
  .side.content_side{
    display: block;
    width: 90%;
    height: 90%;
    border-radius: 0.4rem;
  }
  .side.content_side.full{
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
  .content_side_wraper{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
  }
}
</style>
