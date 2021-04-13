import { validationMixin } from "vuelidate";
import {
  required,
  requiredIf,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations() {
    return {
      params: {
        formUrl: {
          required: requiredIf(() => this.$v.params.docType.$model == 2),
          minLength: minLength(1),
          maxLength: maxLength(100),
        },
        docType: {
          required,
        },
        classify: {
          required: requiredIf(() => this.classifyRequired),
          minLength: minLength(1),
          maxLength: maxLength(this.oldClassMaxLimit),
        },
        newClass: {
          maxLength: maxLength(this.newClassMaxLimit),
        },
        sys_classify: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(2),
        },
      },
    };
  },
  data() {
    return {
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
      sysClassifys: [
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
        formUrl: null,
        docType: null,
        content: "",
        classify: [],
        sys_classify: [],
        newClass: [],
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
      pushing: false, //提交中
    };
  },
  computed: {
    classifyRequired() {
      let max = this.params.classify.length + this.params.newClass.length;
      return max == 0;
    },
    newClassMaxLimit() {
      let max = this.params.classify.length + this.params.newClass.length;
      if (max > 3) {
        return 3;
      } else {
        return 3 - this.params.classify.length;
      }
    },
    oldClassMaxLimit() {
      let max = this.params.classify.length + this.params.newClass.length;
      if (max > 3) {
        return 0;
      } else {
        return 3 - this.params.newClass.length;
      }
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.params[name];
      return $dirty ? !$error : null;
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    onSubmit(e) {
      this.$v.params.$touch();
      if (this.$v.params.$invalid) {
        return;
      }
      this.pushing = true;
      setTimeout(() => {
        this.pushing = false;
        this.$bvToast.toast(`提交成功`, {
          title: `提示`,
          toaster: "b-toaster-top-center",
          solid: true,
          appendToast: false,
          variant: "success",
        });
        this.hideModal();
      }, 1000);
    },
    addNewClass() {
      let maxLen =
        this.$v.params.classify.$model.length +
          this.$v.params.newClass.$model.length >=
        3;
      let hasEmptyNewItem = this.newClass.some(
        (item) => String(item.value).length == 0
      );
      if (maxLen || hasEmptyNewItem) {
        return;
      } else {
        this.$v.params.newClass.$model.push({
          value: "",
        });
      }
    },
    removeItem(index) {
      this.$v.params.newClass.$model = this.$v.params.newClass.$model.filter(
        (item, i) => i != index
      );
    },
  },
};