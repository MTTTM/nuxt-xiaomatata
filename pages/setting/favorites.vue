<template>
  <b-card no-body class="overflow-hidden">
    <template #header>
      <h4 class="mb-0">收藏管理</h4>
      <b-form inline style="margin-top: 1rem">
        <label class="sr-only" for="inline-form-input-username">日期</label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="params.date"
          class="mr-1"
          size="sm"
          placeholder="选择日期"
        ></b-form-datepicker>

        <b-button variant="primary" size="sm">搜索</b-button>
      </b-form>
    </template>
    <b-overlay :show="loading" rounded="sm" fixed>
      <b-list-group flush>
        <b-list-group-item v-for="(item, index) in list" :key="index">
          <b-row no-gutters :class="['single']">
            <b-col :md="11">
              <b-card-body>
                <b-card-title>
                  <NuxtLink :to="'/article?id=' + index"
                    >评论：你好呀，你好啊</NuxtLink
                  >
                </b-card-title>
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in
                  to additional content. This content is a little bit longer.
                </b-card-text>
                <b-card-text
                  >作者: 渣渣辉 时间:2020/10/10 12:12:23
                  <template>
                    <b-button variant="danger" size="sm" @click="remove(item)"
                      >删除</b-button
                    >
                  </template>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
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
    <confirm
      ref="confirmModel"
      :title="confirmTitle"
      :okCallback="okCallback"
      @ok="confirmOkBack"
    />
  </b-card>
</template>
<script>
import confirm from "../../components/confirm";
import { mapMutations } from "vuex";
export default {
  components: {
    confirm,
  },
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      rows: 100,
      perPage: 1,
      currentPage: 5,
      loading: false,
      params: {
        date: "",
        classify: null,
        title: "",
      },
      options: [
        { value: null, text: "请选择分类", disabled: true },
        { value: "a", text: "This is First" },
        { value: "b", text: "Selected Option" },
        { value: "c", text: "This is an option" },
      ],
      confirmTitle: "确定要删除么?",
      okCallback: "remove_push",
    };
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
    remove(item) {
      this.confirmTitle = "确定要删除这个评论么?";
      this.okCallback = "remove_push";
      this.$refs["confirmModel"].trigger(true);
    },
    confirmOkBack(type = "") {
      if (type == "remove_push") {
        this.$refs["confirmModel"].setProcessing(true);
      }
      setTimeout(() => {
        this.$refs["confirmModel"].setProcessing(false);
      }, 1000);
    },
  },
};
</script>
<style>
</style>
