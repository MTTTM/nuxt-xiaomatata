<template>
  <div class="cm-spinner">
    <b-spinner label="Spinning" v-if="loading"></b-spinner>
    <span v-else>---我是有底线的---</span>
  </div>
</template>
<script>
export default {
  props: {
    loading: {
      default: false,
    },
    noData: {
      default: false,
    },
  },
};
</script>