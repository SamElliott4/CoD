<template>
  <div id="modal-contents" class="flex-column flex-center">
    <div class="flex-row flex-stretch">
      <div class="flex-column flex-center">
        <text-input 
          class="row-item"
          :width="$root.config.descriptionLong" 
          :content="current.name"
        />
        <dot-track
          class="row-item"
          :content="current.dots"
          :maxDots="$root.constants.maxMerit"
          :dotSize="meritDotSize"
        />
        <div class="flex-column flex-center row-item">
          <div 
            class="flex-row flex-center"
            v-for="effect in current.effects"
            :key="effect"
          >
            <effect-node
              :content="effect"
            />
            <remove-button
              :width="$root.config.buttonSizeSmall"
              @click="removeEffect(effect)"
            />
          </div>
          <add-button
            :width="$root.config.buttonSizeSmall"
            @click="addEffect"
          />
        </div>
        
      </div>
      <div class="flex-column">
        
        
        <resizeable-text-input
          :width="$root.config.descriptionVeryLong"
          :content="{description:''}"
        />
        
      </div>
    </div>
    <div class="merit-details">
      details
    </div>
  </div>
</template>

<script>
import AddButton from './AddButton.vue';
import DotTrack from './DotTrack.vue';
import EffectNode from "./EffectNode.vue";
import RemoveButton from './RemoveButton.vue';
import ResizeableTextInput from './ResizeableTextInput.vue';
import TextInput from './TextInput.vue';

export default {
  name: "MeritModal",
  props: {
    content: Object
  },
  data: function(){
    return {
      current: this.content
    }
  },
  methods:{
    addEffect: function(){

      this.current.effects.push({
        effect: "",
        value: 0,
        eightAgain: false,
        nineAgain: false
      });
    },
    removeEffect: function(effect){
      this.current.effects.splice(this.current.effects.indexOf(effect),1);
    }
  },
  computed:{
    meritDotSize: function(){
      return this.$root.config.boxSizeLarge;
    }
  },
  components: {
    'add-button': AddButton,
    'dot-track': DotTrack,
    'effect-node': EffectNode,
    'remove-button': RemoveButton,
    'resizeable-text-input': ResizeableTextInput,
    'text-input': TextInput
  },
}
</script>

<style scoped>

</style>