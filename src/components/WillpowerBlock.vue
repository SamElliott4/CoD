<template>
  <div class="willpower-block bracket">
    <h3>{{header}}</h3>
    <div class="willpower-row">
      <div 
        class="willpower-node flex-column flex-center" 
        v-for="index in $root.constants.maxWillpower" 
        :key="index"
        >
        <list-dot 
          :isChecked="index<=current.max" 
          :value="index"
          :dotSize="willpowerDotSize"
          @dot-clicked="setMax"
        />
        <list-box 
          :isChecked="index<=current.value" 
          :value="index"
          :inactive="index>current.max"
          :width="willpowerDotSize"
          @box-clicked="setValue"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Dot from './Dot.vue';
import ListBox from './ListBox.vue';

export default {
  name: 'WillpowerBlock',
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
  methods:{
    setMax: function(value){
      this.current.max = this.current.max == value ? value-1 : value;
      if(this.current.value > this.current.max){
        this.current.value = this.current.max;
      }
    },
    setValue: function(value){
      this.current.value = this.current.value == value ? value-1 : value;  
    }
  },
  computed:{
    willpowerDotSize: function(){
      return this.$root.config.boxSizeLarge;
    }
  },
  components:{
    'list-dot': Dot,
    'list-box': ListBox
  }
}
</script>

<style scoped>
  .willpower-row {
    display:flex
  }
  .willpower-node {
    display:flex;
    flex-direction: column;
  }
</style>