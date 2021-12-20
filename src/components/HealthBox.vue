<template>
  <span 
    class="health-box-outer"
    :style="{borderColor:boxColor}"
    @click="leftClicked"
    @mouseup.right="rightClicked"
    @contextmenu.prevent
    >
    <span 
      :class="{
        none: fill=='none', 
        bashing: fill=='bashing'||fill=='lethal'||fill=='aggravated', 
        }"
      :style="{backgroundColor:boxColor}"
      >
    </span>
    <span 
      :class="{
        none: fill=='none'||fill=='bashing', 
        lethal: fill=='lethal'||fill=='aggravated',
        }"
      :style="{backgroundColor:boxColor}"
      >
    </span>
    <span 
      :class="{
        none: fill=='none'||fill=='bashing'||fill=='lethal', 
        aggravated1: fill=='aggravated', 
        }"
      :style="{backgroundColor:boxColor}"
      >
    </span>
    <span 
      :class="{
        none: fill=='none'||fill=='bashing'||fill=='lethal', 
        aggravated2: fill=='aggravated', 
        }"
      :style="{backgroundColor:boxColor}"
      >
    </span>

  </span>
</template>

<script>
export default {
  name: 'HealthBox',
  props: {
    fill: String,
    value: Number,
    inactive: Boolean
  },
  methods:{
    leftClicked: function(){
      if(!this.inactive){
        this.$emit('box-left-clicked', this.fill);
      }
    },
    rightClicked: function(){
      if(!this.inactive){
        this.$emit('box-right-clicked', this.fill);
      }
    }
  },
  computed:{
    boxColor: function(){
      return this.$root.config.colorPrimary
    }
  }
}
</script>

<style scoped>

  .health-box-outer {
    display:flex;
    width: 12px;
    height: 12px;
    border: 2px solid black;
    align-items:center;
    justify-content: center;
    margin: 1px;
  }

  .none {
    opacity: 0;
  }

  .bashing {
    color:inherit;
    height: 18px;
    width: 2px;
    transform: rotate(45deg);
    background: #013;
    position:absolute;
  }

  .lethal {
    color:inherit;
    height: 18px;
    width: 2px;
    transform: rotate(135deg);
    background: #013;
    position: absolute;
  }

  .aggravated1 {
    color:inherit;
    height: 14px;
    width: 2px;
    background: #013;
    position: absolute;
  }

  .aggravated2 {
    color:inherit;
    height: 2px;
    width: 14px;
    background: #013;
    position: absolute;
  }

</style>