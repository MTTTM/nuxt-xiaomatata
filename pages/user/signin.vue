<template>
  <b-card no-body class="mt-5" style="width: 350px; margin: 0 auto">
    <template #header>
      <h4 class="mb-0">登录</h4>
    </template>
    <b-form @submit="onSubmit" class="px-3 py-3">
      <b-overlay :show="pushing" rounded="sm">
        <b-form-group label="账号:">
          <b-form-input
            v-model="$v.form.account.$model"
            :state="validateState('account')"
            type="password"
            placeholder="请输入登录账号"
          ></b-form-input>
          <div
            class="error"
            v-if="
              !validateState('account') && validateState('account') !== null
            "
          >
            请输入长度为6的登录账号
          </div>
        </b-form-group>

        <b-form-group label="密码:">
          <b-form-input
            v-model="$v.form.pwd.$model"
            :state="validateState('pwd')"
            type="password"
            placeholder="请输入新的登录密码"
          ></b-form-input>
          <div
            class="error"
            v-if="!validateState('pwd') && validateState('pwd') !== null"
          >
            请输入长度为6的数字或字母的登录密码
          </div>
        </b-form-group>

        <b-form-group label="验证码:">
          <b-input-group>
            <b-form-input
              v-model="$v.form.code.$model"
              type="password"
              :state="validateState('code')"
              placeholder="请输入验证码"
              size="sm"
            ></b-form-input>
            <b-input-group-append>
              <img
                src="https://placekitten.com/300/300"
                alt=""
                class="v-code"
              />
            </b-input-group-append>
          </b-input-group>

          <div
            v-if="!validateState('code') && validateState('code') !== null"
            class="error"
          >
            请输入长度为4的验证码
          </div>
        </b-form-group>
        <b-button type="submit" variant="primary">提交</b-button>
        <NuxtLink to="/user/registered">没有账号，去注册</NuxtLink>
      </b-overlay>
    </b-form>
    <template #footer>
      <p><NuxtLink to="/">首页</NuxtLink> 备案号:xxx-xx</p>
    </template>
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
        account: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(6),
          alphaNum,
        },
        pwd: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(6),
          alphaNum,
        },
        code: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(4),
          alphaNum,
        },
      },
    };
  },
  data() {
    return {
      form: {
        account: "",
        pwd: "",
        code: "",
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
      this.$bvToast.toast(msg, {
        title: "提示",
        variant: variant,
        solid: true,
        toaster: "b-toaster-top-center",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.v-code {
  height: 31px;
  width: 100px;
}
</style>