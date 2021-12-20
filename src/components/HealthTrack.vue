<template>
  <div class="bracket health-block">
    <h3>{{header}}</h3>
    <div class="health-row">
      <div
        class="health-node flex-center"
        v-for="index in $root.constants.maxHealth"
        :key="index"
      >
        <list-dot
          :isChecked="index <= current.value"
          :value="index"
          :dotSize="healthDotSize"
          @dot-clicked="setValue"
        />
        <health-box
          :fill="index > current.value ? 'none' :
                      index <= current.damage.aggravated ? 'aggravated' : 
                      index <= current.damage.aggravated+current.damage.lethal ? 'lethal' : 
                      index <= current.damage.aggravated+current.damage.lethal+current.damage.bashing ? 'bashing' : 
                      'none'"
          :value="index"
          :inactive="index>current.value"
          :width="healthDotSize"
          @box-left-clicked="addDamage"
          @box-right-clicked="removeDamage"
        />
      </div>
    </div>
  </div>
  
</template>

<script>
import Dot from './Dot.vue'
import HealthBox from './HealthBox.vue'

export default {
  name: 'HealthTrack',
  props: {
    content: Object,
    header: String,
    description: String
  },
  data: function(){
    return {
      current: this.content
    }
  },
  methods: {
    setValue: function(value){
      this.current.value = this.current.value == value ? value-1 : value;
    },
    addDamage: function(type){
      if(type == 'none'){
        this.current.damage.bashing++;
      }else if(type == 'bashing'){
        this.current.damage.lethal++;
        this.current.damage.bashing--;
      }else if(type == 'lethal'){
        this.current.damage.aggravated++;
        this.current.damage.lethal--;
      }
    },
    removeDamage: function(type){
      if(type == 'bashing'){
        this.current.damage.bashing--;
      }else if(type == 'lethal'){
        this.current.damage.lethal--;
        this.current.damage.bashing++;
      }else if(type == 'aggravated'){
        this.current.damage.aggravated--;
        this.current.damage.lethal++;
      }
    }
  },
  computed:{
    healthDotSize:function(){
      return this.$root.config.boxSizeLarge;
    }
  },
  components: {
    'list-dot': Dot,
    'health-box': HealthBox
  }
}
</script>

<style scoped>
  .health-row {
    display:flex;
  }

  .health-node {
    display:flex;
    flex-direction: column;
  }
</style>