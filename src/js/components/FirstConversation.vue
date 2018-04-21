<template>
  <div>
    <el-row>
      <h1>First Conversation</h1>
      <el-button type="success" round @click="playPuzzle">Play</el-button>
    </el-row>

    <el-row :gutter="20">
      <vue-typer :text="his" :repeat="0"></vue-typer>
      <vue-typer :text="hers" :repeat="0"></vue-typer>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="4">
            <el-card shadow="always" style="background:#67c23a; color:white">
              <h3>Starting Point</h3>
              <el-popover
                ref="pop"
                placement="top-start"
                content="Thanks for coming!"
                trigger="hover">
                <i slot="reference" class="el-icon-zoom-in"></i>
              </el-popover>
            </el-card>
      </el-col>

      <draggable v-model="set" :options="{group:'together'}">
        <transition-group>
          <el-col :span="4" v-for="piece in set" :key="piece.name">
            <el-card shadow="always" :class="piece.background" v-show="checkDefault(piece.default)">
              <h3>{{piece.name}}</h3>

              <el-popover
                v-show="!piece.default"
                ref="pop"
                placement="top-start"
                :content="piece.you"
                trigger="hover">
                <i class="el-icon-zoom-in" slot="reference"></i>
              </el-popover>

            </el-card>
          </el-col>
        </transition-group>
      </draggable>

      <el-col :span="4">
        <el-card shadow="always" style="background:#909399; color:white">
          <h3>End</h3>
          <el-popover
            ref="pop"
            placement="top-start"
            content="Thanks for coming!"
            trigger="hover">
            <i slot="reference" class="el-icon-zoom-in"></i>
          </el-popover>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
     <draggable v-model="pieces" :options="{group:'together'}">
       <transition-group>
         <el-col :span="4" v-for="piece in pieces" :key="piece.name">
           <el-card shadow="always" :class="piece.background">
             <h3>{{piece.name}}</h3>

             <el-popover
               ref="pop"
               placement="top-start"
               :content="piece.you"
               trigger="hover">
               <i class="el-icon-zoom-in" slot="reference"></i>
             </el-popover>
           </el-card>
         </el-col>
       </transition-group>
     </draggable>
    </el-row>

  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  import { VueTyper } from 'vue-typer';

  export default {
    components: { draggable, VueTyper },

    data() {
      return {
        his: '',
        hers: '',
        set: [
          {
            name: 'Drag Blocks Here',
            default: true,
          },
        ],

        // color is element specific
        pieces: [
          {
            name: 'Weather',
            you: 'It looks like it might rain.',
            them: 'Really?',
            anger: 1,
          },
          {
            name: 'Hair',
            you: 'I like your hair - it is very poofy',
            them: '.....',
            anger: 5,
          },
          {
            name: 'Piece 3',
            you: 'It looks like it might rain.',
            them: 'Really?',
            anger: 1,
          },
        ],
      };
    },

    name: 'AudioPuzzle',

    methods: {
      playPuzzle() {
        this.his = "You: I'm here";
      },

      checkDefault(isDefault) {
        if (isDefault && this.set.length > 1) {
          return false;
        }

        return true;
      },
    },

  };
</script>

<style>
  .his{
    background: darkcyan;
    color: white;
  }

  .hers{
    background: lightcoral;
  }

  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
</style>
