<template lang="html">
  <div class="blank">
    <div class="blankPost" :style = '{ backgroundImage: "url( "+bac+" )" }'>
    </div>

  </div>


</template>

<script>
import bac from '../assets/1.png'

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
  transition: all 0.3s;
}
.blankPost{
  height: 550px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.noPreminder{
  text-align: center;
  line-height: 100px;
  font-size: 13px;
  color: #888;
}
</style>
