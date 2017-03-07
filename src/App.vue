<template>
  <div class="container box">
    <div class='blog_wraper clearfix'>

      <section class='side info_side box-shadow'>
        <header class='info'>
          <div class = 'img_bg user_headimg'>
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
            <li>
              <h4>
                推荐给年轻人的15个高性价比时尚品牌（上）
              </h4>
              <p>
                Posted at 2017-06-22
              </p>
            </li>
            <li>
              <h4>
                利用IFTTT每天通过邮箱接收一首诗
              </h4>
              <p>
                Posted at 2017-06-22
              </p>
            </li>
            <li>
              <h4>
                一个被刘淼老师自称为"浆糊"的私密群是怎样的一个群？
              </h4>
              <p>
                Posted at 2017-06-22
              </p>
            </li>
            <li>
              <h4>
               《这些职场基本功，你都掌握了吗？
              </h4>
              <p>
                Posted at 2017-06-22
              </p>
            </li>
            <li>
              <h4>
                不运动的借口，这三个高居榜首。
              </h4>
              <p>
                Posted at 2017-06-22
              </p>
            </li>
            <li>
              <h4>
               《楚门的世界》：你给的世界，我不稀罕
              </h4>
              <p>
                Posted at 2017-06-22
              </p>
            </li>
            <li>
              <h4>
                连学英语两个月，今天被吓一跳
              </h4>
              <p>
                Posted at 2017-06-22
              </p>
            </li>
            <li>
              <h4>
               皮肤科医生说|关于痘痘你应该知道这些
              </h4>
              <p>
                Posted at 2017-06-22
              </p>
            </li>
            <li>
              <h4>
                继续免费给我的朋友们画石头画（自学石头画打卡第25天
              </h4>
              <p>
                Posted at 2017-06-22
              </p>
            </li>
          </ul>
          <div class='new_post'>
            <div class='mask bottom'>
            </div>
            <a href='javascript:;' class="box-shadow">
              NEW POST
            </a>
          </div>
        </div>
      </section>
      <section class='side content_side'>
      <header class='blog'>
        <div class='img_bg blog_img box-shadow'>
        </div>
        <div class='blog_info'>
          <div class='likes'>
            <p>
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
              漫威电视剧《#异人族#》的前两集剧场版确定于9月1日在 IMAX 院线上映，持续两周。 ​​​​
            </h1>
          </div>
        </div>
      </header>
      <article>
        <section class='general '>
          我不知道我读过这5本小说之后，是变得更好抑或更坏？但，读过这5本小说之后，我的人生或多或少发生了一些改变。
        </section>
        <p>

        虽然我的身份证是1991年，但是却是虚假的，其实，我是1990年出生的，所以，我27岁了。但是，我从来不会告诉别人。
        </p>

        <p>
        你看，人到了27岁，连一岁都必须瞒着，小时候恨不得多报几岁，长大后却恨不得年年都是18岁。
        </p>

        <p>
        我今年27岁，刚刚毕业一年，身边却都是93年左右的同事。幼时，当别人都背起书包上学的时候，我家里穷，连饭都吃不上，所以没办法上学，一拖再拖，就到了8岁才读书，我记得很清楚，父亲用两块布合成了一个小书包，我屁颠屁颠地去上学了。后来每到交学费，我爸都带着我去找政府部门下跪，求政府领导看在我家是贫困户的份上，免除一部分学费，未果，又去跟校长下跪，求校长宽限一段时间。
        </p>
      </article>
      </section>
    </div>
    <div class='features'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang = 'css'>
  html,body,div,p,ul,li,p,h1,h3,h4,h5,input{
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
    background-color: #f5f5f6;
    display: none;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #000;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 20px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #f5f5f6;
  }
  /*common css class*/
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
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
  }
  h5.blogger_name{
    font-size: 20px;
    color: #efefef;
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
  }
  .blog_img{
    background-size: cover;
    background-position: bottom center;
    height: 220px;
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488704194349&di=59fb39d1199462f16be7de44f049682c&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F0b73ff9a3db9377d07f31964984fde836813fa33.jpg);
  }
  .likes{
    color: #fff;
    height: 50px;
  }
  .likes>p{
    height: 80px;
    padding: 0 50px;
    line-height: 80px;
  }
  .likes>p>span{
    margin: 0 20px;
    color: #ccc;
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
  .general{
    margin: 10px 0;
    margin-bottom: 20px;
    padding: 15px;
    line-height: 2;
    background-color: #f5f5f6;
    border-radius: 0 5px 5px 0;
    border-left: 6px solid #4d4f4f;
    color: #4d4f4f;
  }
  article p{
    margin-bottom: 20px;
    line-height: 1.8;
  }
  /*content_side_css*/
</style>
