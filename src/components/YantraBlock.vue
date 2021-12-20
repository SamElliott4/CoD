<template>
  <div class="yantra-block bracket">
    <div class="flex-row flex-center">
      <h3>{{header}}</h3>
      <add-button 
        :width="$root.config.buttonSizeSmall" 
        :height="$root.config.buttonSizeSmall"
        :border="true" 
        @click="addYantra"
      />
    </div>
    <div class="row" v-for="yantra in current" :key="yantra">
      <yantra-row :content="yantra"/>  
      <remove-button 
        class="row-item" 
        :width="$root.config.buttonSizeSmall"
        :height="$root.config.buttonSizeSmall"
        :border="false"
        @click="removeYantra(yantra)"
      />
    </div>
  </div>  
</template>

<script>
import AddButton from './AddButton.vue';
import RemoveButton from './RemoveButton.vue';
import YantraRow from './YantraRow.vue';

export default {
  name: 'YantraBlock',
  props:{
    content:Object,
    header:String,
    description:String
  },
  data:function(){
    return {
      current: this.content
    }
  },
  methods:{
    addYantra: function(){
      let newYantra = {
          descrption: "",
          effects: [
            {
              stat: "",
              value: 0
            }
          ]
        };
      this.current.push(newYantra);
    },
    removeYantra: function(yantra){
      this.current.splice(this.current.indexOf(yantra), 1);
    }
  },
  components:{
    'add-button': AddButton,
    'remove-button': RemoveButton,
    'yantra-row': YantraRow
  }
}
</script>

<style scoped>

</style>