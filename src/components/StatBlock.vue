<template>
<div class="stat-block bracket">
  <h3>{{header}}</h3>
  <stat-row
    id="size"
    class="stat"
    :label="'Size'"
    :content="content.stats.size"
    :generated="computeSize()"
  />
  <stat-row
    id="speed"
    class="stat"
    :label="'Speed'"
    :content="content.stats.speed"
    :generated="computeSpeed()"
  />
  <stat-row
    id="defense"
    class="stat"
    :label="'Defense'"
    :content="content.stats.defense"
    :generated="computeDefense()"
  />
  <stat-row
    id="armor"
    class="stat"
    :label="'Armor'"
    :content="content.stats.armor"
    :generated="computeArmor()"
  />
  <stat-row
    id="initiative"
    class="stat"
    :label="'Initiative'"
    :content="content.stats.initiative"
    :generated="computeInitiative()"
  />
</div>
</template>

<script>
import StatRow from './StatRow.vue'
/*
size = 5
speed = str + dex + 5
defense = min(wits, dex) + athletics
armor
initiative mod
*/

export default {
  components: { 'stat-row': StatRow },
  name: 'StatBlock',
  props:{
    content: Object,
    header: String,
    description: String
  },
  data: function(){
    return {
      current:this.content
    }
  },
  updated:function(){
    console.log(this.content);
  },
  methods:{
    computeSize:function(){
      return 5;
    },
    computeSpeed:function(){
      return this.content.attributes.Physical.Strength.value + this.content.attributes.Physical.Dexterity.value + 5
    },
    computeDefense:function(){
      return Math.min(this.content.attributes.Mental.Wits.value, this.content.attributes.Physical.Dexterity.value)
                     + this.content.skills.Physical.Athletics.value
    },
    computeArmor:function(){
      return 0;
    },
    computeInitiative:function(){
      return this.content.attributes.Physical.Dexterity.value + this.content.attributes.Social.Composure.value;
    }
  }
}
</script>

<style scoped>
  .stat-block{
    align-items:stretch
  }
</style>