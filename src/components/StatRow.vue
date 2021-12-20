<template>
  <div class="stat-row row">
    <label @dblclick="toggleOverride">
      {{label}}
    </label>
    <text-input
      class="row-item"
      v-if="current.override"
      :content="current"
      :width="$root.config.descriptionShort"
      :fontSize="$root.config.textSizeMed"
      :readonly="false"
    />
    <text-input
      class="row-item"
      v-if="!current.override"
      :content="{value: generated}"
      :width="$root.config.descriptionShort"
      :fontSize="$root.config.textSizeMed"
      :readonly="true"
    />
  </div>
</template>

<script>
import TextInput from './TextInput.vue';
export default {
  
  name: 'StatRow',
  props:{
    content: Object,
    generated: Number,
    label: String
  },
  data:function(){
    return {
      current: this.content
    }
  },
  methods: {
    'toggleOverride': function(){
      this.current.override = !this.current.override;
    }
  },
  components: { 
    'text-input': TextInput 
    }
}
</script>

<style scoped>
  label{
    margin-right: auto;
  }

  .stat-row{
    align-items:center;
    justify-content: center;
  }
</style>