<template>
  <div class="container">
    <div class='blog_wraper clearfix'>
      <section class='side info_side box-shadow'>
        <header>
          <div class = 'user_headimg'>
          </div>
          <h5 class='ellipsis blogger_name'>
            贾志良Zee
          </h5>
          <p class='ellipsis emotion'>
            清澈高远，大气磅礴
          </p>
        </header>
      </section>
      <section class='side list_side'>
        
      </section>
      <section class='side content_side'>
        
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang = 'less'>
  html,body,div,p,ul,li,p,h5{
    margin: 0;
    padding: 0;
  }
  html,body,.container,.blog_wraper{
    height: 100%;
  }
  /*common css class*/
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
  /*common css class*/
  .side{
    float: left;
    height: 100%;
  }

  .info_side{
    width: 16.66%;
    background-color: #4d4f4f;
    border-radius: 0 4px 4px 0;
  }
  .list_side{
    width: 33.22%;
  }
  .content_side{
    width: 50.12%;
  }
  header{
    text-align: center;
    padding: 0 20px;
  }
  .user_headimg{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #858585;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(http://tva3.sinaimg.cn/crop.0.0.748.748.180/6b111555jw8f1wsw89wrkj20ks0ksgmw.jpg);
    margin: 40px auto;
    margin-bottom: 10px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
  }
  h5.blogger_name{
    font-size: 20px;
    color: #e5e5e6;
  }
  p.emotion{
    font-size: 14px;
    line-height: 40px;
    color: #aaa;
/*    font-style: italic;*/
  }
</style>
