<template>
  <span 
    class="add-button-border" 
    :style="{
      height:width, 
      width:width,
      borderColor: $root.config.colorPrimary,
      borderWidth:border? '1px' : '0px',
      }"
  > 
    <img :src="buttonImage" />
  </span>
</template>

<script>
import lightModeButton from '../assets/images/addButtonLight.png';
import darkModeButton from '../assets/images/addButtonDark.png';

export default {
  name: "AddButton",
  props:{
    width: String,
    border: Boolean
  },
  data:function(){
    return {
      buttonImage: this.$root.config.mode == "light" ? lightModeButton : darkModeButton
    }
  }
}
</script>

<style scoped>
  .add-button-border {
    display:flex;
    border-radius: 50%;
    border-style: solid;
    cursor:pointer;
    padding:1px;
  }


</style>