<template>
  <div class="cm-spinner">
    <b-spinner label="Spinning"></b-spinner>
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