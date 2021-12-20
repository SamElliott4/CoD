<template>
  <div>
    <div class="flex-row flex-center">
      <text-input
        class="row-item"
        :content="current.arcanum"
        :width="$root.config.descriptionShort" 
        :fontSize="$root.config.textSizeMed"
        :readonly="true"
      />
      <dot-track 
        class="row-item padded"
        :content="current.level"
        :maxDots="$root.constants.maxArcanum"
        :dotSize="roteDotSize"
      />
      <text-input 
        class="row-item"
        :content="current.spell" 
        :width="$root.config.descriptionLong" 
        :fontSize="$root.config.textSizeMed"
        :readonly="false"  
      />
      <text-input 
        class="row-item"
        :content="current.roteSkill" 
        :width="$root.config.descriptionShort" 
        :fontSize="$root.config.textSizeMed"
        :readonly="true"  
      />
      <text-input 
        class="row-item"
        :content="current.creator" 
        :width="$root.config.descriptionShort" 
        :fontSize="$root.config.textSizeMed"
        :readonly="true"  
      />
    </div>
  </div>
</template>

<script>
import DotTrack from './DotTrack.vue';
import TextInput from './TextInput.vue';

export default {
  name: 'RoteRow',
  props: {
    content: Object,
  },
  data:function(){
    return {
      current: this.content,
      
    }
  },
  methods:{
    setLevel: function(value){
      this.current.level.value = this.current.level.value == value ? value-1 : value;
    }
  },
  computed:{
    roteDotSize: function(){
      return this.$root.config.boxSizeLarge;
    }
  },
  components:{
    'dot-track': DotTrack,
    'text-input': TextInput
  }
}
</script>

<style scoped>
  .rote-row{
    display:flex;
  }

  .dot-wrapper{
    display:flex;
  }

  .rote-row-item{
    margin:2px;
    margin-left:4px;
    margin-right:4px;
  }
  .rote-label{
    padding-left: 3px;
    padding-right: 1px;
  }
</style>