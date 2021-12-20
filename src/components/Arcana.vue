<template>
  <div class="flex-row">
  <div class="arcanum-bracket bracket">
    <h3>{{header}}</h3>
    <arcanum 
      v-for="(arcanum, key) in arcana" 
      :key="key" :name="key" 
      :content="arcanum"
      />
  </div>
  </div>
</template>

<script>
import Arcanum from './Arcanum.vue'
export default {
  name: 'Arcana',
  props: {
    header: String,
    description: String,
    arcana: Object
  },
  components: {
    'arcanum': Arcanum
  }
  
}
</script>

<style scoped>
  .arcanum-bracket{
    margin:0px;
    align-items: stretch;
  }
</style>