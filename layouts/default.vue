<template>
  <div>
    <navBar />
    <Nuxt />
    <toTop />
  </div>
</template>
<script>
import navBar from "../components/navBar";
import toTop from "../components/toTop";
export default {
  components: { navBar, toTop },
};
</script>
<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
