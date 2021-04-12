<template>
  <b-overlay :show="busy" no-wrap fixed>
    <template #overlay>
      <div v-if="processing" class="text-center p-4 text-light">
        <b-spinner variant="primary" label="Spinning"></b-spinner>
      </div>
      <div v-else ref="dialog" class="text-center" style="width: 260px">
        <b-card header="提示" header-tag="header">
          <b-card-text>{{ title }}</b-card-text>
          <div class="d-flex text-center" style="justify-content: center">
            <b-button
              variant="secondary"
              size="sm"
              class="mr-3"
              @click="onCancel"
            >
              取消
            </b-button>
            <b-button variant="primary" size="sm" @click="onOK">确定</b-button>
          </div>
        </b-card>
      </div>
    </template>
  </b-overlay>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
    },
    okCallback: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      busy: false,
      processing: false,
    };
  },
  methods: {
    onCancel() {
      this.busy = false;
    },
    onOK() {
      this.$emit("ok", this.okCallback);
    },
    trigger(bool = false) {
      this.busy = bool;
    },
    setProcessing(bool = false) {
      this.processing = bool;
      if (!bool) {
        this.busy = false;
      }
    },
  },
};
</script>