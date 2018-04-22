<template>
  <div>
   <h1>{{ending.display}}</h1>
   <h2>{{ending.secondary}}</h2>

    <img :src="graphic" style="margin-bottom: 20px">

    <h2><a href="/">PLAY AGAIN</a></h2>
  </div>
</template>

<script>

  export default {
    computed: {
      graphic() {
        const ending = this.endings.find((val, index) => {
          if (val.max > this.level) {
            return this.endings[(index >= 1) ? index - 1 : index];
          }

          return false;
        });

        this.ending = ending;
        return ending.img;
      },
    },

    data() {
      return {
        level: this.$route.query.monster,

        ending: {},

        endings: [
          {
            display: 'Drove to Vegas and got married!',
            secondary: 'Got divorced the next day, but hey - still a happy ending right?',
            max: 0,
            img: require('../../assets/props/lasvegas.png'),
          },
          {
            display: 'You got their number!',
            secondary: 'At least, we hope it\'s their number. If not - hopefully it\'s that new takeout place.',
            max: 4,
            img: require('../../assets/props/phone.png'),
          },
          {
            display: 'If you were an Uber driver - I wouldn\'t expect five stars.,',
            secondary: 'Thankfully no one threw up during the date.',
            max: 7,
            img: require('../../assets/props/rating.png'),
          },
          {
            display: 'R.I.P',
            secondary: 'It will be a closed casket funeral, might be empty too.',
            max: 10000,
            img: require('../../assets/props/grave.png'),
          },
        ],
      };
    },
  };
</script>

<style scoped>
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
    font-size: 1.3em;
  }
</style>
