<template>
  <el-row :gutter="20">

    <h1>
      <vue-typer text="Puzzled and Dating a Monster." :repeat="0"></vue-typer>
    </h1>

    <el-col :span="12" :offset="6">
      <h2>
      <vue-typer
        :text="titleText"
        @completed="ready = true"
        :repeat="0"
        :pre-type-delay="3000"></vue-typer>
      </h2>
    </el-col>


    <transition name="fade">
      <el-row :gutter="20" v-show="ready">
        <el-col :span="6" :offset="6" style="margin-top: 10px;">
          <el-button type="info" class="pixel" @click="next('female')">Date Melinda</el-button>
        </el-col>

        <el-col :span="6" style="margin-top: 10px;">
          <el-button type="info" class="pixel" @click="next('male')">Date Robert</el-button>
        </el-col>

      </el-row>

    </transition>

    <img :src="require('../../assets/props/bench.png')">
  </el-row>
</template>

<script>
  import { VueTyper } from 'vue-typer';

  export default {
    name: 'Title',

    components: { VueTyper },

    data() {
      return {
        titleText: 'Small talk could save your life.',
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
    font-family: 'VT323', monospace;
    font-weight: normal;
    margin-bottom: 0px;
  }

  .pixel{
    font-family: 'VT323', monospace;
    font-weight: normal;
    font-size: 1.5em;
    margin-top:10px;
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

  .vue-typer {
    font-family: 'VT323', monospace;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

</style>
