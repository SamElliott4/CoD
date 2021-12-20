<template>
  <div class="modifier-row">
    <div class="top-label" :style="{fontSize:$root.config.textSizeSmall+'px'}">
      <span>Active</span>
      <check-box 
        :isChecked="current.active" 
        :width="checkBoxSize"
        @box-clicked="toggleActive"
      />
    </div>
    
    <resizeable-text-input
      class="row-item"
      :width="$root.config.descriptionLong" 
      :content="content"
    >
    </resizeable-text-input>
    <div class="flex-column flex-center modifier-effect-block">
      <div 
        class="row-item flex-row flex-center"
        v-for="effect in content.effects" 
        v-bind:key="effect"
        >
        <effect-node 
          class="row-item"
          :content="effect"
          :optionGroups="modifierOptions"
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
import AddButton from './AddButton.vue'
import CheckBox from './CheckBox.vue'
import EffectNode from './EffectNode.vue'
import RemoveButton from './RemoveButton.vue'
import ResizeableTextInput from './ResizeableTextInput.vue'

export default {
  name: "ModifierRow",
  props: {
    content: Object
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
    },
    toggleActive:function(){
      this.current.active = !this.current.active;
    }
  },
  components: { 
    'resizeable-text-input': ResizeableTextInput, 
    'effect-node': EffectNode, 
    'check-box': CheckBox,
    'add-button': AddButton,
    'remove-button': RemoveButton

  },
  computed:{
    modifierOptions: function(){
      let options = {
        "attributes": this.$root.constants.attributes,
        "skills": this.$root.constants.skills,
        "stats": this.$root.constants.stats
      }
      return options;
    },
    checkBoxSize: function(){
      return this.$root.config.boxSizeSmall;
    }
  }

  
}
</script>

<style scoped>
  .modifier-row{
    display:flex;
    align-items:center;
  }

  .top-label{
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 5px;
    align-items:center;
  }

  .modifier-effect-block{
    margin-bottom:3px;
  }

</style>