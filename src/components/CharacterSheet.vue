<template>
  <div :style="{color: $root.config.colorPrimary, fontSize: $root.config.textSizeLarge+'px'}">
    <div class="attribute-wrapper">
      <attribute-bracket 
        v-for="(attributes, key) in character.attributes"
        :key="key"
        :attributes="attributes"
        />
    </div>
    <div class="stats-page">
      <div class="skill-wrapper">
        <skill-bracket 
        v-for="(skills,key) in character.skills" 
        :key="key" 
        :group="key" :skills="skills"
        />
      </div>
      <div class="flex-column flex-center">
        <arcana header="Arcana" v-bind:arcana="character.arcana"/>
        <merit-block header="Merits" :content="character.merits"/>
        <modifier-block header="Modifiers" :content="character.modifiers" :character="character" />
      </div>
      <div>
        <health-track header="Health" :content="character.health"></health-track>
        <mana-block header="Mana" :content="character.mana"/>
        <gnosis-block header="Gnosis" :content="character.gnosis"/>
        <willpower-block header="Willpower" :content="character.willpower"/>
        <wisdom-block header="Wisdom" :content="character.wisdom"/>
        <stat-block header="Stats" :content="character"/>
        <advancement-block header="Advancement" :content="character.advancement"/>
      </div>
    </div>
    <div class="spells-page">
      <rote-block header="Rotes" :content="character.rotes"/>
      <praxis-block header="Praxes" :content="character.praxes"/>
      <yantra-block header="Yantras" :content="character.yantras"/>
      <active-spells-block/>
      <inured-spells-block/>
      <nimbus-block/>
      <arcana-attainments/>
      <legacy-attainments/>
    </div>
    <div class="equipment-page">
      <magical-tools/>
      <enchanted-items/>
      <combat-equipment/>
      <conditions-block/>
    </div>
    <div>

    </div>
    <br>
    <div>
    <button @click="printCharacter">peek</button>
    </div>
  </div>
</template>

<script>
import AttributeBracket from './AttributeBracket.vue';
import SkillBracket from './SkillBracket.vue';
import Arcana from './Arcana.vue';
import MeritBlock from './MeritBlock.vue';
import HealthTrack from './HealthTrack.vue';
import ManaBlock from './ManaBlock.vue';
import GnosisBlock from './GnosisBlock.vue';
import WillpowerBlock from './WillpowerBlock.vue';
import WisdomBlock from './WisdomBlock.vue';
import Characters from '../assets/Characters.js';
import StatBlock from './StatBlock.vue';
import AdvancementBlock from './AdvancementBlock.vue';
import RoteBlock from './RoteBlock.vue';
import ModifierBlock from './ModifierBlock.vue';
import PraxisBlock from './PraxisBlock.vue';
import YantraBlock from './YantraBlock.vue';

export default {
  name: 'CharacterSheet',
  data: function(){
    return {
      character: {},
    };
  },
  components:{
    'skill-bracket': SkillBracket,
    'attribute-bracket': AttributeBracket,
    'arcana': Arcana,
    'merit-block': MeritBlock,
    'health-track': HealthTrack,
    'mana-block': ManaBlock,
    'gnosis-block': GnosisBlock,
    'willpower-block': WillpowerBlock,
    'wisdom-block': WisdomBlock,
    'stat-block': StatBlock,
    'advancement-block': AdvancementBlock,
    'rote-block': RoteBlock,
    'modifier-block': ModifierBlock,
    'praxis-block': PraxisBlock,
    'yantra-block': YantraBlock,
  },
  created: function(){
    this.character = Characters.James;
  },
  methods: {
    printCharacter:function(){
      console.log(this.character);
    }
  }
}
</script>

<style scoped>
  .stats-page {
    display:flex;
    justify-content: space-around;
  }
  .attribute-wrapper{
    display:flex;  
    justify-content: center;
    align-items: center;
  }

  .skill-wrapper{
    display:flex;
    flex-direction:column;
  }

  .vertical-divider{
    display:block;
    width:2px;
    height: 40px;
    background: #000;
  }
</style>