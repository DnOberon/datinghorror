<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <h1>Melinda</h1>

      <img :src="profile">
    </el-col>

    <el-col :span="18" :offset="7" style="text-align: left">
      <h3><strong>Eyes: </strong>{{currentStep.eyes}}</h3>
      <h3><strong>Hair: </strong>{{currentStep.hair}}</h3>
      <h3><strong>Age: </strong> Older than you</h3>
      <h3><strong>Likes: </strong>Vegans, Firefly, Eminem</h3>
      <h3><strong>Dislikes: </strong>Cows, Star Trek</h3>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    props: {
      monsterLevel: Number,
    },

    computed: {
      profile() {
        const currentStep = this.steps.find((val, index) => {
          if (val.max > this.monsterLevel) {
            return this.steps[(index >= 1) ? index - 1 : index];
          }

          return false;
        });

        this.currentStep = currentStep;
        return currentStep.img;
      },
    },

    data() {
      return {
        currentStep: {},

        steps: [
          {
            name: 'happy',
            max: 0,
            img: require('../../assets/dates/girl_happy.png'),
            eyes: 'Sparkling',
            hair: 'Purple :)',
          },
          {
            name: 'normal',
            max: 4,
            img: require('../../assets/dates/girl_normal.png'),
            eyes: 'Has them',
            hair: '....Purple',
          },
          {
            name: 'first',
            max: 7,
            img: require('../../assets/dates/girl_first.png'),
            eyes: 'Sparks',
            hair: 'Not so purple',
          },
          {
            name: 'second',
            max: 15,
            img: require('../../assets/dates/girl_penultimate.png'),
            eyes: 'Blazing',
            hair: 'Greenish?',
          },
          {
            name: 'final',
            max: 1000,
            img: require('../../assets/dates/girl_final.png'),
            eyes: 'Fiery pits',
            hair: 'FREAKING SNAKES',
          },
        ],
      };
    },
  };
</script>

<style>
  h1, h2, h3, p {
    font-family: 'VT323', monospace;
    font-weight: normal;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.1em;
  }

  .good {
    background: #67c23a;
    color: white;
  }

  .bad {
    background: lightcoral;
    color: white;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

</style>
