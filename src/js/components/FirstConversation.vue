<template>
  <div>

  <el-container>
    <el-aside width="400px">
      <div style="position: fixed; margin-left:20px;">
      <el-row :gutter="20">
        <el-col :span="24">
        <h1>First Conversation</h1>
        <h1>Monster Level: {{monster}}</h1>
        </el-col>
      </el-row>
      </div>
    </el-aside>

    <el-container>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="16">

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
                <el-button type="primary" @click="dialogVisible = true" icon="el-icon-circle-plus-outline"></el-button>



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
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false">
      <div>
        <h2>You<h3><vue-typer :text="currentPiece.you" :repeat="0"></vue-typer> </h3></h2>

        <h2>Them<h3><vue-typer
          :text="currentPiece.them"
          :repeat="0"
          @completed="closeConversation(currentPiece)"
          :pre-type-delay="0"></vue-typer> </h3></h2>

        <el-button v-show="badButton" @click="finish">Bad</el-button>
        <el-button v-show="goodButton" @click="finish">Good</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  import { VueTyper } from 'vue-typer';

  export default {
    components: { draggable, VueTyper },

    data() {
      return {
        dialogVisible: false,
        conversationOpen: false,
        goodButton: false,
        badButton: false,

        currentPiece: {},
        monster: 0,

        set: [
          {
            name: 'Weather',
            you: 'It looks like it might rain.',
            them: 'Really?',
            monster: 1,
            background: 'bad',
          },
          {
            name: 'Hair',
            you: 'I like your hair - it is very poofy',
            them: '.....',
            monster: 5,
            background: 'bad',
          },
          {
            name: 'Hobby: Trains',
            you: 'I love collecting toy trains.',
            them: 'Me too!',
            monster: -1,
            background: 'good',
          },
          {
            name: 'Hobby: Stamps',
            you: 'I love collecting stamps.',
            them: 'Is this the 1960\'s?',
            monster: 1,
            background: 'good',
          },
          {
            name: 'Mother',
            you: 'Sorry, my mother couldn\'t make it.',
            them: 'I\'m glad...',
            monster: 5,
            background: 'bad',
          },
          {
            name: 'Nervous',
            you: 'I am a little nervous, sorry.',
            them: 'It\'s ok, I am too.',
            monster: -5,
            background: 'good',
          },
          {
            name: '1',
            you: '1',
            them: '1',
            monster: -5,
            background: 'good',
          },
          {
            name: '2',
            you: '2',
            them: '2',
            monster: -5,
            background: 'good',
          },
          {
            name: '3',
            you: '3',
            them: '3',
            monster: -5,
            background: 'good',
          },
        ],

        // color is element specific
        pieces: [
          {
            name: 'Weather',
            you: 'It looks like it might rain.',
            them: 'Really?',
            monster: 1,
            background: 'bad',
          },
          {
            name: 'Hair',
            you: 'I like your hair - it is very poofy',
            them: '.....',
            monster: 5,
            background: 'bad',
          },
          {
            name: 'Hobby: Trains',
            you: 'I love collecting toy trains.',
            them: 'Me too!',
            monster: -1,
            background: 'good',
          },
          {
            name: 'Hobby: Stamps',
            you: 'I love collecting stamps.',
            them: 'Is this the 1960\'s?',
            monster: 1,
            background: 'good',
          },
          {
            name: 'Mother',
            you: 'Sorry, my mother couldn\'t make it.',
            them: 'I\'m glad...',
            monster: 5,
            background: 'bad',
          },
          {
            name: 'Nervous',
            you: 'I am a little nervous, sorry.',
            them: 'It\'s ok, I am too.',
            monster: -5,
            background: 'good',
          },
          {
            name: '1',
            you: '1',
            them: '1',
            monster: -5,
            background: 'good',
          },
          {
            name: '2',
            you: '2',
            them: '2',
            monster: -5,
            background: 'good',
          },
          {
            name: '3',
            you: '3',
            them: '3',
            monster: -5,
            background: 'good',
          },
          {
            name: '4',
            you: '4',
            them: '4',
            monster: 5,
            background: 'good',
          },
          {
            name: '5',
            you: '5',
            them: '5',
            monster: 15,
            background: 'good',
          },
        ],
      };
    },

    name: 'AudioPuzzle',

    methods: {
      openConversation(piece) {
        this.currentPiece = piece;
        this.goodButton = false;
        this.badButton = false;

        this.monster += piece.monster;

        this.dialogVisible = false;
        this.conversationOpen = true;
      },

      closeConversation(piece) {
        this.isGoodButton(piece.monster <= 0);
        this.set.push(piece);

        this.pieces = this.pieces.filter(val => val.name !== piece.name);
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

      isGoodButton(good) {
        if (good) {
          this.goodButton = true;
          return;
        }

        this.badButton = true;
      },
    },
  };
</script>

<style>
  .good{
    background: #67c23a;
    color: white;
  }

  .bad{
    background: lightcoral;
    color:white;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-dialog {
    margin-left:55px;
  }

</style>
