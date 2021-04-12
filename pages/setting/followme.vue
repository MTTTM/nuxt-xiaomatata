<template>
  <b-card no-body class="overflow-hidden">
    <template #header>
      <h4 class="mb-0">关注我</h4>
    </template>
    <b-overlay :show="loading" rounded="sm" fixed>
      <b-list-group flush>
        <b-list-group-item v-for="(item, index) in list" :key="index">
          <b-row no-gutters :class="['single']">
            <b-col :md="11">
              <b-card-body class="card-body">
                <NuxtLink :to="'/blog?username=zhazhahui'" class="mr-3">
                  <b-avatar
                    variant="info"
                    src="https://placekitten.com/300/300"
                    class="mr-3"
                  ></b-avatar>
                  渣渣辉</NuxtLink
                >
                <template>
                  <b-button
                    v-if="index % 2 == 0"
                    variant="danger"
                    size="sm"
                    @click="remove(item)"
                    >取消关注</b-button
                  >
                  <b-button
                    v-else
                    variant="outline-primary"
                    size="sm"
                    @click="checked(item)"
                    >已互粉</b-button
                  >
                </template>
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
import confirm from "../../components/confirm";
import { mapMutations } from "vuex";
export default {
  components: {
    cmSpinner,
    settingSide,
    confirm,
  },
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      rows: 100,
      perPage: 1,
      currentPage: 5,
      loading: false,
      confirmTitle: "",
      okCallback: "",
      params: {
        date: "",
        title: "",
        checked: 0, //0 未审核，1已审核
      },
    };
  },
  head() {
    return {
      title: "关注我",
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
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.single {
  .card-body {
    padding: 0;
  }
  .card-title {
    margin-bottom: 0.2rem;
  }
  .card-text {
    margin-bottom: 0.2rem;
    line-height: 1.2;
  }
}
</style>