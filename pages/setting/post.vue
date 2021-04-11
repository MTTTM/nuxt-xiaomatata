<template>
  <div>
    <b-card no-body>
      <template #header>
        <h4 class="mb-0 post-tit">
          发布文章
          <b-button variant="outline-primary" size="sm" @click="showModal"
            >发布</b-button
          >
        </h4>
      </template>
      <div class="px-2 py-2">
        <b-form-input
          v-model="params.title"
          placeholder="请输入标题"
          class="mb-2"
        ></b-form-input>

        <div id="edi-wang" class="edi-wrap"></div>
      </div>
    </b-card>
    <b-modal ref="my-modal" title="提交" hide-footer size="lg">
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group label="选择分类:" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            id="checkbox-group-2"
            v-model="classify"
            :aria-describedby="ariaDescribedby"
            name="flavour-2"
          >
            <b-form-checkbox
              :value="item.value"
              v-for="item in classifys"
              :key="item.value"
              >{{ item.title }}</b-form-checkbox
            >
          </b-form-checkbox-group>
          <b-container>
            <b-row>
              <div
                v-for="(item, index) in newClass"
                :key="index"
                class="new-classify"
              >
                <b-form-input
                  v-model="item.value"
                  size="sm"
                  style="max-width: 8rem"
                  class="mr-1 my-1"
                  placeholder="请输入"
                  trim
                >
                </b-form-input>
                <b-icon icon="x-circle" @click="removeItem(index)"></b-icon>
              </div>

              <b-button variant="outline-primary" size="sm" @click="addNewClass"
                >+分类</b-button
              >
            </b-row>
          </b-container>
        </b-form-group>
        <b-form-group id="input-group-3" label="文章来源:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="params.docType"
            :options="formUrls"
            required
            size="sm"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="来源地址:"
          label-for="input-2"
          v-if="params.docType == 2"
        >
          <b-form-input
            id="input-2"
            v-model="params.formurl"
            placeholder="请输入来源地址"
            type="url"
            required
          ></b-form-input>
        </b-form-group>

        <b-container>
          <b-row align-h="end">
            <b-button type="submit" variant="primary" size="sm"
              >Submit</b-button
            >
          </b-row>
        </b-container>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "发布文章",
      script: this.metaInfo.script,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const E = window.wangEditor;
      this.edi = new E("#edi-wang");
      this.edi.config.height = 600;
      this.edi.create();
    });
  },
  data() {
    return {
      metaInfo: {
        script: [
          { src: "/libs/jquery-1.8.3.min.js" },
          { src: "/libs/wangEditor/wangEditor.min.js" },
        ],
      },
      edi: null,
      classify: [],
      classifys: [
        {
          title: "html",
          value: "html",
        },
        {
          title: "css",
          value: "css",
        },
        {
          title: "javascript",
          value: "javascript",
        },
        {
          title: "vue",
          value: "vue",
        },
      ],
      newClass: [],
      params: {
        title: "",
        formurl: "",
        docType: null,
        content: "",
      },
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      formUrls: [
        { text: "请选择文章来源", value: null },
        { text: "原创", value: 0 },
        { text: "翻译", value: 1 },
        { text: "转载", value: 2 },
      ],
      show: true,
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    onSubmit(e) {
      e.preventDefault();
    },
    addNewClass() {
      let maxLen = this.classifys.length + this.newClass.length > 10;
      let hasEmptyNewItem = this.newClass.some(
        (item) => String(item.value).length == 0
      );
      if (maxLen || hasEmptyNewItem) {
        return;
      } else {
        this.newClass.push({
          value: "",
        });
      }
    },
    removeItem(index) {
      this.newClass = this.newClass.filter((item, i) => i != index);
    },
  },
};
</script>
<style lang="scss" scoped>
.post-tit {
  display: flex;
  justify-content: space-between;
}
.edi-wrap {
  position: relative;
  z-index: 1;
}
.new-classify {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}
</style>