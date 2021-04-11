<template>
  <div>
    <carouselBox />
    <b-container style="margin-top: 1rem" fluid>
      <b-row class="w-100" no-gutters>
        <b-col lg="3" md="12" sm="12" class="cm-sm-hide">
          <recommendList title="热门文章" />
          <recommendList title="最新文章" />
          <recommendList title="分类栏目" />
        </b-col>
        <b-col lg="6" md="12" sm="12" class="px-3" style="margin-bottom: 1rem">
          <b-card no-body class="overflow-hidden card-list-item">
            <template #header>
              <h4 class="mb-0">文章列表</h4>
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
          <recommendList title="时间分栏" />
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
  },
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
