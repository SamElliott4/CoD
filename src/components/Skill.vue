<template>
  <div class="skill row">
    <div class="top-label" :style="{fontSize:$root.config.textSizeSmall+'px'}">
      <span>Rote</span>
      <check-box 
        :id="content.name + '-rote'" 
        :isChecked="current.rote" 
        :width="checkBoxSize"
        @box-clicked="toggleRote"
      />
    </div>
    <label class="skill-label">{{name}}</label>
    <div class="top-label" v-bind:style="{fontSize:$root.config.textSizeSmall+'px'}">
      <span>Asset</span>
      <check-box 
        :id="content.name + '-asset'" 
        :isChecked="current.asset" 
        :width="checkBoxSize"
        @box-clicked="toggleAsset"
      />
    </div>
    <div class="top-label" :style="{fontSize:$root.config.textSizeSmall+'px'}">
      <span>Specialty</span>
      <check-box 
        :id="content.name + '-specialty'" 
        :isChecked="current.specialty" 
        :width="checkBoxSize"
        @box-clicked="toggleSpecialty"
      />
    </div>
    <resizeable-text-input
      class="skill-desc"
      :width="$root.config.descriptionMedium"
      :content="current"
    />
    <dot-track 
      class="row-item" 
      :maxDots="$root.constants.maxSkill" 
      :content="current"
      :dotSize="skillDotSize"
    />
    
  </div>
</template>

<script>
import CheckBox from './CheckBox.vue';
import ResizeableTextInput from './ResizeableTextInput.vue';
import DotTrack from './DotTrack.vue';

export default {
  name: 'Skill',
  props: {
    name: String,
    content: Object
  },
  data: function(){
    return {
      current: this.content,
    };
  },
  components: {
    'check-box': CheckBox,
    'resizeable-text-input': ResizeableTextInput,
    'dot-track': DotTrack
  },
  methods: {
    'toggleRote': function(){
      this.current.rote = !this.current.rote;
    },
    'toggleAsset': function(){
      this.current.asset = !this.current.asset;
    },
    'toggleSpecialty': function(){
      this.current.specialty = !this.current.specialty;
    }
  },
  computed:{
    checkBoxSize: function(){
      return this.$root.config.boxSizeSmall;
    },
    skillDotSize: function(){
      return this.$root.config.boxSizeLarge;
    }
  }
}
</script>
  
<style scoped>
  .skill-label{
    display:inline-block;
    margin-right: auto;
    padding-right: 5px;
    position:relative;
    text-align:left;
  }

  .skill{
    align-items: center;
  }

  .skill-desc{
    margin-left: 6px;
    margin-right: 6px;
  }

  .top-label{
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 5px;
    align-items:center;
  }

  .dot-wrapper{
    display:flex;
  }
</style>
