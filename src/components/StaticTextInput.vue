<template>
  <input 
    class="description-text"
    v-model="current.value"
    :style="{
      width: width,
      height: $root.config.textSizeMed+3+'px',
      fontSize: $root.config.textSizeMed+'px',
      lineHeight:$root.config.textSizeMed+'px',
      backgroundColor:$root.config.inputBackgroundColor,
      borderColor:$root.config.textColor,
      borderRightColor:$root.config.textColor+'0'
    }"
  />
</template>

<script>
export default {
  name: 'StaticTextInput',
  props:{
    width: String,
    content: Object
  },
  data: function(){
    return{
      current: this.content
    }
  },
}
</script>

<style scoped>
  input {
    resize:none;
    overflow:hidden;
  }

  .description-text{
    border-top: 0px;
    border-left: 0px;
    border-bottom: 1px;
    border-right: 1px;
    border-style: solid;
    resize:none;
    overflow:hidden;  
    padding-left:3px;
  }

  .description-text:hover{
    border-top: 0px;
    border-left: 0px;
    border-bottom: 1px;
    border-right: 1px;
    border-style: solid;
  }

  .description-text:focus{
    border-top: 1px;
    border-left: 1px;
    border-bottom: 0px;
    border-right: 0px;
    border-style: solid;
  }
</style>