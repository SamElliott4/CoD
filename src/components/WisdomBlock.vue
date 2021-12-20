<template>
  <div class="wisdom-block bracket">
    <h3>{{header}}</h3>
    <dot-track
      :content="current"
      :maxDots="$root.constants.maxWisdom"
      :dotSize="wisdomDotSize"
    />
  </div>  
</template>

<script>
import DotTrack from './DotTrack.vue';
export default {
  name: 'WisdomBlock',
  props: {
    content: Object,
    header: String,
    description: String
  },
  data: function(){
    return {
      current: this.content
    };
  },
  methods: {
    setValue(value){
      this.current.value = this.current.value == value ? value-1 : value;
    }
  },
  computed:{
    wisdomDotSize: function(){
      return this.$root.config.boxSizeLarge;
    }
  },
  components: {
    'dot-track': DotTrack
  }
}
</script>

<style scoped>
  .dot-wrapper{
    display:flex
  }
</style>