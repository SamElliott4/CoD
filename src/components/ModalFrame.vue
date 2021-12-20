<template>
  <div v-if="showModal" class="modal-backdrop" @click="closeModal">
    <div
      class="modal-frame"
      :style="{background: $root.config.backgroundColorPrimary}"
      @click.stop=""
    >
      <div class="flex-row flex-end">
        <span class="button-wrapper" :style="{width:$root.config.buttonSizeMedium, height:$root.config.buttonSizeMedium}"
          @click="closeModal"
        >
          <img :src="closeModalButton">
        </span>
      </div>
      <slot>
        Hello World.
      </slot>
    </div>  
  </div>  
</template>

<script>
import lightModeButton from '../assets/images/closeButtonLight.png';

export default {
  name: "ModalFrame",
  props:{
    modelValue: Boolean
  },
  data: function(){
    return{
      closeModalButton: lightModeButton,
    }
  },
  methods:{
    closeModal: function(){
      this.showModal = false;
    }
  },
  computed:{
    showModal:{
      get:function(){
        return this.modelValue;
      },
      set:function(val){
        this.$emit('update:modelValue', val);
      }
    }
  }
    
}
</script>

<style scoped>
  
.modal-backdrop{
  position:fixed;
  z-index: 100;
  top: 0px;
  left: 0px;
  background: #0005;
  width: 100%;
  height: 100%;
}

.modal-frame{
  min-width: 300px;
  max-width:600px;
  width: 50%;
  margin: 30px auto;
  padding: 5px;
}

</style>