<template>
  <div>

    <el-container>
      <el-aside width="400px">
        <div style="position: fixed;">
          <el-row :gutter="20">
            <el-col :span="24">
              <component :is="date"
                         :monster-level="monster"
              />
            </el-col>
          </el-row>
        </div>
      </el-aside>

      <el-container>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="12">

              <el-col :span="24" style="margin-bottom:5px;">
                <el-card shadow="always" style="background:darkcyan; color:white">
                  <h1>Awkward Introduction</h1>
                </el-card>
              </el-col>

              <el-col :span="24" v-for="piece in set" :key="piece.name" style="margin-bottom:5px;">
                <el-card shadow="always" :class="piece.background">
                  <h1>{{piece.name}}</h1>
                </el-card>
              </el-col>

              <el-col :span="24" style="margin-bottom:15px;">
                <el-card shadow="hover" style="border-style:dashed;border-color:lightgrey">

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="click to make small talk"
                    :disabled="!help"
                    placement="bottom">

                    <el-button
                      @click="dialogVisible = true"
                      icon="el-icon-circle-plus-outline">
                    </el-button>

                  </el-tooltip>

                </el-card>
              </el-col>

              <el-col :span="24" style="margin-bottom:5px;">
                <el-card shadow="always">
                  <h1>{{set.length}}/7</h1>
                </el-card>
              </el-col>

            </el-col>

          </el-row>


        </el-main>
      </el-container>


    </el-container>

    <el-dialog
      title="Small Talk"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
    >
      <el-row :gutter="20" style="margin:auto auto">
        <el-col :span="6" v-for="piece in pieces" :key="piece.name" style="margin-bottom: 5px;">
          <div @click="openConversation(piece)" style="cursor:pointer">
            <el-card shadow="always">
              <h2>{{piece.name}}</h2>
            </el-card>
          </div>

        </el-col>
      </el-row>
    </el-dialog>

    <el-dialog
      :visible.sync="conversationOpen"
      :modal-append-to-body="false"
      :show-close="forward"
      :close-on-click-modal="forward"
      :close-on-press-escape="forward">
      <div>
        <h1>You
          <h3>
            <vue-typer
              :pre-type-delay="500"
              :text="currentPiece.you"
              :repeat="0"></vue-typer>
          </h3>
        </h1>

        <h1><span style="text-transform: capitalize">{{date}}</span>
          <h3>
            <vue-typer
              :text="reply(currentPiece)"
              :repeat="0"
              @completed="closeConversation(currentPiece)"
              :pre-type-delay="currentPiece.delay"></vue-typer>
          </h3>
        </h1>

        <transition name="fade">
          <el-button v-show="forward" @click="finish">Ok</el-button>
        </transition>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  import { VueTyper } from 'vue-typer';
  import { Howl } from 'howler';
  import conversation from '../utils/conversation';

  import Melinda from './Melinda';
  import Robert from './Robert';

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  export default {
    components: { draggable, VueTyper, Melinda, Robert },

    data() {
      return {
        dialogVisible: false,
        conversationOpen: false,
        forward: false,
        help: true,
        date: this.$route.query.date,

        closeSong: new Howl({
          src: [require('../../assets/final.wav')],
          volume: 0.0,
        }),

        endingSong: new Howl({
          src: [require('../../assets/win.wav')],
          volume: 0.0,
        }),

        currentPiece: {},
        monster: 0,

        set: [],
        pieces: shuffle(conversation.pieces),

      };
    },

    name: 'AudioPuzzle',

    methods: {
      openConversation(piece) {
        this.currentPiece = piece;
        this.help = false;


        this.dialogVisible = false;
        this.conversationOpen = true;

        if (this.set.length === 3) {
          this.closeSong.play();

          this.closeSong.fade(0.0, 1.0, 2000);
        }
      },

      reply(currentPiece) {
        return (this.date === 'melinda' ? currentPiece.melinda : currentPiece.robert);
      },

      closeConversation(piece) {
        this.set.push(piece);
        this.pieces = this.pieces.filter(val => val.name !== piece.name);

        this.monster += piece.monster;
        this.forward = true;
      },

      finish() {
        this.forward = false;
        this.conversationOpen = false;

        if (this.set.length < 7) {
          return;
        }

        this.closeSong.fade(1.0, 0.0, 500);

        this.endingSong.play();
        this.endingSong.fade(0.0, 1.0, 1000);

        this.$router.push({ path: 'ending', query: { monster: this.monster } });
      },
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
    font-size: 0.9em;
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
