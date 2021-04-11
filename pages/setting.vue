<template>
  <div>
    <b-container style="margin-top: 5rem" fluid>
      <b-row class="w-100" no-gutters>
        <b-col lg="11" md="12" sm="12" class="pr-1" style="margin-bottom: 1rem">
          <nuxt-child />
        </b-col>
        <b-col lg="1" md="12" sm="12">
          <settingSide />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      rows: 100,
      perPage: 1,
      currentPage: 5,
      loading: false,
    };
  },
  computed: {
    settingCollapse() {
      return this.$store.system.settingCollapse;
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
    console.log("this", this.$route.query.classify);
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
  },
};
</script>
<style>
</style>
