<template>
  <div class="flex-row">
    <label
      class="row-item padded"
      v-for="label in content"
      :key="label"
      :style="{
        width:label.width,
        fontSize:label.fontSize+'px',
      }"
    >
    {{label.text}}
    </label>
  </div>  
</template>

<script>
export default {
  name: 'RowHeader',
  props:{
    content: Object
  },
  
  
}
</script>

<style scoped>

</style>