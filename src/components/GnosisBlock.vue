<template>
  <div class="gnosis-block bracket">
    <h3>{{header}}</h3>
    <dot-track
      :content="current"
      :maxDots="$root.constants.maxGnosis"
      :minValue="$root.constants.minGnosis"
      :dotSize="gnosisDotSize"
    />
  </div>  
</template>

<script>
import DotTrack from './DotTrack.vue';

export default {
  name: 'GnosisBlock',
  props:{
    content: Object,
    header: String,
    description: String
  },
  data: function(){
    return {
      current: this.content
    };
  },
  computed:{
    gnosisDotSize: function(){
      return this.$root.config.boxSizeLarge;
    }
  },
  components:{
    'dot-track': DotTrack
  }
}
</script>

<style scoped>

</style>