<template>
  <b-card no-body class="overflow-hidden card-list-item">
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
  },
};
</script>
<style>
</style>
