<template>
  <div>
    <textarea 
      :id="id + '-desc'" 
      class="text-field" 
      v-model="current.description"
      :style="{
        height:descriptionHeight+'px', 
        width:width,
        minHeight:$root.config.textSizeMed+3+'px',
        fontSize:$root.config.textSizeMed+'px',
        lineHeight:$root.config.textSizeMed+'px',
        backgroundColor:$root.config.backgroundColorSecondary,
        borderColor:$root.config.colorPrimary,
        borderRightColor:$root.config.colorPrimary+'0'
      }"
      >
    </textarea>
    <p 
      :id="id+'-formatter'"
      class="formatter" 
      :style="{
        width:width,
        fontSize:$root.config.textSizeMed+'px',
        lineHeight:$root.config.textSizeMed+'px'
      }"
      >
      <span>{{current.description}}</span><br>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ResizeableTextInput',
  props:{
    content:Object,
    width:String
  },
  data: function(){
    return{
      id: this._.uid,
      current: this.content,
      descriptionHeight: this.$root.config.inputHeight
    }
  },
  updated: function(){
    let format = document.getElementById(this.id+'-formatter');
    format.style.display = 'block';
    //console.log(format.offsetHeight);
    this.descriptionHeight = format.offsetHeight + 2;
    format.style.display = 'none';
  }
  
}
</script>

<style scoped>
  textarea { 
    padding-top:3px;
  }

  p{
    margin:0px;
    padding:0px;
    outline:0px;
    border:0px;
    font-family: inherit;
  }

  .formatter{
    visibility:hidden;
    display:none;
    white-space: pre-wrap;
    word-wrap: break-word;
    background: #aaa;
  }
</style>