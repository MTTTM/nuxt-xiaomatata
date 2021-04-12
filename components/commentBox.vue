<template>
  <b-card no-body class="overflow-hidden">
    <template #header>
      <h4 class="mb-0">评论</h4>
    </template>
    <b-card-body>
      <b-form-textarea
        id="textarea"
        v-model="content"
        placeholder="请输入您的评论..."
        rows="3"
        size="sm"
        :state="validContent"
        no-auto-shrink
      ></b-form-textarea>
      <p class="limit">{{ content.length }}/100</p>
    </b-card-body>

    <b-card-footer>
      <b-container fluid>
        <b-row align-h="end">
          <b-button :variant="canPush ? 'primary' : 'secondary'" @click="submit"
            >提交</b-button
          >
        </b-row>
      </b-container>
    </b-card-footer>
  </b-card>
</template>
<script>
export default {
  computed: {
    canPush() {
      return (
        String(this.content).trim().length > 0 || this.abledSubmit == false
      );
    },
    validContent() {
      if (
        String(this.content).trim().length > 0 &&
        String(this.content).trim().length < 100
      ) {
        return true;
      } else if (String(this.content).trim().length > 100) {
        return false;
      } else {
        return null;
      }
    },
  },
  data() {
    return {
      content: "",
      abledSubmit: false,
    };
  },
  methods: {
    submit() {
      if (!this.abledSubmit) {
        return;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.limit {
  text-align: right;
}
</style>
