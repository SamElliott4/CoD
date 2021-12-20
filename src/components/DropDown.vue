<template>
  <select 
    class="row-item" 
    v-model="current.effect"
    :style="{borderColor: $root.config.colorPrimary}"
  >
    <option :style="{backgroundColor:$root.config.backgroundColorPrimary}"></option>
    <option 
        v-for="option in options" 
        :value="option" 
        :key="option"
        :style="{
          backgroundColor:$root.config.backgroundColorPrimary
        }"
      >
      {{option}}
      </option>
    <optgroup 
      v-for="value, key in optionGroups" 
      :key="key" 
      :label="key"
      :style="{backgroundColor:$root.config.backgroundColorPrimary}"
    >
      <option 
        v-for="option in value" 
        :value="option" 
        :key="option"
        :style="{
          backgroundColor:$root.config.backgroundColorPrimary
        }"
      >
      {{option}}
      </option>
    </optgroup>
    <optgroup :style="{backgroundColor:$root.config.backgroundColorPrimary}" label="Other">
      <option :style="{backgroundColor:$root.config.backgroundColorPrimary}">Other</option>
    </optgroup>
  </select>
</template>

<script>

export default {
  name: 'DropDown',
  props: {
    content: Object,
    options: Object,
    optionGroups: Object,
  },
  data: function(){
    return {
      current: this.content,
    }
  },
  methods:{
  }
}
</script>

<style scoped>
  select{
    border: none;
    border-bottom: 1px solid;
    color:inherit;
    font-family: inherit;
  }

  optgroup{
    color:inherit;
    font-family: inherit;
  }


</style>