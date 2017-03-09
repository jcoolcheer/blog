<template lang="html">
  <transition name='showConfirm'>
    <div class="confirm box-shadow">
        <div class="exitConfim">
          <header>
            <slot name='confirmTitle'>

            </slot>
            <slot name='warning'>

            </slot>
          </header>
          <div class="confirmBtn" >

            <slot  name='positiveBtn' >

            </slot>
            <slot name='negativeBtn'>

            </slot>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .confirm{
    position: fixed;
    width: 600px;
    background-color: #4d4f4f;
    color: #fff;
    border-radius:  0 0 3px 3px;
    padding: 15px;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
  }
  .showConfirm-enter-active{
    animation: showConfirm 0.2s ease-out;
  }
  .showConfirm-leave-active{
    animation: noneConfirm 0.5s ease-out;
  }
  @keyframes showConfirm {
    0%{
      top: -100%;
    }
    100%{
      top: 0;
    }
  }
  @keyframes noneConfirm {
    0%{
      top: 0;
      opacity: 1;
    }
    100%{
      top: -100%;
      opacity: 0;
    }
  }
  header{
    text-align: center;
  }
  header>h3{
    font-size: 22.5px;
    font-weight: normal;
  }
  header>p{
    font-size: 13px;
    color: #999;
    margin: 10px 0;
  }
  .confirmBtn{
    margin-top: 10px;
    text-align: center;
  }
  .confirmBtn a{
    display: inline-block;
    line-height: 1;
    padding: 5px 15px;
    border-radius: 3px;
    font-size: 13px;
    margin: 0 20px;
    color: #fff;
  }
  .confirmBtn a:first-child{
    background-color: #00D998;

  }
  .confirmBtn a:last-child{
    background-color: #888;
  }
</style>
