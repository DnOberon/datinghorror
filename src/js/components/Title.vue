<template>
  <el-row :gutter="20">

    <h1 style="margin-bottom: 0px;">
      <vue-typer
        :pre-type-delay="3000"
        text="Puzzled and Dating a Monster."
        :repeat="0"></vue-typer>
    </h1>

    <el-col :span="12" :offset="6">
      <h2 >
      <vue-typer
        :text="titleText"
        @completed="ready = true"
        :repeat="0"
        :pre-type-delay="7000"></vue-typer>
      </h2>
    </el-col>


    <transition name="fade">
      <el-row :gutter="20" v-show="ready">
        <el-col :span="6" :offset="6" style="margin-top: 10px;">
          <el-button type="info" class="pixel" @click="next('melinda')">Date Melinda</el-button>
        </el-col>

        <el-col :span="6" style="margin-top: 10px;">
          <el-button type="info" class="pixel" @click="next('robert')">Date Robert</el-button>
        </el-col>

      </el-row>

    </transition>

    <img :src="require('../../assets/props/bench.png')">
  </el-row>
</template>

<script>
  import { VueTyper } from 'vue-typer';
  import { Howl } from 'howler';

  export default {
    name: 'Title',

    components: { VueTyper },

    data() {
      return {
        titleText: 'Small talk could save your life.',
        ready: false,
        titleSong: new Howl({
          src: [require('../../assets/titlescreen.wav')],
          autoplay: true,
          html5: true,
        }),
      };
    },

    methods: {
      next(date) {
        this.titleSong.fade(1.0, 0.0, 15000);


        this.$router.push({ path: 'conversation', query: { date } });
      },
    },
  };
</script>

<style>
  h1, h2 {
    font-family: 'VT323', monospace;
    font-weight: normal;
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
    transition: opacity 2.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

</style>
