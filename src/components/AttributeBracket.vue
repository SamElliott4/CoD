<template>
  <div class="attribute-bracket">
    <attribute 
      v-for="(attribute,key) in attributes" 
      :key="key"
      :name="key"
      :content="attribute"
    />
  </div>
</template>

<script>
import Attribute from './Attribute.vue';

export default {
  name: 'AttributeBracket',
  props:{
    attributes: Object
  },
  components: {
    'attribute': Attribute  
  }
}
</script>

<style scoped>
  .attribute-bracket{
    margin-left:10px;
    margin-right:10px;
  }
</style>