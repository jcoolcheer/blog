<template lang="html">
  <div class="newPost" :style='{backgroundColor: color}' @click.stop = 'showConfirm = false'>

    <modal v-if ='showConfirm'>
      <confirmPanel @click.stop slot = 'modalContent' :test = 'datas'>
        <h3 slot ='confirmTitle'>
          是否保存草稿？
        </h3>
        <p slot = 'warning'>
          您还没有发布修改后的文章
        </p>
        <a href="javascript:;" slot = 'positiveBtn' @click = 'saveAs' class='generalBtn positiveBtn'>
          确认
        </a>
        <a href="javascript:;" slot = 'negativeBtn' @click = 'noSave' class='generalBtn negativeBtn'>
          取消
        </a>
      </confirmPanel>
    </modal>

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
          <textarea v-model = 'md_in' resize='none' placeholder="输入文章内容..." ref ='mdIN'>
          </textarea>
        </section>
        <section class='content out_html' v-html = 'out_html' v-highlight ref = 'outHTML'>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import marked from 'marked'
import confirmPanel from './confirm'
import modal from './modal'
import Highlight from '../highlight.js'
import { baseUrl } from '../baseUrl'

Vue.use(Highlight)

export default {
  created (){
    this.getPost()
    this.sameScroll()
  },
  data () {
    return {
      md_in: localStorage.postTemp || '' ,
      out_html: '',
      title: localStorage.titleTemp || '',
      color: '',
      showConfirm: false,
      is_new: true,
      pID: this.$route.params.pID,
      clock: null,
      datas: '急急急'
    }
  },
  components:{
    confirmPanel,
    modal
  },
  methods: {
    getPost: function(){
      this.$http.get(baseUrl+'api/v1/article/'+this.pID).then(
        function(data){
          this.title = data.body.title
          this.md_in = data.body.content
          this.out_html = marked(this.md_in)
        }
      )
    },
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
      if(!this.title || !this.out_html){
        return
      }
      const obj = JSON.stringify({
        title: this.title,
        content: this.md_in
      })
      this.$http.patch(baseUrl+'api/v1/article/'+this.pID,obj).then(
        function(){
          this.$router.push('/')
        }
      )
    },
    sameScroll: function(){
      let vm = this,
          md_in
      this.$nextTick(function(){
        const md_in= this.$refs.mdIN
        md_in.onscroll = function(){
          vm.clock && clearTimeout(vm.clock)
          vm.clock = setTimeout(function(){
            vm.$refs.outHTML.scrollTop = md_in.scrollTop
          },100)
        }
      })
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

</style>
