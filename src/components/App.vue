<template>
  <div id="app">
    <div>
      <el-button @click="workflowVisible = true">Workflow Start</el-button>
      <workflow-status></workflow-status>
    </div>
    <div>
      <editor :id="storeEditor.name+'-editor'" :ref="storeEditor.name" :mode="storeEditor.mode" :editable="storeEditor.editable"
        :visible="storeEditor.visible" :content="storeEditor.content" />
    </div>
  </div>
</template>


<script>
  import WorkflowStatus from './WorkflowStatus.vue'
  import Editor from './Editor.vue'
  import { Store } from '../store/Store'

  export default {
    data() {
      return {
        activeNames: ['1'],
        tabPosition: 'left',
        workflowVisible: false,
        inputFormVisible: false,
      };
    },

    computed: {
      storeEditor() {
        return {
          name: 'Editor',
          mode: 'JS',
          visible: true,
          editable: true,
          content: JSON.stringify(Store.getJob())
        }
      }
    },

    methods: {
    },

    components: {
      WorkflowStatus,
      InputForm,
      Inputs,
      Editor
    }

  }

</script>

<style>
  #app {
    /* font-family: Helvetica, sans-serif; */
    /* text-align: center; */
    font-family: HelveticaNeue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-weight: 400;
    /* font-size: x-small; */
  }

  /* .el-step__title.is-process {
    font-weight: 600;
  } */

  .row-bg-1 .el-button {
    align-content: flex-end;
    text-align: center;
  }

  .row-bg-2 {
    align-content: center;
    justify-content: center;
  }

  .el-col-18 {
    width: 100%;
  }

  .el-dialog--center .el-dialog__body {
    text-align: center;
    padding: 25px 25px 30px;
  }

</style>
