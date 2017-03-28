<template lang="html">

  <div class="fixedBg emotion" >
    <div class='bg' :style = '{ backgroundImage: "url("+bgGIF+")" }'>
    </div>
    <div class='fixedBg black' v-if = 'showPanel' @click = 'showPanel = false'>
    </div>
    <transition name = 'newEmotion'>
      <div class='newEmotion box-shadow' v-if = 'showPanel'>
        <ul class='emotionConfig'>
          <li class='clearfix'>
            <p>
              附上一句话吧
            </p>
            <input type="text" v-model.trim = 'content' max-length = '100'>
          </li>
          <li class='clearfix'>
            <p>
              今天心情怎样?
            </p>
            <ul class='clearfix'>
              <li v-for = '( item, index) in emojiEmotions' @click = 'setEmotion(index,item.alias)' :class = '[ e === index ? "checked" : "" ]'>
                <img :src="item.type" alt="">
              </li>
            </ul>
          </li>
        </ul>
        <p class='generalBtnWrap emotionBtn'>
          <a href="javascript:;" class='generalBtn positiveBtn' @click = 'postEmotion'>
            SUBMIT
          </a>
          <a href="javascript:;" class='generalBtn negativeBtn' @click = 'showPanel = false'>
            CANCEL
          </a>
        </p>
      </div>
    </transition>
    <div class = "emotionWraper" >
      <div class='emotionContent'>
        <p class='emotionImg'>
          <router-link tag='img' src="http://tva3.sinaimg.cn/crop.0.0.748.748.180/6b111555jw8f1wsw89wrkj20ks0ksgmw.jpg" alt="" class='shadow' to = '/' title = '返回主页'/>
        </p>
        <div class='showZone'>
          <ul class='emotionList'>
            <li class='clearfix happy' v-if = '!emotions.length'>
              <div class = 'shadow' >
                <p>
                难道这就是青春吗？
              </p>
              <p class='time'>
                 嘻嘻嘻嘻嘻
                <i class = 'iconfont deleteEmotion' title= '删除' @click.stop = 'deleteEmotion(index,item.id)'>
                  &#xe63c`
                </i>
              </p>
              </div>
            </li>
            <li class='clearfix' v-if = 'emotions.length' v-for = '(item,index) in emotions' :class = '[ item.emotion === 3 ? "angry" : "",item.emotion === 2 ? "blushing" : "" , item.emotion === 1 ? "happy" : "" , item.emotion === 0 ? "laughing" : "" , item.emotion === -1 ? "crying" : "" ]' >
              <div class = 'shadow' @mouseover = 'setBG(item.emotion)'>
                <p>
                {{ item.content }}
              </p>
              <p class='time'>
                {{ item.release_time }}
                <i class = 'iconfont deleteEmotion' title= '删除' @click.stop = 'deleteEmotion(index,item.id)'>
                  &#xe63c`
                </i>
              </p>
              </div>
            </li>
          </ul>
        </div>
        <p class='addEmotion'>
          <a href="javascript:;" @click.stop = 'showPanel = !showPanel'>
            <i class='iconfont'>
              &#xe7f7
            </i>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import angry from '../assets/emoji/angry-face.jpg'
import angryG from '../assets/emotionimg/thunder.gif'
import blushing from '../assets/emoji/blushing-emoji-clipart.jpg'
import blushingG from '../assets/emotionimg/cloudy.gif'
import happy from '../assets/emoji/emoji-happy-.jpg'
import happyG from '../assets/emotionimg/sun.gif'
import laughing from '../assets/emoji/laughing-emoji-clipart.jpg'
import laughingG from '../assets/emotionimg/jiguang.gif'
import crying from '../assets/emoji/loudly-crying-face.jpg'
import cryingG from '../assets/emotionimg/rain2.gif'
import defaultG from '../assets/emotionimg/defaultzee.gif'
import { baseUrl } from '../baseUrl'
export default {
  created () {
    this.getEmotions()
  },
  data (){
    return {
      content: '',
      showPanel: false,
      angry,
      blushing,
      happy,
      laughing,
      crying,
      angryG,
      blushingG,
      happyG,
      laughingG,
      cryingG,
      defaultG,
      bgGIF: defaultG,
      emojiEmotions: [{ type: angry, alias: 3 },{ type: blushing, alias: 2 },{ type: happy, alias: 1 },{ type: laughing, alias: 0},{ type: crying, alias: -1}],
      e: -1,// e means emotion,
      checkedEmotion: -2,
      emotions: [],
    }
  },
  methods: {
    setEmotion: function(index,emotion){
      this.e = index
      this.checkedEmotion = emotion
    },
    getEmotions: function(){
      this.$http.get(baseUrl+'api/v1/tip/').then(
        function(data){
          this.emotions = typeof(data.body) === 'string' ? JSON.parse(data.body) : data.body
          this.setGIF()
        },
        function(err){
          //
        }
      )
    },
    postEmotion: function(){
      const config = JSON.stringify({
        content: this.content,
        emotion: this.checkedEmotion
      })
      this.$http.post(baseUrl+'api/v1/tip/',config).then(
        function(data){
          const newEmotion = {
            content: this.content,
            id: data.body-0,
            release_time: '刚刚',
            emotion: this.checkedEmotion
          }
          this.emotions.unshift(newEmotion)
          this.showPanel = false
        },
        function(err){
          this.reset()
        }
      )
    },
    setGIF: function(){
      const bgINDEX = this.emotions[0] && this.emotions[0].emotion
      this.setBG(bgINDEX)
    },
    deleteEmotion: function(index,id){
      this.$http.delete(baseUrl+'api/v1/tip/'+id).then(
        function(){
          this.emotions.splice(index,1)
        }
      )
    },
    reset: function(){
      this.checkedEmotion = -2
      this.e  = -1
      this.content = ''
    },
    setBG:function(e){
      switch (e){
        case -1:
        this.bgGIF = this.cryingG
        break;
        case 0:
        this.bgGIF = this.laughingG
        break;
        case 1:
        this.bgGIF = this.happyG
        break;
        case 2:
        this.bgGIF = this.blushingG
        break;
        case 3:
        this.bgGIF = this.angryG
        break;
        default:
        this.bgGIF = this.defaultG
      }
    }
  },
  watch: {
    'showPanel': function(n,o){
      !n && this.reset()
    },
    'emotions': {
      handler: function(){
        this.setGIF()
      },
      deep: true
    }
  }
}
</script>

<style lang="css">
  .shadow{
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
  }
  .emotion>.bg{
    position: fixed;
    top: -80px;
    left: -80px;
    right: -80px;
    bottom: -80px;
    z-index: 10;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(10px);
    transition: all 0.3s;
  }
  .fixedBg.black{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
  }
  .emotion{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  .emotionWraper{
    position: fixed;
    left: 0;
    top: 0;
    display: table;
    width: 100%;
    height: 100%;
    z-index: 99;
  }

  .emotionWraper.blur{
    filter: blur(50px);
  }
  .emotionContent{
    display: table-cell;
    vertical-align: middle;
    padding: 50px 0;
  }
  .showZone{
    position: relative;
    width: 800px;
    margin: 25px auto;
    margin-bottom: 15px;
    z-index: 999;
    text-align: center;
  }
  .emotionImg{
    text-align: center;
  }
  .emotionImg>img{
    width: 100px;
    border-radius: 50%;
    border: 3px solid #fff;
    cursor: pointer;
  }
  .emotionList{
    color: #fff;
    display: inline-block;
    width: 800px;
    max-height: 60vh;
    overflow: auto;
    text-align: left;
    position: relative;
  }

  .emotionList li{
    margin-bottom: 20px;
    position: relative;
  }
  .emotionList li::before{
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: calc( 100% + 20px );
    background-color: #eee;
    opacity: 0.3;
    left: 50%;
    top: 0%;
    transform: translateX(-50%);
  }
  .emotionList li>div{
    background-color: rgba(255,255,255,0.5);
    width: 45%;
    border-radius: 3px;
    color: #4d4f4f;
    padding: 10px;
    position: relative;
    transition: all 0.2s;
    cursor: pointer;
  }
  .emotionList li:nth-child(even)>div{
    float: left;
    text-align: right;
  }
  .emotionList li:nth-child(odd)>div{
    float: right;
  }
  .emotionList li>div::before{
    content: '';
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    line-height: 30px;
    text-align: center;
    background-color: #888;
    border-radius: 50%;
    font-size: 22px;
    top: 0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
  }
  .emotionList li.angry>div::before{
    background-color: #ff403a;
  }
  .emotionList li.blushing>div::before{
    background-color: #e8e363;
  }
  .emotionList li.crying div::before{
    background-color: #0175be;
  }
  .emotionList li.laughing div::before{
    background-color: #9966cc;
  }
  .emotionList li.happy div::before{
    background-color: #c7ffec;
  }
  .emotionList li:nth-child(odd)>div::before,.emotionList li:nth-child(odd)>div>img{
    left: -49px;
  }
  .emotionList li:nth-child(even)>div::before,.emotionList li:nth-child(even)>div>img{
    right: -49px;
  }
  .emotionList li>div::after{
    content: '';
    display: block;
    position: absolute;
    border-width: 6px;
    border-style: solid;
    top: 8px;
  }
  .emotionList li:nth-child(odd)>div::after{
    left: -12px;
    border-color: transparent rgba(255,255,255,0.5) transparent transparent;
  }
  .emotionList li:nth-child(even)>div::after{
    right: -12px;
    border-color: transparent transparent transparent rgba(255,255,255,0.5);
  }
  .emotionList li p{
    font-size: 15px;
  }
  .emotionList li p:first-child{
    line-height: 30px;
  }
  .emotionList li p img{
    max-height: 50px;
  }
  .emotionList li:nth-child(odd) p img{
    float: right;
  }
  .emotionList li:nth-child(even) p img{
    float: left;
  }
  .emotionList li p.time{
    margin-top: 10px;
    font-size: 13px;
    color: #888;
  }
  .emotionList li p.time>i{
    margin-left: 10px;
    cursor: pointer;
  }
  .emotionList li p.time>i:hover{
    color: #f44336;
  }
  p.addEmotion{
    text-align: center;
  }
  p.addEmotion>a{
    display: inline-block;
    padding: 5px 10px;
    color: #fff;
  }

  p.addEmotion>a>i{
    font-size: 30px;
    color: #eee;
  }
  p.addEmotion>a>i:hover{
    color: #fff;
  }
  /*newEmotion*/
  .newEmotion{
    position: fixed;
    top: 0;
    width: 600px;
    background-color: #fff;
    left: 50%;
    z-index: 100;
    transform: translateX(-50%);
    border-radius: 0 0 4px 4px;
  }
  .newEmotion-enter-active{
    animation: panelIn 0.15s ease-out;
  }
  .newEmotion-leave-active{
    animation: panelOut 0.2s ease-out;
  }
  @keyframes panelIn{
    0%{
      opacity: 0;
      transform: translateY(-100%) translateX(-50%);
    }
    100%{
      opacity: 1;
      transform: translateY(0) translateX(-50%);
    }
  }
  @keyframes panelOut{
    0%{
      opacity: 1;
      transform: translateY(0) translateX(-50%);
    }
    100%{
      opacity: 0;
      transform: translateY(-100%) translateX(-50%);
    }
  }
  .newEmotion{
    padding: 20px;
  }
  .emotionConfig{
    font-size: 14px;
    color: #4d4f4f;
  }
  .emotionConfig>li{
    height: 30px;
    line-height: 30px;
  }
  .emotionConfig>li:first-child{
    margin-bottom: 25px;
  }
  .emotionConfig p{
    width: 25%;
    float: left;
  }
  .emotionConfig input{
    display: block;
    width: 75%;
    height: 30px;
    border: none;
    outline: none;
    padding: 0 10px;
    letter-spacing: 1px ;
    font-size: inherit;
    border: 1px solid #eee;
    border-radius: 3px;
  }
  .emotionConfig ul li{
    float: left;
    width: 5%;
    margin-right: 50px;
    font-size: 25px;
    cursor: pointer;
  }
  .emotionConfig ul li img{
    width: 30px;
    opacity: 0.5;
  }
  .emotionConfig ul li.checked img{
    opacity: 1;
  }
  .emotionConfig ul li:hover img{
    opacity: 1;
  }
  .generalBtnWrap.emotionBtn{
    display: block;
    margin-top: 30px;
  }
  /*newEmotion*/
</style>
