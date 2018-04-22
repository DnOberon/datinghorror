<template>
  <h1>ENDING</h1>
</template>

<script>
  export default {
    data() {
      return {
        level: this.$route.query.monster,

        endings: [
          {
            display: 'Drove to Vegas and got married!',
            secondary: 'Got divorced the next day, but hey - still a happy ending right?',
            max: 0,
            img: '',
          },
          {
            display: 'You got their number!',
            secondary: 'At least, we hope it\'s their number. If not - hopefully it\'s that new takeout place.',
            max: 4,
            img: '',
          },
          {
            display: 'If you were an Uber driver - I wouldn\'t expect five stars.,',
            secondary: 'Thankfully no one threw up during the date.',
            max: 7,
            img: '',
          },
          {
            display: 'I hope you didn\'t give your real name. Or address.',
            secondary: 'I\'d also avoid standing near any open windows for a while',
            max: 15,
            img: '',
          },
          {
            display: 'R.I.P',
            secondary: 'It will be a closed casket funeral, potentially empty casket too.',
            max: 1000,
            img: '',
          },
        ],
      };
    },
  };
</script>
