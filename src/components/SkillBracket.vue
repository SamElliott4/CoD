<template>
  <div class="skill-bracket bracket">
    <h3>{{group}}</h3>
    <skill 
      v-for="(skill,key) in skills" 
      :key="key"
      :name="key"
      :content="skill"
      >
    </skill>
  </div>
</template>

<script>
import Skill from './Skill.vue';

export default {
  name: 'SkillBracket',
  props: {
    group: String,
    description: String,
    skills: Object
  },
  components:{
    'skill': Skill
  },
  methods:{
    getValues: function(){
      let output = {};
      //for( value,key in skills){
        //output.put(key, key.getValues());
      //}
      return output;
    }
  },
  created: function(){
    
  }
}
</script>

<style scoped>
  .skill-bracket{
    width:100%;
    align-items:stretch;
  }
</style>