<template lang="html">
  <div class="newPost">
    <div class="edit_zone">
      <header>
        <h3>
          这是一篇新闻的标题啊十分大方
        </h3>
      </header>
      <div class="show_content">
        <section class='content inner_md'>
          <textarea v-model = 'md_in'>
          </textarea>
        </section>
        <section class='content out_html' v-html = 'out_html' v-highlight>
https://segmentfault.com/a/1190000008188461
        </section>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import marked from 'marked'
// var converter = new showdown.Converter()
import Highlight from '../highlight.js'
console.log(Highlight, 'kkkk')
Vue.use(Highlight)

export default {
  data () {
    return {
      md_in: '',
      out_html: ''
    }
  },
  computed: {
    // out_html: () => {
    //   console.log(1)
    //   console.log(converter)
    //   return '<a>' + this.md_in + '</a>'
    //
    // }
  },
  watch: {
    'md_in': function () {
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
    margin-top: 10vh;
  }
  header,.show_content{
    flex-grow: 1;
  }

  header h3{
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 1px solid #f2f2f2;
    text-align: center;
  }
  section.content{
    float: left;
    width: 50%;
    box-sizing: border-box;
    border: 1px solid red;
  }

</style>
