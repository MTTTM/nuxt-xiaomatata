<template>
  <b-breadcrumb :items="list"></b-breadcrumb>
</template>
<script>
export default {
  computed: {
    list() {
      return this.$store.state.system.breadList;
    },
  },
};
</script>