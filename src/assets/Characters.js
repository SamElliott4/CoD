var James = {
  attributes: {
    Mental: {
      'Intelligence':{
        value: 4
      },
      'Wits':{
        value: 2
      },
      'Resolve':{
        value: 3
      }
    },
    Physical: {
      'Strength': {
        value: 2
      },
      'Dexterity': {
        value: 1
      },
      'Stamina': {
        value: 3
      }
    },
    Social:{
      'Presence': {
        value: 2
      },
      'Manipulation': {
        value: 2
      },
      'Composure': {
        value: 3
      }
    }
  },
  skills: {
    'Mental': {
      'Academics': {
        'value': 3,
        'rote': false,
        'asset': true,
        'specialty': true,
        'description': "AI"
      },
      'Computers': {
        'value': 4,
        'rote': false,
        'asset': false,
        'specialty': true,
        'description': "Programming"
      },
      'Crafts': {
        'value': 1,
        'rote': true,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Investigation': {
        'value': 0,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Medicine': {
        'value': 0,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Occult': {
        'value': 0,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Politics': {
        'value': 1,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Science': {
        'value': 2,
        'rote': false,
        'asset': true,
        'specialty': false,
        'description': ""
      }
    },
    'Physical': {
      'Athletics': {
        'value': 1,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Brawl': {
        'value': 0,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Drive':{
        'value': 0,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Firearms':{
        'value': 1,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Larceny':{
        'value': 0,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Stealth':{
        'value': 1,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Survival':{
        'value': 1,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Weaponry':{
        'value': 0,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      }
    },
    'Social': {
      'Animal Ken':{
        'value': 0,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Empathy':{
        'value': 2,
        'rote': false,
        'asset': false,
        'specialty': true,
        'description': "Emotion"
      },
      'Expression':{
        'value': 1,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Intimidation':{
        'value': 1,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Persuasion':{
        'value': 2,
        'rote': true,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Socialize':{
        'value': 1,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Streetwise':{
        'value': 0,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      },
      'Subterfuge':{
        'value': 0,
        'rote': false,
        'asset': false,
        'specialty': false,
        'description': ""
      }
    }
  },
  arcana: {
    'Death': {
      value: 0,
      description: ""
    },
    'Fate': {
      value: 0,
      description: ""
    },
    'Forces': {
      value: 1,
      description: ""
    },
    'Life': {
      value: 0,
      description: ""
    },
    'Matter': {
      value: 0,
      description: "Inferior"
    },
    'Mind': {
      value: 4,
      description: ""
    },
    'Prime': {
      value: 0,
      description: ""
    },
    'Space': {
      value: 3,
      description: ""
    },
    'Spirit': {
      value: 0,
      description: ""
    },
    'Time': {
      value: 0,
      description: ""
    },
  },
  merits:[
    {
      name: {
        value: "Free Council Status"
      },
      description: {
        value: ""
      },
      dots: {
        value: 1
      },
      effects: []
    }
  ],
  health:{
    value: 8,
    override:false,
    damage: {
      bashing:2,
      lethal:1,
      aggravated:1
    }
  },
  mana:{
    value: 12
  },
  gnosis:{
    value:3
  },
  willpower:{
    max: 6,
    value: 6
  },
  wisdom:{
    value: 7
  },
  stats:{
    size:{
      value:6,
      override:false
    },
    speed:{
      value:10,
      override:false
    },
    defense:{
      value:2,
      override:true
    },
    armor:{
      value:3,
      override:false
    },
    initiative:{
      value:4,
      override:false
    }
  },
  advancement:{
    beats:{
      value:2
    },
    experience:{
      value:0
    },
    arcaneBeats:{
      value:1
    },
    arcaneExperience:{
      value:1
    }
  },
  rotes:[
    {
      arcanum: {value:'Mind'},
      level: {value:2},
      spell: {value:'Mental Shielding'},
      roteSkill: {value:'Academics'},
      creator: {value:''},
      description: {value:''}
    },
    {
      arcanum: {value:'Mind'},
      level: {value:3},
      spell: {value:'Read the Depths'},
      roteSkill: {value:'Empathy'},
      creator: {value:''},
      description: {value:''}
    },
    {
      arcanum: {value:'Space'},
      level: {value:2},
      spell: {value:'Break Boundaries'},
      roteSkill: {value:'Persuasion'},
      creator: {value:''},
      description: {value:''}
    }
  ],
  praxes:[
    {
      arcanum: {value: 'Mind'},
      level: {value: 2},
      spell: {
        value: 'Memory Hole'
      },
      description: ''
    },
    {
      arcanum: {value: 'Mind'},
      level: {value: 4},
      spell: {value: 'Gain Skill'},
      description: {value: ''}
    },
    {
      arcanum: {value: 'Mind'},
      level: {value: 2},
      spell: {value: 'Incognito Presence'},
      description: {value: ''}
    }
  ],
  modifiers:[
    {
      active: false,
      description: "Inspired",
      effects: [
        {
          effect: "Academics",
          value: 1,
          eightAgain: false,
          nineAgain: false
        }
      ]
    },
    {
      active:true,
      description: 'Nimbus Tilt',
      effects:[
        {
          effect: 'Resolve',
          value: -1,
          eightAgain: false,
          nineAgain: false
        },
        {
          effect: 'Presence',
          value: 1,
          eightAgain: false,
          nineAgain: false
        },
        {
          effect: 'Manipulation',
          value: 1,
          eightAgain: false,
          nineAgain: false
        },
        {
          effect: 'Composure',
          value: 1,
          eightAgain: false,
          nineAgain: false
        }
      ]
    }
  ],
  yantras:[
    {
      description: 'Dedicated Magical Tool',
      effects: [
        {
          effect: 'Dice Pool',
          value: 1,
          eightAgain: false,
          nineAgain: false
        },
        {
          effect: 'Paradox',
          value: -2,
          eightAgain: false,
          nineAgain: false
        }
      ]
    }
  ],
  activeModifiers:[]
}

export default{
  James
}