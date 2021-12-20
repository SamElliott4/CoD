<template>
  <span 
    class="box-outer" 
    :style="{
      borderColor: boxColor, 
      width: width+'px',
      height: width+'px'
    }"
    >
    <span 
      class="box-inner" 
      :class="{checked:isChecked}" 
      @click="clicked"
      :style="{
        background: boxColor,
        width: width+'px',
        height: width+'px'
      }"
      >
    </span>
  </span>
</template>

<script>
export default {
  name: 'ListBox',
  props: {
    isChecked: Boolean,
    value: Number,
    inactive: Boolean,
    width: Number
  },
 methods: {
    'clicked': function(){
      if(!this.inactive){
        this.$emit('box-clicked', this.value);
      }
    }
  },
  computed:{
    boxColor: function(){
      return this.$root.config.colorPrimary;
    }
  }
}
</script>

<style scoped>
  .box-outer{
    border-width: 2px;
    border-style: solid;
    margin: 1px;
    display:flex;
  }

  .box-inner{
    display:flex;
    position: relative;
    top: 0px;
    left: 0px;
    opacity: 0;
  }

  .checked{
    opacity: 1;
  }
</style>