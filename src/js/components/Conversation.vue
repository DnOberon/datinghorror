<template>
  <div>

    <el-container>
      <el-aside width="400px">
        <div style="position: fixed; margin-left:20px;">
          <el-row :gutter="20">
            <el-col :span="24">
              <h1>First Conversation</h1>
              <h1>Date: {{date}}</h1>
              <h1>Monster Level: {{monster}}</h1>
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
                  <h3>Starting Point</h3>
                </el-card>
              </el-col>

              <el-col :span="24" v-for="piece in set" :key="piece.name" style="margin-bottom:5px;">
                <el-card shadow="always" :class="piece.background">
                  <h3>{{piece.name}}</h3>
                </el-card>
              </el-col>

              <el-col :span="24" style="margin-bottom:15px;">
                <el-card shadow="hover" style="border-style:dashed;border-color:lightgrey">
                  <el-button type="primary" @click="dialogVisible = true"
                             icon="el-icon-circle-plus-outline"></el-button>

                </el-card>
              </el-col>

              <el-col :span="24" style="margin-bottom:5px;">
                <el-card shadow="always">
                  <h3>{{set.length}}/10</h3>
                </el-card>
              </el-col>

            </el-col>

          </el-row>


        </el-main>
      </el-container>


    </el-container>

    <el-dialog
      title="Pieces"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
    >
      <el-row :gutter="20" style="margin:auto auto">
        <el-col :span="6" v-for="piece in pieces" :key="piece.name" style="margin-bottom: 5px;">
          <el-card shadow="always">
            <h3 @click="openConversation(piece)">{{piece.name}}</h3>

          </el-card>
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
        <h2>You
          <h3>
            <vue-typer
              :pre-type-delay="500"
              :text="currentPiece.you"
              :repeat="0"></vue-typer>
          </h3>
        </h2>

        <h2><span style="text-transform: capitalize">{{date}}</span>
          <h3>
            <vue-typer
              :text="reply(currentPiece)"
              :repeat="0"
              @completed="closeConversation(currentPiece)"
              :pre-type-delay="4000"></vue-typer>
          </h3>
        </h2>

        <!-- TODO swap for class instead of separate buttons? -->
       <transition name="fade">
        <el-button v-show="forward" @click="finish">Done</el-button>
       </transition>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  import { VueTyper } from 'vue-typer';
  import conversation from '../utils/conversation';

  export default {
    components: { draggable, VueTyper },

    data() {
      return {
        dialogVisible: false,
        conversationOpen: false,
        forward: false,
        date: this.$route.query.date,

        currentPiece: {},
        monster: 0,

        set: [],
        pieces: conversation.pieces,

      };
    },

    name: 'AudioPuzzle',

    methods: {
      openConversation(piece) {
        this.currentPiece = piece;
        this.forward = false;

        this.monster += piece.monster;

        this.dialogVisible = false;
        this.conversationOpen = true;
      },

      reply(currentPiece) {
        return (this.date === 'melinda' ? currentPiece.melinda : currentPiece.robert);
      },

      closeConversation(piece) {
        this.set.push(piece);
        this.pieces = this.pieces.filter(val => val.name !== piece.name);

        this.forward = true;
      },

      finish() {
        this.conversationOpen = false;

        if (this.set.length < 10) {
          return;
        }

        if (this.monster <= 0) {
          this.$router.push({ path: 'ending/good' });
          return;
        }

        if (this.monster > 0 && this.monster < 10) {
          this.$router.push({ path: 'ending/neutral' });
          return;
        }

        this.$router.push({ path: 'ending/bad' });
      },
    },
  };
</script>

<style>
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

  .el-dialog {
    margin-left: 55px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

</style>
