<template lang="html">

  <div class="emotion">
    <div class='bg'>
    </div>
    <div class='emotionWraper'>
      <div class='emotionContent'>
        <div class='showZone'>
          <ul class='emotionList'>
            <li>
              <p>
                外边距合并的出现场景以及如何不让相邻元素外边距合
              </p>
              <p class='time'>
                2016-12-01
              </p>
            </li>
            <li>
              <p>
                外边距合并的出现场景以及如何不让相邻元素外边距合
              </p>
              <p class='time'>
                2016-12-01
              </p>
            </li>
            <li>
              <p>
                外边距合并的出现场景以及如何不让相邻元素外边距合
              </p>
              <p class='time'>
                2016-12-01
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  .emotionContent{
    display: table-cell;
    vertical-align: middle;
  }
  .showZone{
    position: relative;
    width: 600px;
    margin: 0 auto;
    z-index: 999;
    text-align: center;
  }
  .emotionList{
    color: #fff;
    display: inline-block;
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
    left: -30px;
    top: -20px;
  }
  .emotionList li{
    margin-bottom: 50px;
    position: relative;
    position: relative;
    background-color: #fff;
    border-radius: 3px;
    color: #4d4f4f;
    padding: 15px;
  }
  .emotionList li::before{
    content: '';
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
    left: -43px;
    top: 0;
  }
  .emotionList li::after{
    content: '';
    display: block;
    position: absolute;
    border-width: 6px;
    border-style: solid;
    border-color: transparent #fff transparent transparent;
    left: -12px;
    top: 8px;
  }


  .emotionList li p.time{
    margin-top: 10px;
    font-size: 13px;
    color: #4d4f4f;
    opacity: 0.6;
  }
</style>
