<template>
  <div class="advancement-block bracket">
    <h3>{{header}}</h3>
    <beat-row
      :label="'Beats'"
      :content="content.beats"
    />
    <stat-row
      :label="'Experience'"
      :content="content.experience"
    />
    <beat-row
      :label="'Arcane Beats'"
      :content="content.arcaneBeats"
    />
    <stat-row
      :label="'Arcane Experience'"
      :content="content.arcaneExperience"
    />
  </div>
</template>

<script>
import BeatRow from './BeatRow.vue'
import StatRow from './StatRow.vue'
export default {
  name: 'AdvancementBlock',
  props: {
    header: String,
    description: String,
    content: Object
  },
  components:{
    'beat-row': BeatRow,
    'stat-row': StatRow
  }
}
</script>

<style scoped>
  .advancement-block{
    align-items: stretch;
  }
</style>