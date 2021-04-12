<template>
  <b-row no-gutters :class="[singe ? 'cm-single-doc-list' : '']">
    <b-col md="3" v-if="!singe">
      <b-card-img
        src="https://picsum.photos/400/400/?image=20"
        alt="Image"
        class="rounded-0 cart-list-item-img"
      ></b-card-img>
    </b-col>
    <b-col :md="txtNum">
      <b-card-body>
        <b-card-title>
          <NuxtLink :to="'/blog?username=zhazhahui'">Horizontal Card</NuxtLink>
        </b-card-title>
        <b-card-text>
          This is a wider card with supporting text as a natural lead-in to
          additional content. This content is a little bit longer.
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
          <template v-if="showBtn">
            <b-button variant="danger" size="sm">删除</b-button>
            <b-button variant="outline-primary" size="sm">编辑</b-button>
          </template>
        </b-card-text>
      </b-card-body>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    singe: {
      default: false,
    },
    showBtn: {
      default: false,
    },
  },
  computed: {
    txtNum() {
      return this.singe ? 12 : 9;
    },
  },
};
</script>
