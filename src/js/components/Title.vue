<template>
  <el-row>
    <el-col :span="24">
      <vue-typer :text="titleText" @completed="ready = true" :repeat="0"></vue-typer>
    </el-col>

    <transition name="fade">
      <el-col v-show="ready" :span="24">
        <el-button type="info" @click="next">Start</el-button>
      </el-col>
    </transition>

  </el-row>
</template>

<script>
  import { VueTyper } from 'vue-typer';

  export default {
    name: 'Title',

    components: { VueTyper },

    data() {
      return {
        titleText: 'This is a placeholder text. This is a horror dating simulator.',
        ready: false,
      };
    },

    methods: {
      next() {
        this.$router.push({ path: 'first-conversation' });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
