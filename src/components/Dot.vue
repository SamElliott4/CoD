<template>
  <span class="dot-outer" 
  :style="{
    borderColor:dotColor,
    width: dotSize+'px',
    height: dotSize+'px'
  }
  ">
    <span 
      class="dot-inner" 
      :class="{checked:isChecked}" 
      @click="clicked"
      :style="{
        backgroundColor:dotColor,
        width: dotSize+2+'px',
        height: dotSize+2+'px'
      }"
      >
    </span>
  </span>
</template>

<script>
export default {
  name: 'Dot',
  props: {
    value: Number,
    isChecked: Boolean,
    dotSize: Number
  },
  methods: {
    'clicked': function(){
      this.$emit('dot-clicked', this.value);
    },
  },
  computed:{
    dotColor: function(){
      return this.$root.config.colorPrimary
    }
  }
}
</script>

<style scoped>
  .dot-outer{
    position:relative;
    border-radius: 50%;
    border: 2px solid;
    margin: 1px;
    display:flex;
  }

  .dot-inner{
    display:flex;
    border-radius:50%;
    position: absolute;
    top:-1px;
    left:-1px;
    opacity: 0;
  }

  .checked{
    opacity: 1;
  }
</style>
