<template>
  <div>
    <carouselBox />
    <b-container style="margin-top: 1rem" fluid>
      <b-row class="w-100" no-gutters>
        <b-col lg="3" md="12" sm="12" class="cm-sm-hide">
          <recommendList title="热门文章" :list="hotArcList" :showEye="true" />
          <recommendList title="最新文章" :list="newArcList" />
          <classifyList title="分类栏目" :list="classifyList" :showEye="true" />
        </b-col>
        <b-col lg="6" md="12" sm="12" class="px-3" style="margin-bottom: 1rem">
          <b-card no-body class="overflow-hidden card-list-item">
            <template #header>
              <h4 class="mb-0">{{ pancelTitle }}</h4>
            </template>
            <b-overlay :show="loading" rounded="sm" fixed>
              <b-list-group flush>
                <b-list-group-item
                  v-for="(item, index) in list"
                  :key="index"
                  @click="artcleClick(index)"
                >
                  <articleListItem :singe="true" :showBtn="true" />
                </b-list-group-item>
              </b-list-group>
            </b-overlay>
            <b-pagination
              style="margin-top: 1rem"
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              align="center"
              @change="pageChange"
            ></b-pagination>
          </b-card>
        </b-col>
        <b-col lg="3" md="12" sm="12">
          <timePostList title="时间分栏" :list="timeList" />
          <latestComment />
          <aboutMe />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import breadCrumb from "../../components/breadCrumb";
import cmSpinner from "../../components/cmSpinner";
import recommendList from "../../components/recommendList";
import bloggerRanking from "../../components/bloggerRanking";
import latestComment from "../../components/latestComment";
import aboutMe from "../../components/aboutMe";
import carouselBox from "../../components/carouselBox";
import commentBox from "../../components/commentBox";
import commentList from "../../components/commentList";
import classifyList from "../../components/classifyList";
import timePostList from "../../components/timePostList";
import { mapMutations } from "vuex";
export default {
  components: {
    breadCrumb,
    cmSpinner,
    recommendList,
    bloggerRanking,
    latestComment,
    aboutMe,
    carouselBox,
    commentBox,
    commentList,
    classifyList,
    timePostList,
  },
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      rows: 100,
      perPage: 1,
      currentPage: 5,
      loading: false,
      hotArcList: [
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          count: 100,
          id: 1,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          count: 100,
          id: 2,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          count: 100,
          id: 3,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          count: 100,
          id: 4,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          count: 100,
          id: 5,
        },
      ],
      newArcList: [
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          id: 1,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          id: 2,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          id: 3,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          id: 4,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          id: 5,
        },
      ],
      classifyList: [
        {
          title: "html",
          count: "100",
          id: 1,
        },
        {
          title: "CSS",
          count: "100",
          id: 2,
        },
        {
          title: "JAVASCRIPT",
          count: "100",
          id: 3,
        },
        {
          title: "PyTHON",
          count: "100",
          id: 4,
        },
        {
          title: "日常生活",
          count: "100",
          id: 5,
        },
      ],
      timeList: [
        {
          title: "2020/01",
          count: "100",
          id: 1,
        },
        {
          title: "2020/02",
          count: "100",
          id: 2,
        },
        {
          title: "2020/03",
          count: "100",
          id: 3,
        },
        {
          title: "2020/03",
          count: "100",
          id: 4,
        },
        {
          title: "2020/05",
          count: "100",
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
