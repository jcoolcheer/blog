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

              <slot name='positiveBtn' >

              </slot>
              <slot name='negativeBtn' >

              </slot>
            </div>
          </div>
      </div>
    </transition>
</template>

<script>
export default {
  props: {
    test: String
  }
}
</script>

<style lang="css">
  .confirm{
    position: fixed;
    width: 600px;
    background-color: #fff;
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
    animation: noneConfirm 0.3s ease-out;
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
    font-size: 1rem;
    color: #999;
    margin: 0.8rem 0;
  }
  .confirmBtn{
    margin-top: 10px;
    text-align: center;
  }
  .confirmBtn a{
    display: inline-block;
    border-radius: 3px;
    font-size: 13px;
    margin: 0 20px;
    color: #fff;
  }

</style>
