<template>
  <b-card no-body class="overflow-hidden">
    <template #header>
      <h4 class="mb-0">文章管理</h4>
      <b-form inline style="margin-top: 1rem">
        <label class="sr-only" for="inline-form-input-name">分类</label>
        <b-form-select
          v-model="params.classify"
          :options="options"
          size="sm"
          class="mr-1"
        ></b-form-select>

        <label class="sr-only" for="inline-form-input-username">日期</label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="params.date"
          class="mr-1"
          size="sm"
          placeholder="选择日期"
        ></b-form-datepicker>
        <label class="sr-only" for="inline-form-input-username">标题</label>
        <b-form-input
          size="sm"
          class="mr-1"
          v-model="params.title"
          placeholder="请输入标题"
        ></b-form-input>

        <b-form-checkbox class="mr-1">不可见</b-form-checkbox>

        <b-button variant="primary" size="sm">搜索</b-button>
      </b-form>
    </template>
    <b-overlay :show="loading" rounded="sm" fixed>
      <b-list-group flush>
        <b-list-group-item v-for="(item, index) in list" :key="index">
          <b-row no-gutters :class="['cm-single-doc-list']">
            <b-col :md="11">
              <b-card-body>
                <b-card-title>
                  <NuxtLink :to="'/blog?username=zhazhahui'"
                    >Horizontal Card</NuxtLink
                  >
                </b-card-title>
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in
                  to additional content. This content is a little bit longer.
                </b-card-text>
                <b-card-text>
                  <NuxtLink :to="'/blog?username=zhazhahui'">
                    <b-avatar
                      size="sm"
                      variant="info"
                      src="https://placekitten.com/300/300"
                    ></b-avatar>
                    渣渣辉</NuxtLink
                  >

                  时间:2020/10/10 12:12:23
                  <b-icon icon="eye"></b-icon> 100
                  <b-icon icon="chat-dots"></b-icon> 100

                  <b-button variant="danger" size="sm" @click="remove(item)"
                    >删除</b-button
                  >
                  <b-button
                    variant="outline-primary"
                    size="sm"
                    @click="toEdi(item)"
                    >编辑</b-button
                  >
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
import cmSpinner from "../../components/cmSpinner";
import settingSide from "../../components/settingSide";
import { mapMutations } from "vuex";
export default {
  components: {
    cmSpinner,
    settingSide,
  },
  data() {
    return {
      list: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
      ],
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
      confirmTitle: "你确定要删除这篇文章么?",
      okCallback: "",
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
    toEdi(item) {
      if (item.id % 2 == 0) {
        this.$router.push({
          path: `/setting/post?id=${item.id}`,
        });
      } else {
        this.$router.push({
          path: `/setting/postcmd?id=${item.id}`,
        });
      }
    },
    remove(item) {
      this.confirmTitle = "确定要删除这个评论么?";
      this.okCallback = "remove_push";
      this.$refs["confirmModel"].trigger(true);
    },
    checked(item) {
      this.confirmTitle = "确定要通过这个评论么?";
      this.okCallback = "checked_push";
      this.$refs["confirmModel"].trigger(true);
    },
    confirmOkBack(type = "") {
      if (type == "remove_push") {
        this.$refs["confirmModel"].setProcessing(true);
      } else if (type == "checked_push") {
        this.$refs["confirmModel"].setProcessing(true);
      }
      setTimeout(() => {
        this.$refs["confirmModel"].setProcessing(false);
      }, 1000);
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

