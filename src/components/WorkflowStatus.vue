<template>
  <div>
    <el-dialog title="URMS Client Workflow" :visible.sync=_workflowVisible center width="600px">
      <el-row type="flex" class="row-bg-1">
        <el-col center>
          <!-- <el-button @click="next">Next step</el-button> -->
          <el-button @click="next" type="primary" icon="el-icon-caret-right" circle></el-button>
          <br>
          <br>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg-1">
        <el-col :span="18">
          <el-steps :active="active" finish-status="success" align-center>
            <el-step title="Generate Job" description="CREATED"></el-step>
            <el-step title="Dispatch Job" description="DISPATCHED"></el-step>
            <el-step title="Track Status" description="IN PROGRESS"></el-step>
            <el-step title="Complete!" description="DONE"></el-step>
          </el-steps>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        active: 0
      }
    },

    computed: {
      _workflowVisible: {
        get() {
          return this.$parent.workflowVisible
        },
        set(v) {
          this.$parent.workflowVisible = v
        }
      }
    },

    methods: {
      next() {
        if (this.active++ > 3) this.active = 0;
      }
    }

  }

</script>
