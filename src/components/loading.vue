<template lang="html">
  <div class="loadingWraper">
    <div class="loadingMiddle">
      <div class='zone'>
        <div class='line'>
        </div>
        <div class='baseTriangle'>
        </div>
        <div class='leftBall ball'>
        </div>
        <div class='rightBall ball'>
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
.loadingWraper{
  position: fixed;
  left: 0;
  width: 100%;
  top:0;
  height: 100%;
  background-color: #fff;
  display: table;
}
.loadingMiddle{
  display: table-cell;
  vertical-align: middle;
}
.zone{
  width:90px;
  margin: 0 auto;
  text-align: center;
  position: relative;
}
div.baseTriangle{
  border-width: 20px;
  border-style:solid;
  width: 0;
  height: 0;
  display: inline-block;
  border-color: transparent transparent #4d4f4f transparent;
  position: relative;
}
div.baseTriangle::after{
  content: '';
  display: block;
  position: absolute;
  bottom: -17.4px;
  left: -14px;
  width: 0;
  height: 0;
  border-width: 14px;
  border-style:solid;
  border-color: transparent transparent #fff transparent;
}
.ball{
  width: 20px;
  height: 20px;
  border: 2px solid #4d4f4f;
  border-radius: 50%;
  position: absolute;
  top: 5px;
}
.leftBall{
  left: 0;
  transform: translateY(-60px);
  animation: rBall 0.6s -0.6s ease-out infinite;
  animation-direction:alternate;
}
.rightBall{
  right: 0;
  transform: translateY(5px);
  animation: rBall 0.6s ease-out infinite;
  animation-direction:alternate;
}
@keyframes rBall{
  0%{
    transform:translateY(5px);
  }
  20%{
    transform: translateY(5px);
  }
  40%{
    transform: translateY(5px);
  }
  60%{
    transform: translateY(-40px);
  }
  100%{
    transform: translateY(-60px);
  }
}
@keyframes line{
  0%{
    transform: rotate(18deg);
  }
  40%{
     transform: rotate(18deg);
  }
  60%{
    transform: rotate(-18deg);
  }
  100%{
    transform: rotate(-18deg);
  }
}
.line{
  width: 100%;
  height: 2px;
  background: #4d4f4f;
  position: absolute;
  top: 42%;
  transform-origin: center;
  transform: rotate(18deg);
   animation: line 0.6s ease-in  infinite;
  animation-direction:alternate;
}
</style>
