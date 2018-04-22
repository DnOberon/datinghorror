<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <vue-typer :text="titleText" @completed="ready = true" :repeat="0"></vue-typer>
    </el-col>

    <transition name="fade">
      <el-col v-show="ready" :span="24">
        <el-button type="info" @click="next('female')">Start Female</el-button>
        <el-button type="info" @click="next('male')">Start Male</el-button>
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
      next(sex) {
        this.$router.push({ path: 'first-conversation', query: { sex } });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  .vue-typer{
    font-family: 'VT323', monospace;
  }

  .vue-typer .custom.caret {
    width: 10px;
    background-color: #3F51B5;
  }
</style>
