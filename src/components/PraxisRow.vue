<template>
<div class="flex-row flex-center">
  <expand-button 
    class="row-item"
    :width="$root.config.buttonSizeSmall"
  />
  <text-input
    class="row-item"
    :content="current.arcanum"
    :width="$root.config.descriptionShort" 
    :fontSize="$root.config.textSizeMed"
    :readonly="true"
  />
  <dot-track
    class="row-item padded"
    :content="current.level"
    :maxDots="$root.constants.maxArcanum"
    :minValue="0"
    :dotSize="praxisDotSize"
  />
  <text-input 
    class="row-item"
    :content="current.spell" 
    :width="$root.config.descriptionLong" 
    :fontSize="$root.config.textSizeMed"
    :readonly="true"  
  />

</div>
  
</template>

<script>
import TextInput from './TextInput.vue';
import ExpandButton from './ExpandButton.vue';
import DotTrack from './DotTrack.vue';

export default {
  name: 'praxis-row',
  props: {
    content: Object,
  },
  data:function(){
    return {
      current: this.content
    }
  },
  computed:{
    praxisDotSize: function(){
      return this.$root.config.boxSizeLarge;
    }
  },
  components:{
    'text-input': TextInput,
    'expand-button': ExpandButton,
    'dot-track': DotTrack
  }
}
</script>


<style scoped>

</style>