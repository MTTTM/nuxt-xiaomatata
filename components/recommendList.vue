<template>
  <b-card no-body>
    <template #header>
      <h4 class="mb-0">{{ title }}</h4>
    </template>

    <b-card-body>
      <b-card-text v-for="item in list" :key="item.id">
        <NuxtLink :to="'/article?id=' + item.id">
          <span
            class="text-nowrap text-truncate"
            :class="[showEye ? 'txt' : 'txt-100']"
            >{{ item.title }}</span
          >
          <span class="cm-sub-txt" v-if="showEye"
            ><b-icon icon="eye"></b-icon> {{ item.count }}</span
          >
        </NuxtLink>
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
    list: {
      default: [],
      type: Array,
    },
    showEye: {
      default: true,
      type: Boolean,
    },
  },
  methods: {
    artcleClick(id) {
      this.$router.push({
        path: `/article?id=${id}`,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.txt {
  max-width: 80%;
  display: inline-block;
}
.txt-100 {
  max-width: 95%;
  display: inline-block;
}
</style>