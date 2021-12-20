<template>
  <div class="flex-row flex-center"> 

    <resizeable-text-input
      class="row-item"
      :width="$root.config.descriptionLong" 
      :content="content"
    />
    <div class="flex-column flex-center yantra-effect-block">
      <div 
        class="row-item flex-row flex-center"
        v-for="effect in content.effects" 
        v-bind:key="effect"
        >
        <effect-node 
          class="row-item"
          :content="effect"
          :optionGroups="yantraOptions"
        />
        <remove-button
          :width="$root.config.buttonSizeTiny"
          :height="$root.config.buttonSizeTiny"
          :border="false"
          @click="removeEffect(effect)"
        />
      </div>
      <add-button
        :width="$root.config.buttonSizeTiny"
        :height="$root.config.buttonSizeTiny"
        :border="false"
        @click="addEffect"
      />
    </div>

  </div>
</template>

<script>
import EffectNode from './EffectNode.vue'
import ResizeableTextInput from './ResizeableTextInput.vue'
import RemoveButton from './RemoveButton.vue';
import AddButton from './AddButton.vue';

export default {
  name: 'YantraRow',
  props:{
    content:Object
  },
  data:function(){
    return {
      current: this.content
    }
  },
  methods:{
    
    addEffect:function(){
      this.current.effects.push(
        {
          effect: "",
          value: 0,
          eightAgain: false,
          nineAgain: false
        }
      )
    },
    removeEffect:function(effect){
      if(this.current.effects.length > 1){
        this.current.effects.splice(this.current.effects.indexOf(effect), 1);
      }
    }
  },
  computed:{
    yantraOptions:function(){
      let options = {
        "Spells": this.$root.constants.yantraModifiers
      };
      return options;
    }
  },
  components:{
    'effect-node': EffectNode,
    'resizeable-text-input': ResizeableTextInput,
    'add-button': AddButton,
    'remove-button': RemoveButton
  }
}
</script>

<style scoped>
  .yantra-effect-block{
    padding-bottom: 3px;
  }
</style>