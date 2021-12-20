<template>
  <div class="rote-block bracket">
    <div class="flex-row flex-center">
      <h3>{{header}}</h3>
      <add-button 
        :width="$root.config.buttonSizeSmall" 
        :height="$root.config.buttonSizeSmall"
        :border="true" 
        @click="addRote()"
      />
    </div>
    <row-header :content="rowHeader"/>
    <div
      class="row"
      v-for="rote in current"
      :key="rote"
    >
      <rote-row :content="rote"/>
      <remove-button 
        class="row-item padded" 
        :width="$root.config.buttonSizeSmall"
        :height="$root.config.buttonSizeSmall"
        :border="false"
        @click="removeRote(rote)"
      />
    </div>
  </div>
</template>

<script>
import AddButton from './AddButton.vue';
import RemoveButton from './RemoveButton.vue';
import RoteRow from './RoteRow.vue';
import RowHeader from './RowHeader.vue';

export default {
  name: 'RoteBlock',
  props:{
    content: Object,
    header: String,
    description: String
  },
  data: function(){
    return {
      current: this.content,
      rowHeader: [
        {text: 'Arcanum', width: this.$root.config.descriptionShort, fontSize: this.$root.config.textSizeSmall},
        {text: 'Level', width: (this.$root.config.boxSizeLarge+6)*this.$root.constants.maxArcanum+'px', fontSize: this.$root.config.textSizeSmall},
        {text: 'Spell', width: this.$root.config.descriptionLong, fontSize: this.$root.config.textSizeSmall},
        {text: 'Rote Skill', width: this.$root.config.descriptionShort, fontSize: this.$root.config.textSizeSmall},
        {text: 'Creator', width: this.$root.config.descriptionShort, fontSize: this.$root.config.textSizeSmall},
        {text: '', width: this.$root.config.buttonSizeSmall, fontSize: this.$root.config.textSizeSmall}
      ]
    }
  },
  methods:{
    addRote: function(){
      let newRote = {
        arcanum:{
          value: ''
        },
        level: {
          value: 0
        },
        spell: {
          value: ''
        },
        roteSkill: {
          value: ''
        },
        creator: {
          value: ''
        },
        description:{
          value: ''
        }
      };

      this.current.push(newRote);
    },
    removeRote: function(rote){
      this.current.splice(this.current.indexOf(rote),1);
    }
  },
  components:{
    'rote-row': RoteRow,
    'remove-button': RemoveButton,
    'add-button': AddButton,
    'row-header': RowHeader
  }
}
</script>

<style scoped>

</style>