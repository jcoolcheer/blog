<template lang="html">
  <div class="newPost" :style='{backgroundColor: color}' @click.stop = 'showConfirm = false'>
      <confirmPanel v-if='showConfirm' @click.stop>
        <h3 slot ='confirmTitle'>
          是否保存草稿？
        </h3>
        <p slot = 'warning'>
          您还没有发布文章
        </p>
        <a href="javascript:;" slot = 'positiveBtn' @click = 'saveAs'>
          确认
        </a>
        <a href="javascript:;" slot = 'negativeBtn' @click = 'noSave'>
          取消
        </a>
      </confirmPanel>

    <div class="edit_zone">
      <header>
      	<p class='operate_btn' >
        	<a href="javascript:;" @click.stop = 'savePost'>
        		SAVE
        	</a>
          <a href="javascript:;"  @click.stop = 'isShowConfirm'>
            CLOSE
          </a>
      	</p>
      	<input type="text" class='post_name ellipsis' placeholder='在此输入文章标题' v-model='title'>

      </header>
      <div class="show_content">
        <section class='content inner_md'>
          <textarea v-model = 'md_in' resize='none' placeholder="输入文章内容...">
          </textarea>
        </section>
        <section class='content out_html' v-html = 'out_html' v-highlight >
        </section>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import marked from 'marked'
import confirmPanel from './confirm'
import Highlight from '../highlight.js'
import { baseUrl } from '../baseUrl'

Vue.use(Highlight)

export default {
  created (){
    const vm = this
    this.out_html = marked(this.md_in)
  },
  data () {
    return {
      md_in: localStorage.postTemp || '' ,
      out_html: '',
      title: localStorage.titleTemp ||'',
      color: '',
      showConfirm: false,
      is_new: true,
    }
  },
  components:{
    confirmPanel
  },
  methods: {
    isShowConfirm: function(){
      this.md_in && (this.showConfirm = true)
      !this.md_in && (this.$router.push('/'))
    },
    saveAs: function(){
      localStorage.postTemp = this.md_in
      localStorage.titleTemp = this.title
      this.$router.push('/')
    },
    noSave: function(){
      localStorage.postTemp = ''
      localStorage.titleTemp = ''
      this.$router.push('/')
    },
    savePost: function(){
      console.log(1)
      if(!this.title || !this.out_html){
        return
      }
      const obj = JSON.stringify({
        title: this.title,
        content: this.out_html
      })

      this.$http.post(baseUrl+'api/v1/article/',obj).then(
        function(){
        }
      )
    },
  },
  watch: {
    'md_in': function (){
      this.out_html = marked(this.md_in)
    }
  }
}
</script>

<style lang="css" >
  .newPost{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color:  #57ffe7;
    z-index: 4;
  }
  .edit_zone{
    width: 80vw;
    height: 80vh;
    padding: 50px;
    padding-top: 0;
    border-radius: 5px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 7vh;
  }
  .show_content{
    height: calc(100% - 86px);
    font-size: 15px;
  }
  header{
  	padding-top: 1px;
  }
  .post_name{
  	width: 100%;
  	line-height: 50px;
  	padding: 0 20px;
  	border: none;
  	outline: none;
  	font-size: 27px;
  	text-align: center;
  }
  .operate_btn{
  	text-align: right;
  	margin-top: 15px;
  }
  .operate_btn a{
  	display: inline-block;
  	padding: 5px 10px;
  	margin-left: 12px;
  	font-size: 12px;
	  border: 1px solid transparent;
  	color: #888;
  }
  .operate_btn a:hover{
  	border: 1px solid #ccc;
  }
  section.content{
    float: left;
    width: 50%;
    box-sizing: border-box;
  }
  .content.inner_md{
  	height: 100%;
  	padding-right: 50px;
  }
  textarea{
  	resize: none;
  	width: 100%;
  	height: 100%;
  	margin: 20px;
  	margin-right: 0;
  	font-size: 15px;
  	letter-spacing: 1px;
  	outline: none;
  	border: none;
  	line-height: 2;
  	color: #333;
  }

  .out_html{
  	height: 100%;
  	padding: 20px 20px 20px 50px;
  	overflow: auto;
  	color: #4d4f4f;
  }
  .out_html h1,.out_html h2,.out_html h3,.out_html h4,.out_html h5{
  	margin: 5px 0;
  }
  .out_html h1{
  	font-size: 25px;
  }
  .out_html p{
  	line-height: 2;
  	margin-bottom: 15px;
  }
  .out_html blockquote>p{
  	margin-bottom: 0;
  }
  .out_html img{
  	width: 100%;
  	border-radius: 2px;
  }
  .out_html ul{
  	margin: 10px 0;
  }
  .out_html li{
  	line-height: 2;
  }
  .out_html ol,.out_html ul{
  	margin: 15px 0;
  }
  .out_html ol li{
  	list-style: decimal;
  	list-style-position: inside;
  }

  .out_html ul li{
  	list-style: disc;
  	list-style-position: inside;
  }
  .out_html a{
  	color: #3194d0;;
  }
  span.hljs-comment{
  	font-size: 13px;
  }

  code.hljs{
  	background-color: #f6f6f6;
  	border: 1px solid #ddd;
  	color: rgb(101, 123, 131);
  	padding: 1em;
  	line-height: 1.7;
  	font-size: 13px;
  }
  p>code{
    padding: 1px 3px;
    margin: 0 3px;
    background: #ddd;
    border: 1px solid #ccc;
    word-wrap: break-word;
    font-size: 14px;
    border-radius: 1px;
  }
</style>
