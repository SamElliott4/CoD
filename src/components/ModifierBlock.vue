<template>
  <div class="modifier-block bracket">
    <div class="flex-row flex-center">
      <h3>{{header}}</h3>
      <add-button 
        :width="$root.config.buttonSizeSmall" 
        :height="$root.config.buttonSizeSmall"
        :border="true" 
        @click="addModifier"
      />
    </div>
    <div class="row" v-for="modifier in current" :key="modifier">
      <modifier-row :content="modifier"/>  
      <remove-button 
        class="row-item" 
        :width="$root.config.buttonSizeSmall"
        :height="$root.config.buttonSizeSmall"
        :border="false"
        @click="removeModifier(modifier)"
      />
    </div>
  </div>
</template>

<script>
import ModifierRow from './ModifierRow.vue';
import RemoveButton from './RemoveButton.vue';
import AddButton from './AddButton.vue';

export default {
  name: "ModifierBlock",
  props: {
    header: String,
    content: Object,
    character: Object
  },
  data:function(){
    let id = 0;
    let modifierList = [];
    for(let index = 0; index < this.content.length; index++){
      modifierList.push({modifier: this.content[index], id: id++});
    }
    return {
      current: this.content,
      modifierList: modifierList,
      id: id
    };
  },
  methods:{
    addModifier: function(){
      let newModifier = {
          active: false,
          descrption: "",
          effects: [
            {
              stat: "",
              value: 0
            }
          ]
        };
      this.current.push(newModifier);
    },
    removeModifier: function(modifier){
      this.current.splice(this.current.indexOf(modifier), 1);
    }
  },
  components: { ModifierRow, RemoveButton, AddButton },
  
}
</script>

<style scoped>

</style>