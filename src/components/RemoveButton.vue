<template>
  <span 
    class="close-button-outer"
    :style="{
      height:width,
      width: width,
      borderWidth: border ? '1px' : '0px',
      borderColor: $root.config.textColor
    }"
  >
    <img :src="buttonImage"/> 
  </span>

</template>

<script>
import lightModeButton from '../assets/images/closeButtonLight.png';
import darkModeButton from '../assets/images/closeButtonDark.png';

export default {
  name: 'RemoveButton',
  props:{
    width: String,
    border:Boolean
  },
  data:function(){
    return {
      buttonImage: this.$root.config.mode == "light" ? lightModeButton : darkModeButton
    }
  }
}
</script>

<style scoped>

  .close-button-outer{
    display:flex;
    border-radius: 50%;
    border: 0px;
    border-style: solid;
    cursor:pointer;
  }

</style>