<template>
  <span
    class="expand-button-border"
    :style="{
      width: width,
      height: width,

    }"
  >
    <img :src="buttonImage"/>
  </span>  
</template>

<script>
import lightModeButton from '../assets/images/expandLight.png';
import darkModeButton from '../assets/images/expandDark.png';

export default {
  name: 'ExpandButton',
  props:{
    width: String
  },
  data: function(){
    return{
      buttonImage: this.$root.config.mode == "light" ? lightModeButton : darkModeButton
    }
  }
}
</script>

<style scoped>
  .expand-button-border{
    display:flex;
    cursor:pointer;
  }
</style>