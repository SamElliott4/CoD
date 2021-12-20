<template>
  <div class="number-select">
    <input 
      class="number-input" 
      type="text" 
      v-model="current.value" 
      readonly
      :style="{
        width: width,
        height: height+3+'px',
        fontSize: height+'px',
        lineHeight: height+'px',
        backgroundColor:$root.config.backgroundColorSecondary,
        borderColor:$root.config.colorPrimary,
      }"
    />
    <div class="arrow-wrapper">
      <span class="arrow" @click="increase"><img :src="uparrow"/></span>
      <span class="arrow" @click="decrease"><img :src="downarrow"/></span>
    </div>
  </div>  
</template>

<script>
import uparrow from '../assets/images/uparrow.png';
import downarrow from '../assets/images/downarrow.png';

export default {
  name: 'NumberSelect',
  props:{
    min:Number,
    max: Number,
    content: Object,
    width: Number,
    height: Number
  },
  data:function(){
    return{
      current: this.content,
      uparrow: uparrow,
      downarrow: downarrow,
    }
  },
  methods:{
    increase: function(){
      if(this.max && this.current.value>=this.max){
        return;
      }
      this.current.value++;
    },
    decrease: function(){
      if(this.min && this.current.value<=this.min){
        return;
      }
      this.current.value--;
    }
    
  }
}
</script>

<style scoped>

  .number-select{
    display:flex;
    align-items:center;
  }

  .number-input{
    background: #fff2;
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
    width:25px;
    height:15px;
    color:inherit;
    font-family: inherit;
  }

  .arrow-wrapper{
    display:flex;
    flex-direction: column;
  }

  .arrow{
    display:inline;
    color:inherit;
    width:8px;
    height:8px;
    margin:1px;
    cursor:pointer;
    overflow:hidden;
    padding:0px;
  }

  img{
    display:block;
  }
</style>