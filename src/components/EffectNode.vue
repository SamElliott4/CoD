<template>
  <div class="modifier-node">
    <drop-down
      :content="content"
      :optionGroups="optionGroups"
    />
    <number-select :content="content" :width="$root.config.numericInputWidth" :height="$root.config.textSizeMed"/>
    <div class="flex-column flex-center">
      <div class="flex-row flex-center">
        <check-box
          :width="checkBoxSize"
          :isChecked="current.nineAgain"
          @box-clicked="toggleNineAgain"
        />
        <label
          :style="{
            fontSize:labelFontSize
          }"
        >9-Again
        </label>
      </div>
      <div class="flex-row flex-center">
        <check-box
          :width="checkBoxSize"
          :borderWidth="1"
          :isChecked="current.eightAgain"
          @box-clicked="toggleEightAgain"
        />
        <label
        :style="{
            fontSize:labelFontSize
          }"
        >8-Again
        </label>
      </div>
    </div>
  </div>  
</template>

<script>
import CheckBox from './CheckBox.vue';
import NumberSelect from './NumberSelect.vue';
import DropDown from './DropDown.vue';

export default {
  components: { NumberSelect, CheckBox, DropDown },
  name: "EffectNode",
  props:{
    content: Object,
    optionGroups: Object
  },
  data:function(){
    return {
      current: this.content
    }
  },methods:{
    toggleEightAgain:function(){
      this.current.eightAgain = !this.current.eightAgain;
    },
    toggleNineAgain: function(){
      this.current.nineAgain = !this.current.nineAgain;
    }
  },
  computed: {
    labelFontSize: function(){
      return this.$root.config.textSizeSmall+'px';
    },
    checkBoxSize: function(){
      return this.$root.config.boxSizeTiny
    }
  },
  created: function(){
    console.log(this.content)
  }
}
</script>

<style scoped>

  .modifier-node{
    display:flex;
  }

  select{
    background: #fff2;
    border: none;
    border-bottom: 1px solid;
    color:inherit;
    font-family: inherit;
  }



</style>