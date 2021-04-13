<template>
  <div class="nav-bar" v-show="showNav">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand>
        <NuxtLink to="/" class="logo-txt">塔塔</NuxtLink>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"> Link </b-nav-item>
          <b-nav-item href="#" disabled> Disabled </b-nav-item>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#"> EN </b-dropdown-item>
            <b-dropdown-item href="#"> ES </b-dropdown-item>
            <b-dropdown-item href="#"> RU </b-dropdown-item>
            <b-dropdown-item href="#"> FA </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit="submit">
            <b-form-input
              v-model="search"
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              name="search"
            />
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="button"
              :variant="searchType"
              @click="submit"
            >
              Search
            </b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
              ></b-avatar>
              <em>User</em>
            </template>
            <template v-for="item in dropdownItem">
              <b-dropdown-item :key="item.path" v-if="showItem(item.path)">
                <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
              </b-dropdown-item>
            </template>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      search: "",
      dropdownItem: [
        {
          path: "/setting",
          title: "博客管理",
        },
        {
          path: "/blog?username=zhazhahui",
          title: "个人中心",
        },
        {
          path: "/setting/post",
          title: "发文H5",
        },
        {
          path: "/setting/postcmd",
          title: "发文cmd",
        },
        {
          path: "/user/signin",
          title: "登陆",
        },
        {
          path: "/user/registered",
          title: "注册",
        },
      ],
    };
  },
  computed: {
    searchType() {
      if (this.validSearch) {
        return "primary";
      } else {
        return "secondary";
      }
    },
    validSearch() {
      return (
        (this.$route.query.search &&
          String(this.$route.query.search).trim().length > 0) ||
        (this.search && String(this.search).trim().length > 0)
      );
    },
    showNav() {
      return this.$store.state.system.showTopNav;
    },
  },
  watch: {
    "$route.query.search": {
      handler(newV) {
        if (newV) {
          this.$store.commit("system/setBreadList", {
            isReplace: true,
            item: {
              text: `搜索内容:${this.search}`,
              href: "#",
              active: true,
            },
          });
        }
      },
      immediate: true,
    },
  },
  created() {
    if (this.validSearch) {
      this.search = this.$route.query.search;
    }
  },
  methods: {
    showItem(path = "") {
      return this.$route.path != path;
    },
    submit(event) {
      event.preventDefault();
      if (!this.validSearch) {
        return;
      }
      this.$router.push({
        path: `?search=${this.search}`,
      });
      return;
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.logo-txt {
  color: rgba(255, 255, 255, 0.7);
  &:hover {
    color: #fff;
    text-decoration: none;
  }
}
</style>
