<template>
  <div class="flex-row flex-center">
    <label class="attribute-label">{{name}}</label>
    <dot-track 
      class="flex-row float-right" 
      :maxDots="$root.constants.maxAttribute" 
      :minValue="$root.constants.minAttribute" 
      :content="content"
      :dotSize="attributeDotSize"
    />
  </div>
</template>

<script>
import DotTrack from './DotTrack.vue';

export default {
  name: 'Attribute',
  props: {
    name: String,
    content: Object
  },
  data: function() {
    return {
      current: this.content
    }
  },
  computed:{
    attributeDotSize:function(){
      return this.$root.config.boxSizeLarge;
    }
  },
  components: {
    'dot-track': DotTrack
  }

}
</script>

<style scoped>
  .attribute{
    display:flex;
  }

  .attribute-label{
    display:flex;
    margin-right: 10px;
  }

  .dot-wrapper{
    display:flex;
    margin-left:auto;  
  }
</style>