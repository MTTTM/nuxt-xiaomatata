<template>
  <div>
    <carouselBox />
    <b-container style="margin-top: 1rem">
      <breadCrumb class="w-100" />
    </b-container>
    <b-container>
      <b-row class="w-100" no-gutters>
        <b-col lg="9" md="12" sm="12" class="pr-3">
          <b-card
            no-body
            class="overflow-hidden card-list-item"
            v-for="(item, index) in list"
            :key="index"
            @click="artcleClick(index)"
          >
            <articleListItem />
          </b-card>
          <cmSpinner :loading="scroll_loading" />
        </b-col>
        <b-col lg="3" md="12" sm="12" class="cm-sm-hide">
          <recommendList />
          <bloggerRanking />
          <latestComment />
          <aboutMe />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import breadCrumb from "../components/breadCrumb";
import scrollLoad from "../mixins/scrollLoad";
import cmSpinner from "../components/cmSpinner";
import recommendList from "../components/recommendList";
import bloggerRanking from "../components/bloggerRanking";
import latestComment from "../components/latestComment";
import aboutMe from "../components/aboutMe";
import carouselBox from "../components/carouselBox";
import articleListItem from "../components/articleListItem";
import { mapMutations } from "vuex";
export default {
  mixins: [scrollLoad],
  components: {
    breadCrumb,
    cmSpinner,
    recommendList,
    bloggerRanking,
    latestComment,
    aboutMe,
    carouselBox,
    articleListItem,
  },
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
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
  },
  head() {
    return {
      title: this.title,
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
    this.$store.commit("system/setBreadList", [
      {
        text: "首页",
        href: "#",
      },
    ]);
  },
  methods: {
    scrollFn() {
      console.log("加载中");
      setTimeout(() => {
        this.scroll_loading = false;
        this.list = [...this.list, ...[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]];
      }, 1000);
    },
    artcleClick(id) {
      this.$router.push({
        path: `/article?id=${id}`,
      });
    },
  },
};
</script>
