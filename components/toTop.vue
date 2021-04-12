<template>
  <div class="cm-top-box">
    <a href="#" class="cm-top" id="to-top"></a>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.addScrollEvent);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.addScrollEvent);
  },
  methods: {
    addScrollEvent() {
      let dom = document.querySelector("#to-top");
      if (!dom) {
        return;
      }
      if (window.scrollY > 200) {
        dom.classList.add("cd-fade-out");
        dom.classList.add("cd-is-visible");
      } else {
        dom.classList.remove("cd-fade-out");
        dom.classList.remove("cd-is-visible");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes btn-pudding {
  12%,
  15% {
    transform: scale(0.93, 1.07);
  }

  16%,
  17% {
    transform: scale(0.94, 1.06);
  }

  10%,
  18% {
    transform: scale(0.95, 1.05);
  }

  19% {
    transform: scale(0.96, 1.04);
  }

  20% {
    transform: scale(0.98, 1.02);
  }

  21%,
  40%,
  48% {
    transform: scale(0.99, 1.01);
  }

  22%,
  23%,
  37%,
  39%,
  49% {
    transform: scale(1, 1);
  }

  7%,
  24%,
  34%,
  36% {
    transform: scale(1.01, 0.99);
  }

  25%,
  27%,
  30%,
  33% {
    transform: scale(1.02, 0.98);
  }

  28%,
  29% {
    transform: scale(1.03, 0.97);
  }

  2% {
    transform: scale(1.16, 0.84);
  }

  0% {
    transform: scale(1.2, 0.8);
  }
}
//到顶部
.cm-top-box {
  &:hover .cm-top {
    animation: btn-pudding 1s linear;
  }

  .cm-top {
    position: fixed;
    width: 48px;
    height: 48px;
    bottom: 50px;
    right: 50px;
    z-index: 10000;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s 0.1s;
  }

  .cm-top.cd-is-visible {
    visibility: visible;
    opacity: 0.8;
  }

  .cm-top {
    background: url("/images/gotop.png") no-repeat center 50%;
    background-size: 98% auto;
  }

  @media only screen and (min-width: 768px) {
    .cm-top {
      right: 20px;
      bottom: 20px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .cm-top {
      height: 55px;
      width: 55px;
      right: 50px;
      bottom: 50px;
    }
  }
}
</style>
