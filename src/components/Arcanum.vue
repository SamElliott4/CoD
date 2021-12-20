<template>
  <div class="arcanum row">
    <label class="arcanum-label">{{name}}</label>
    <resizeable-text-input class="arcanum-description"
      :width="$root.config.descriptionMedium" 
      :content="current"
      >
    </resizeable-text-input>
    <dot-track
      class="row-item"
      :content="current"
      :maxDots="$root.constants.maxArcanum"
      :dotSize="arcanumDotSize"
    />
    
  </div>
</template>

<script>
import DotTrack from './DotTrack.vue';
import ResizeableTextInput from './ResizeableTextInput.vue';

export default {
  name: 'Arcanum',
  props:{
    name: String,
    content: Object
  },
  data: function(){
    return {
      current: this.content
    }
  },
  computed:{
    arcanumDotSize: function(){
      return this.$root.config.boxSizeLarge
    }
  },
  components: {
    'resizeable-text-input': ResizeableTextInput,
    'dot-track': DotTrack
  }
  
}
</script>

<style scoped>
  .arcanum{
    display:flex;
    align-items: center;
    padding-left:5px;
    padding-right:5px;
    justify-content: right;
  }

  .arcanum-label{
    display:flex;
    margin-right:auto;
  }

  .arcanum-description{
    margin-left:6px;
  }

  .dot-wrapper{
    display:flex; 
    margin-left:5px;
  }
</style>