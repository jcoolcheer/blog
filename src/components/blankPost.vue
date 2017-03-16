<template lang="html">
  <div class="blank">
    <div class="blankPost" :style = '{ backgroundImage: "url( "+bac+" )" }'>
    </div>
    <p class='noPreminder'>
      这里空空如也，什么也没有...
    </p>
  </div>


</template>

<script>
import bac from '../assets/bp.png'

export default {
  data(){
    return {
      bac
    }
  }
}
</script>

<style lang="css" scoped>
.blank{
  padding: 50px 0;
}
.blankPost{
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.noPreminder{
  text-align: center;
  line-height: 100px;
  font-size: 13px;
  color: #bbb;
}
</style>
