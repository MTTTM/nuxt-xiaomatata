<template>
  <b-card no-body>
    <template #header>
      <h4 class="mb-0">{{ title }}</h4>
    </template>

    <b-card-body>
      <b-card-text v-for="item in list" :key="item.id">
        <a :href="'?date=' + item.title" class="card-link">
          <span class="txt">{{ item.title }}</span>
          <span class="cm-sub-txt">{{ item.count }} 篇</span>
        </a>
      </b-card-text>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  props: {
    title: {
      default: "热门文章",
    },
    showEye: {
      default: false,
    },
    list: {
      default: [],
      type: Array,
    },
  },
};
</script>
<style lang="scss" scoped>
.txt {
  max-width: 80%;
  display: inline-block;
}
.card-link {
  display: flex;
  justify-content: space-between;
}
</style>