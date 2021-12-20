<template>
  <div class="row flex-center">
    <label class="float-left">{{label}}</label>
    <dot-track
      class="row-item"
      :content="current"
      :maxDots="$root.constants.maxBeats"
      :dotSize="beatDotSize"
    />
  </div>
</template>

<script>
import DotTrack from './DotTrack.vue';
export default {
  name: 'BeatRow',
  props:{
    label: String,
    content: Object
  },
  data:function(){
    return {
      current: this.content
    }
  },
  computed:{
    beatDotSize: function(){
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