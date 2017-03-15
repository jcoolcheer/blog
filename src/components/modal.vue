<template lang="html">
  <transition name = 'modal'>
    <div class="modal">
      <slot name = 'modalContent'>
      </slot>
    </div>
  </transition>

</template>

<script>
export default {
}
</script>

<style lang="css">
  .modal{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
  .modal-enter-active{
    animation: modalIn 0.2s ease-out;

  }
  .modal-leave-active{
    animation: modalOut 0.2s ease-out;
  }
  @keyframes modalIn {
    0%{
      background-color: rgba(0,0,0,0);
    }
    100%{
      background-color: rgba(0,0,0,0.5);
    }
  }
  @keyframes modalOut {
    0%{
      background-color: rgba(0,0,0,1);
    }
    100%{
      background-color: rgba(0,0,0,0);
    }
  }
</style>
