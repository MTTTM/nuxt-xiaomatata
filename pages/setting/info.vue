<template>
  <b-card no-body>
    <template #header>
      <h4 class="mb-0">修改个人信息</h4>
    </template>
    <b-form @submit="onSubmit" class="px-3 py-3">
      <b-overlay :show="pushing" rounded="sm">
        <b-form-group label="账号:">
          <b-form-input
            v-model="form.account"
            placeholder="请输入登录密码"
            disabled
          ></b-form-input>
        </b-form-group>
        <b-form-group label="昵称:">
          <b-form-input
            v-model="$v.form.nickname.$model"
            :state="validateState('nickname')"
            type="password"
            placeholder="请输入昵称,长度小于12"
          ></b-form-input>
          <div
            class="error"
            v-if="
              !validateState('nickname') && validateState('nickname') !== null
            "
          >
            请输入长度在12之内的昵称
          </div>
        </b-form-group>
        <b-form-group label="头像:">
          <b-form-radio-group
            v-model="$v.form.avatar.$model"
            :state="validateState('avatar')"
            label="选择分类:"
            inline
          >
            <b-form-radio
              v-for="item in avatars"
              :key="item.value"
              :value="item.value"
              class="mr-3"
              ><b-avatar
                variant="info"
                :src="item.path"
                size="sm"
                class="mr-1"
              ></b-avatar
              >{{ item.title }}</b-form-radio
            >

            <div
              class="error"
              v-if="
                !validateState('avatar') && validateState('avatar') !== null
              "
            >
              必选
            </div>
          </b-form-radio-group>
        </b-form-group>

        <b-form-group label="格言:">
          <b-form-textarea
            v-model="$v.form.motto.$model"
            placeholder="请输入你的格言"
            rows="3"
            max-rows="6"
            :state="validateState('motto')"
          ></b-form-textarea>
          <div
            class="error"
            v-if="!validateState('motto') && validateState('motto') !== null"
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
        nickname: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(12),
          alphaNum,
        },
        avatar: {
          required,
        },
        motto: {
          maxLength: maxLength(100),
        },
      },
    };
  },
  data() {
    return {
      form: {
        nickname: "",
        newPwd: "",
        motto: "",
        avatar: "",
        confirmPwd: "",
        account: "lucky",
      },
      pushing: false,
      avatars: [],
    };
  },
  created() {
    for (let i = 0; i <= 36; i++) {
      this.avatars.push({
        title: i,
        value: i,
        path: `/images/avatar/${i}.png`,
      });
    }
  },
  methods: {
    validateState(name) {
      console.log("name xx", name);
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