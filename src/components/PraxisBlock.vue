<template>
  <div class="praxis-row bracket">
    <div class="flex-row flex-center">
      <h3>{{header}}</h3>
      <add-button 
        :width="$root.config.buttonSizeSmall" 
        :height="$root.config.buttonSizeSmall"
        :border="true" 
        @click="addPraxis"
      />
    </div>
    <row-header
      :content="praxisHeader"
    />
    <div
      class="row"
      v-for="praxis in current"
      :key="praxis"
    >
      <praxis-row :content="praxis"/>
      <remove-button 
      class="row-item" 
      :width="$root.config.buttonSizeSmall"
      :height="$root.config.buttonSizeSmall"
      :border="false"
      @click="removePraxis(praxis)"/>
    </div>
  </div>
</template>

<script>
import AddButton from './AddButton.vue'
import PraxisRow from './PraxisRow.vue'
import RemoveButton from './RemoveButton.vue'
import RowHeader from './RowHeader.vue'
export default {
  name: 'PraxisBlock',
  props:{
    content:Object,
    header:String
  },
  data:function(){
    return {
      current: this.content,
      praxisHeader: [
        {text: '', width: this.$root.config.buttonSizeSmall, fontSize: this.$root.config.textSizeSmall},
        {text: 'Arcanum', width: this.$root.config.descriptionShort, fontSize: this.$root.config.textSizeSmall},
        {text: 'Level', width: (this.$root.config.boxSizeLarge+6)*this.$root.constants.maxArcanum+'px', fontSize: this.$root.config.textSizeSmall},
        {text: 'Spell', width: this.$root.config.descriptionLong, fontSize: this.$root.config.textSizeSmall},
        {text: '', width: this.$root.config.buttonSizeSmall, fontSize: this.$root.config.textSizeSmall}
      ]
    }
  },
  methods:{
    addPraxis: function(){
      let newPraxis = {
        arcanum: '',
        level: 0,
        spell: '',
        description: ''
      };

      this.current.push(newPraxis);
    },
    removePraxis: function(praxis){
      this.current.splice(this.current.indexOf(praxis), 1);
    }
  },
  components: { 
    'praxis-row': PraxisRow,
    'add-button': AddButton,
    'remove-button': RemoveButton,
    'row-header': RowHeader,
  }
}
</script>

<style scoped>

</style>