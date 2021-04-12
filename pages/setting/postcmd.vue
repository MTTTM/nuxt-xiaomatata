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
      <b-overlay :show="pushing" rounded="sm">
        <b-form @submit.stop.prevent="onSubmit" v-if="show">
          <b-form-group label="系统分类:">
            <b-form-checkbox-group
              v-model="$v.params.sys_classify.$model"
              :state="validateState('sys_classify')"
              label="选择系统分类:"
            >
              <b-form-checkbox
                :value="item.value"
                v-for="item in sysClassifys"
                :key="item.value"
                >{{ item.title }}</b-form-checkbox
              >

              <div class="error" v-if="!$v.params.sys_classify.required">
                必选
              </div>
              <div class="error" v-if="!$v.params.sys_classify.minLength">
                至少选择 {{ $v.params.sys_classify.$params.minLength.min }}
              </div>
              <div class="error" v-if="!$v.params.sys_classify.maxLength">
                最多只能选 {{ $v.params.sys_classify.$params.maxLength.max }}个
              </div>
            </b-form-checkbox-group>
          </b-form-group>
          <b-form-group label="用户分类:" v-if="classifys.length > 0">
            <b-form-checkbox-group
              v-model="$v.params.classify.$model"
              :state="validateState('classify')"
              label="选择分类:"
            >
              <b-form-checkbox
                :value="item.value"
                v-for="item in classifys"
                :key="item.value"
                >{{ item.title }}</b-form-checkbox
              >

              <div class="error" v-if="!$v.params.classify.required">必选</div>
              <div class="error" v-if="!$v.params.classify.minLength">
                至少选择 {{ $v.params.classify.$params.minLength.min }}
              </div>
              <div class="error" v-if="!$v.params.classify.maxLength">
                最多只能选 {{ $v.params.classify.$params.maxLength.max }}个
              </div>
            </b-form-checkbox-group>
          </b-form-group>
          <b-container>
            <b-row>
              <b-form-group id="input-group-3" label="新建用户分类:">
                <div
                  v-for="(item, index) in $v.params.newClass.$model"
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
                <div class="error" v-if="!$v.params.newClass.maxLength">
                  最多只能选 {{ $v.params.newClass.$params.maxLength.max }}个
                </div>

                <b-button
                  variant="outline-primary"
                  size="sm"
                  @click="addNewClass"
                  >+分类</b-button
                >
              </b-form-group>
            </b-row>
          </b-container>
          <b-form-group
            id="input-group-3"
            label="文章来源:"
            label-for="input-3"
          >
            <b-form-select
              v-model="$v.params.docType.$model"
              :options="formUrls"
              size="sm"
              :state="validateState('docType')"
            ></b-form-select>
            <div class="error" v-if="!$v.params.docType.required">必选</div>
          </b-form-group>
          <!--  -->
          <b-form-group label="来源地址:" v-if="params.docType == 2">
            <b-form-input
              v-model.trim="$v.params.formUrl.$model"
              :state="validateState('formUrl')"
              placeholder="请输入来源地址"
              size="sm"
            ></b-form-input>
            <div class="error" v-if="!$v.params.formUrl.required">必选</div>
            <div class="error" v-if="!$v.params.formUrl.minLength">
              至少长度为 {{ $v.params.formUrl.$params.minLength.min }}
            </div>
            <div class="error" v-if="!$v.params.formUrl.maxLength">
              最长长度为 {{ $v.params.formUrl.$params.maxLength.max }}个
            </div>
          </b-form-group>

          <b-container>
            <b-row align-h="end">
              <b-button type="submit" variant="primary" size="sm"
                >Submit</b-button
              >
            </b-row>
          </b-container>
        </b-form>
      </b-overlay>
    </b-modal>
  </div>
</template>
<script>
import post from "../../mixins/post";
export default {
  mixins: [post],
  head() {
    return {
      title: "发布文章-cmd",
      script: [
        { src: "/libs/jquery-1.8.3.min.js", type: "text/javascript" },
        {
          src: "/libs/editormd/editormd.min.js",
          type: "text/javascript",
        },
      ],
      link: [{ rel: "stylesheet", href: "/libs/editormd/editormd.min.css" }],
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.edi = editormd("edi-wang", {
          width: "100%",
          // autoHeight      : true,
          height: 640,
          path: "/libs/editormd/lib/",
          htmlDecode: "style,script,iframe",
          tex: true,
          emoji: true,
          taskList: true,
          flowChart: true,
          sequenceDiagram: true,
        });
      }, 1000);
    });
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