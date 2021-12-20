<template>
  <div class="merit-block bracket">
    <div class="flex-row flex-center">
       <h3>{{header}}</h3>
      <add-button 
        :width="$root.config.buttonSizeSmall" 
        :height="$root.config.buttonSizeSmall"
        :border="true" 
        @click="addMerit"
      />
    </div>
    <div class="row" v-for="merit in current" :key="merit">
      <merit v-bind:content="merit" @open-merit-modal="openMeritModal"/>
      <remove-button 
        class="row-item" 
        :width="$root.config.buttonSizeSmall"
        :height="$root.config.buttonSizeSmall"
        :border="false"
        @click="removeMerit(merit)"
      />
    </div>
    
    <modal-frame v-model="showModal">
      <merit-modal :content="activeMerit"/>
    </modal-frame>
  </div>
</template>

<script>
import AddButton from './AddButton.vue';
import Merit from './Merit.vue';
import MeritModal from './MeritModal.vue';
import ModalFrame from './ModalFrame.vue';
import RemoveButton from './RemoveButton.vue';

export default {
  name: 'MeritBlock',
  props:{
    content: Object,
    header: String,
    description: String
  },
  data: function(){
    return {
      current: this.content,
      showModal: false,
      activeMerit: {}
    }
  },
  components: {
    'merit': Merit,
    'add-button': AddButton,
    'remove-button': RemoveButton,
    'modal-frame': ModalFrame,
    'merit-modal': MeritModal
  },
  methods:{
    addMerit: function(){
      let newMerit = {
        name: {value: ""},
        description: {value: ""},
        dots: {value: 0},
      }

      this.current.push(newMerit);
    },
    removeMerit: function(merit){
      this.current.splice(this.current.indexOf(merit), 1);
    },
    openMeritModal: function(merit){
      console.log(merit);
      this.activeMerit = merit;
      this.showModal = true;
    }
  }

}
</script>

<style scoped>
  .merit-block {
    margin:0px;
  }

  .list-btn {
    width:20px;
    height:20px;
    display:flex;
    border-radius: 50%;
    border: 1px;
    border-style: solid;
    cursor:pointer;
    color:inherit;
    background-color: #0000;
  }

  .add-merit {
    align-items: center;
    justify-content: center;
  }

  .remove-merit {
    justify-content: center;
  }
</style>