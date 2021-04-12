<template>
  <b-card header-tag="header" no-body class="cm-sticky">
    <template #header>
      <h4 class="mb-0">设置</h4>
    </template>
    <!-- <b-card-footer>内容管理</b-card-footer> -->
    <b-list-group flush>
      <b-list-group-item v-for="item in cntAdmin" :key="item.id">
        <NuxtLink
          :to="item.path"
          :class="[
            'cm-cursor',
            isActive(item.path) ? 'list-group-item-active' : '',
          ]"
        >
          {{ item.title }}
        </NuxtLink>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>
<script>
export default {
  data() {
    return {
      cntAdmin: [
        {
          title: "文章管理",
          id: 1,
          path: "/setting",
        },
        {
          title: "发文H5",
          path: "/setting/post",
          id: 2,
        },
        {
          title: "发文cmd",
          path: "/setting/postcmd",
          id: "2-1",
        },
        {
          title: "管理评论",
          path: "/setting/commen",
          id: 3,
        },
        {
          title: "我收藏的",
          path: "/setting/favorites",
          id: 4,
        },
        {
          title: "我关注的",
          path: "/setting/attention",
          id: 5,
        },
        {
          title: "关注我的",
          path: "/setting/followme",
          id: 5,
        },
      ],
    };
  },
  computed: {
    validSearch() {
      return (
        (this.$route.query.search &&
          String(this.$route.query.search).trim().length > 0) ||
        (this.search && String(this.search).trim().length > 0)
      );
    },
    pancelTitle() {
      if (this.$route.query && this.$route.query.classify) {
        return `分类:${this.$route.query.classify}`;
      } else if (this.$route.query && this.$route.query.date) {
        return `时间:${this.$route.query.date}`;
      }
      return "文章列表";
    },
  },
  head() {
    return {
      title: "博客",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  created() {
    console.log("this", this.$route.path);
  },
  methods: {
    artcleClick(id) {
      this.$router.push({
        path: `/article?id=${id}`,
      });
    },
    pageChange(page) {
      console.log("page", page);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    isActive(path) {
      return this.$route.path == path;
    },
  },
};
</script>