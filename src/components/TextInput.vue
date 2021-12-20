<template>
  <div>
    <input 
        class="text-field"
        v-model="current.value"
        :style="{
          width: width,
          height: fontSize+3+'px',
          fontSize: fontSize+'px',
          lineHeight: fontSize+'px',
          backgroundColor: $root.config.backgroundColorSecondary,
          borderColor: $root.config.colorPrimary
        }"
        :readonly="readonly"
      />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props:{
    content: Object,
    width: String,
    fontSize: Number,
    readonly: Boolean
  },
  data:function(){
    return {
      current: this.content
    }
  }
}
</script>

<style scoped>

</style>