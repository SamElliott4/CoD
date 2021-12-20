<template>
  <div class="flex-row flex-center">
    <expand-button 
      class="row-item"
      :width="$root.config.buttonSizeSmall"
      @click="showModal"
    />
    <text-input class="float-right"
      :width="$root.config.descriptionLong" 
      :content="current.name"
    />
    <dot-track
      class="row-item"
      :content="current.dots"
      :maxDots="$root.constants.maxMerit"
      :dotSize="meritDotSize"
    />
  </div>
</template>

<script>
import DotTrack from './DotTrack.vue';
import TextInput from './TextInput.vue';
import ExpandButton from './ExpandButton.vue';

export default {
  name: 'Merit',
  props: {
    content: Object,
  },
  data: function(){
    return {
      current: this.content
    }
  },
  methods:{
    showModal: function(){
      this.$emit("open-merit-modal", this.current);
    }
  },
  computed:{
    meritDotSize:function(){
      return this.$root.config.boxSizeLarge;
    }
  },
  components: {
    'text-input': TextInput,
    'dot-track': DotTrack,
    'expand-button': ExpandButton
  }
}
</script>

<style scoped>
  .merit {
    display:flex;
    align-items: center;
  }

</style>