<template>
  <b-row no-gutters :class="[singe ? 'single' : '']">
    <b-col md="3" v-if="!singe">
      <b-card-img
        src="https://picsum.photos/400/400/?image=20"
        alt="Image"
        class="rounded-0 cart-list-item-img"
      ></b-card-img>
    </b-col>
    <b-col :md="txtNum">
      <b-card-body title="Horizontal Card">
        <b-card-text>
          This is a wider card with supporting text as a natural lead-in to
          additional content. This content is a little bit longer.
        </b-card-text>
        <b-card-text>作者:小熊 时间:2020/10/10 12:12:23</b-card-text>
      </b-card-body>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    singe: {
      default: false,
    },
  },
  computed: {
    txtNum() {
      return this.singe ? 12 : 9;
    },
  },
};
</script>
<style lang="scss" scoped>
.single {
  .card-body {
    padding: 0;
  }
  .card-title {
    margin-bottom: 0.2rem;
  }
  .card-text {
    margin-bottom: 0.2rem;
    line-height: 1.2;
  }
}
</style>