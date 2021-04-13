<template>
  <b-card no-body>
    <template #header>
      <h4 class="mb-0">修改登录密码</h4>
    </template>
    <b-form @submit="onSubmit" class="px-3 py-3">
      <b-overlay :show="pushing" rounded="sm">
        <b-form-group label="旧密码:">
          <b-form-input
            v-model="$v.form.oldPwd.$model"
            :state="validateState('oldPwd')"
            type="password"
            placeholder="请输入登录密码"
          ></b-form-input>
          <div
            class="error"
            v-if="!validateState('oldPwd') && validateState('oldPwd') !== null"
          >
            请输入长度为6的数字或字母的登录密码
          </div>
        </b-form-group>

        <b-form-group label="新密码:">
          <b-form-input
            v-model="$v.form.newPwd.$model"
            :state="validateState('newPwd')"
            type="password"
            placeholder="请输入新的登录密码"
          ></b-form-input>
          <div
            class="error"
            v-if="!validateState('newPwd') && validateState('newPwd') !== null"
          >
            请输入长度为6的数字或字母的登录密码
          </div>
        </b-form-group>

        <b-form-group label="确认密码:">
          <b-form-input
            v-model="$v.form.confirmPwd.$model"
            type="password"
            :state="validateState('confirmPwd')"
            placeholder="请确认新的登录密码"
            size="sm"
          ></b-form-input>

          <div
            v-if="
              !validateState('confirmPwd') &&
              validateState('confirmPwd') !== null
            "
            class="error"
          >
            请输入长度为6的数字或字母的登录密码
          </div>
        </b-form-group>
        <b-button type="submit" variant="primary">提交</b-button>
      </b-overlay>
    </b-form>
  </b-card>
</template>
<script>
import { validationMixin } from "vuelidate";
import {
  required,
  alphaNum,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations() {
    return {
      form: {
        oldPwd: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(6),
          alphaNum,
        },
        newPwd: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(6),
          alphaNum,
        },
        confirmPwd: {
          sameAsNewPwd: sameAs("newPwd"),
        },
      },
    };
  },
  data() {
    return {
      form: {
        oldPwd: "",
        newPwd: "",
        confirmPwd: "",
      },
      pushing: false,
    };
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      let t = $dirty ? !$error : null;
      return t;
    },
    onSubmit(event) {
      event.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$invalid) {
        return;
      }
      this.pushing = true;
      setTimeout(() => {
        this.pushing = false;
        this.makeToast("success", "修改成功");
      }, 1000);
    },
    makeToast(variant = null, msg = "") {
      this.$bvToast.toast("Toast body content", {
        title: msg,
        variant: variant,
        solid: true,
        toaster: "b-toaster-top-center",
      });
    },
  },
};
</script>