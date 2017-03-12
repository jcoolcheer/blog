<template lang="html">

  <div class="fixedBg emotion" >
    <div class='bg'>
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
            <input type="text">
          </li>
          <li class='clearfix'>
            <p>
              今天心情怎样?
            </p>
            <ul class='clearfix'>
              <li class='iconfont'>
                &#xe64c
              </li>
              <li class='iconfont'>
                &#xe630
              </li>
              <li class='iconfont'>
                &#xe681
              </li>
            </ul>
          </li>
        </ul>
        <p class='generalBtnWrap emotionBtn'>
          <a href="javascript:;" class='generalBtn positiveBtn'>
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
        <div class='showZone'>
          <ul class='emotionList'>
            <li class='clearfix'>
              <div>
                <p>
                外边距合并的出现场景以及如何不让相邻元素外边距合
              </p>
              <p class='time'>
                2016-12-01
              </p>
              <i class='iconfont'>
                &#xe681
              </i>
              </div>
            </li>
            <li class='clearfix'>
              <div>
                <p>
                外边距合并的出现场景以及如何不让相邻元素外边距合
              </p>
              <p class='time'>
                2016-12-01
              </p>
              </div>
            </li>
            <li class='clearfix'>
              <div>
                <p>
                  外边距合并的出现场景以及如何不让相邻元素外边距合
                </p>
                <p class='time'>
                  2016-12-01
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
export default {
  data (){
    return {
      showPanel: true
    }
  }
}
</script>

<style lang="css">
  .emotion>.bg{
    position: fixed;
    top: -80px;
    left: -80px;
    right: -80px;
    bottom: -80px;
    z-index: 10;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(50px);
    background-image: url(http://tva3.sinaimg.cn/crop.0.0.748.748.180/6b111555jw8f1wsw89wrkj20ks0ksgmw.jpg);
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
  }
  .showZone{
    position: relative;
    width: 800px;
    margin: 0 auto;
    z-index: 999;
    text-align: center;
  }
  .emotionList{
    color: #fff;
    display: inline-block;
    width: 800px;
    text-align: left;
    position: relative;
  }
  .emotionList::before{
    content: '';
    display: block;
    width: 5px;
    height: 100%;
    border-radius: 15px;
    background-color: #eee;
    opacity: 0.5;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -20px;
  }
  .emotionList li{
    margin-bottom: 20px;
  }
  .emotionList li>div{
    background-color: #fff;
    width: 45%;
    border-radius: 3px;
    color: #4d4f4f;
    padding: 10px;
    position: relative;
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
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #fff;
    border-radius: 50%;
    font-size: 22px;
    top: 0;
  }
  .emotionList li:nth-child(odd)>div::before{
    left: -55px;
  }
  .emotionList li:nth-child(even)>div::before{
    right: -55px;
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
    border-color: transparent #fff transparent transparent;
  }
  .emotionList li:nth-child(even)>div::after{
    right: -12px;
    border-color: transparent transparent transparent #fff;
  }

  .emotionList li p.time{
    margin-top: 10px;
    font-size: 13px;
    color: #4d4f4f;
    opacity: 0.6;
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
  .generalBtnWrap.emotionBtn{
    display: block;
    margin-top: 30px;
  }
  /*newEmotion*/
</style>
