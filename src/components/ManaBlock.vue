<template>
  <div class="mana-block bracket">
    <h3>{{header}}</h3>
    <div class="mana-bar" v-for="iIndex in Math.ceil($root.constants.maxMana/10)" :key="iIndex">
      <list-box 
        class='mana-box' 
        v-for="jIndex in 10" 
        :key="(iIndex-1)*10+jIndex"
        :isChecked="(iIndex-1)*10+jIndex<=current.value"
        :value="(iIndex-1)*10+jIndex"
        :inactive="false"
        :width="$root.config.boxSizeLarge"
        @box-clicked="setValue"
      />
    </div>
  </div>
</template>

<script>
import ListBox from './ListBox.vue'

export default {
  name: 'ManaBlock',
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
    setValue: function(value){
      this.current.value = this.current.value == value ? value-1 : value;
    }
  },
  components: {
    'list-box': ListBox
  }
}
</script>

<style scoped>

  .mana-bar{
    display:flex;
  }
  
</style>