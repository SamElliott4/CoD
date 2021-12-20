<template>
  <div class="flex-row">
    <list-dot
      v-for="index in maxDots"
      :key="index"
      :value="index"
      :isChecked="index<=current.value"
      :dotSize="dotSize"
      @dot-clicked="setValue"
    />
  </div>
</template>

<script>
import Dot from './Dot.vue'
export default {
  name: 'DotTrack',
  props:{
    content: Object,
    maxDots: Number,
    minValue: Number,
    dotSize: Number
  },
  data:function(){
    return{
      current: this.content
    }
  },
  methods:{
    setValue: function(value){
      this.current.value = this.current.value == value ? value-1 : value;
    }
  },
  components:{
    'list-dot': Dot
  }
  
}
</script>

<style scoped>

</style>