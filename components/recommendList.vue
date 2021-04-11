<template>
  <b-card no-body>
    <template #header>
      <h4 class="mb-0">{{ title }}</h4>
    </template>

    <b-card-body>
      <b-card-text v-for="(item, index) in list" :key="index">
        <a href="#" class="card-link"
          >你好阿斯蒂芬，污泥起舞污泥起舞污泥起舞
          <span class="cm-sub-txt" v-if="showEye"
            ><b-icon icon="eye"></b-icon> 100</span
          >
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
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
};
</script>