<template >
  <character-sheet
    class="main-content"
    :style="{
      color: $root.config.colorPrimary,
      background: $root.config.backgroundColorPrimary
    }"
  />
    
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import CharacterSheet from './components/CharacterSheet.vue';
import Config from './assets/Config.js';
import Constants from './assets/Constants.js';

export default {
  name: 'App',
  components: {
    'character-sheet': CharacterSheet
  },
  data: function() {
    return {
      config: {}
    }
  },
  created: function(){
    this.config = {...Config.small, ...Config.light};
    this.constants = Constants;
  }
}
</script>

<style>
  body{
    margin:0px;
    padding:0px;
  }

  .main-content {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    padding-top: 60px;
  }

  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .description-text{
    border-top: 1px;
    border-left: 1px;
    border-bottom: 2px;
    border-right: 2px;
    border-style: solid;
    height:20px;
    resize:none;
    font-size:12px;
    line-height: 12px;
  }

  .description-text:hover{
    border-top: 2px;
    border-left: 2px;
    border-bottom: 1px;
    border-right: 1px;
    border-style: solid;
  }

  .description-text:focus{
    border-top: 2px;
    border-left: 2px;
    border-bottom: 1px;
    border-right: 1px;
    border-style: solid;
  }

  .bracket{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:5px;
  }

  .button-wrapper{
    display:flex;
    cursor:pointer;
  }

  .flex-column{
    display:flex;
    flex-direction: column;
  }

  .flex-row{
    display: flex;
    flex-direction: row;
  }

  .flex-center{
    align-items: center;
  }

  .flex-stretch{
    align-items: stretch;
  }

  .flex-end{
    justify-content: end;
  }

  .flex-split{
    justify-content: space-between;
  }

  .flex-spaced{
    justify-content: space-around;
  }

  .float-left{
    margin-right:auto;
  }

  .float-right{
    margin-left:auto;
  }

  .padded{
    padding-left: 3px;
    padding-right: 1px;;
  }

  input:focus{
    border:0px;
  }

  h3{
    padding:0;
    margin:6px;
  }

  p{
    margin:0px;
    padding:0px;
    outline:0px;
    border:0px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size:12px;
    line-height: 12px;
    background: #888;
  }

  .row{
    border-bottom: 1px solid #0002;
    border-right: 1px solid #0002;
    margin: 2px;
    padding-left:5px;
    padding-right:5px;
    display:flex;
    align-items:center;
  }

  .row:hover{
    border-bottom:1px solid #0004;
    border-right:1px solid #0004;
  }

  .row-item{
    margin:2px;
    margin-left:4px;
    margin-right:4px;
  }

  .spacer{
    display:flex;
  }

  .text-field{
    border-top: 0px;
    border-left: 0px;
    border-bottom: 1px;
    border-right: 0px;
    border-style: solid;
    resize:none;
    overflow:hidden;  
    padding-left:3px;
    color:inherit;
    font-family:inherit;
  }

  .text-field:focus{
    border-top: 1px;
    border-left: 1px;
    border-bottom: 0px;
    border-right: 0px;
    border-style: solid;
  }

  .text-label{
    border-top: 0px;
    border-left: 0px;
    border-bottom: 1px;
    border-right: 0px;
    border-style: solid;
    resize:none;
    overflow:hidden;  
    padding-left:3px;
  }

  
</style>
