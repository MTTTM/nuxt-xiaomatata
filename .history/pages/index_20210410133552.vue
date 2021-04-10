<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=58"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <b-container style="margin-top: 1rem">
      <breadCrumb class="w-100" />
    </b-container>
    <b-container>
      <b-row class="w-100" no-gutters>
        <b-col cols="9" md="9" sm="12" class="pr-3">
          <b-card
            no-body
            class="overflow-hidden card-list-item"
            v-for="(item, index) in list"
            :key="index"
          >
            <b-row no-gutters>
              <b-col md="3">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0 cart-list-item-img"
                ></b-card-img>
              </b-col>
              <b-col md="9">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                  <b-card-text>作者:小熊 时间:2020/10/10 12:12:23</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <cmSpinner :loading="scroll_loading" />
        </b-col>
        <b-col cols="3" md="3" sm="12">
          <b-card no-body>
            <template #header>
              <h4 class="mb-0">热文推荐</h4>
            </template>

            <b-card-body>
              <b-card-text>
                <a href="#" class="card-link"
                  >你好阿斯蒂芬，污泥起舞污泥起舞污泥起舞</a
                >
              </b-card-text>
              <b-card-text>
                <a href="#" class="card-link">Card link</a>
              </b-card-text>
              <b-card-text>
                <a href="#" class="card-link">Card link</a>
              </b-card-text>
              <b-card-text>
                <a href="#" class="card-link"
                  >你好阿斯蒂芬，污泥起舞污泥起舞污泥起舞</a
                >
              </b-card-text>
              <b-card-text>
                <a href="#" class="card-link"
                  >你好阿斯蒂芬，污泥起舞污泥起舞污泥起舞</a
                >
              </b-card-text>
            </b-card-body>
          </b-card>

          <b-card no-body style="margin-top: 1rem">
            <template #header>
              <h4 class="mb-0">最新评论</h4>
            </template>

            <b-card-body>
              <a href="#">
                <b-card-sub-title class="mb-2"
                  >评论:html新特性</b-card-sub-title
                >
                <b-card-text>
                  吧啦啦啦，污泥起舞阿凡达。吧啦啦啦，污泥起舞阿凡达
                </b-card-text>
              </a>
              <a href="#">
                <b-card-sub-title class="mb-2"
                  >评论:html新特性</b-card-sub-title
                >
                <b-card-text>
                  吧啦啦啦，污泥起舞阿凡达。吧啦啦啦，污泥起舞阿凡达
                </b-card-text>
              </a>
              <a href="#">
                <b-card-sub-title class="mb-2"
                  >评论:html新特性</b-card-sub-title
                >
                <b-card-text>
                  吧啦啦啦，污泥起舞阿凡达。吧啦啦啦，污泥起舞阿凡达
                </b-card-text>
              </a>
              <a href="#">
                <b-card-sub-title class="mb-2"
                  >评论:html新特性</b-card-sub-title
                >
                <b-card-text>
                  吧啦啦啦，污泥起舞阿凡达。吧啦啦啦，污泥起舞阿凡达
                </b-card-text>
              </a>
            </b-card-body>
          </b-card>
          <b-card no-body style="margin-top: 1rem">
            <template #header>
              <h4 class="mb-0">博主排名</h4>
            </template>
            <b-list-group flush>
              <b-list-group-item class="d-flex align-items-center">
                <b-avatar class="mr-3"></b-avatar>
                <span class="mr-auto">J. Circlehead</span>
                <b-badge variant="danger">1000</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex align-items-center">
                <b-avatar class="mr-3"></b-avatar>
                <span class="mr-auto">J. Circlehead</span>
                <b-badge variant="warning">500</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex align-items-center">
                <b-avatar class="mr-3"></b-avatar>
                <span class="mr-auto">J. Circlehead</span>
                <b-badge variant="info">500</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex align-items-center">
                <b-avatar class="mr-3"></b-avatar>
                <span class="mr-auto">J. Circlehead</span>
                <b-badge variant="success">500</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex align-items-center">
                <b-avatar class="mr-3"></b-avatar>
                <span class="mr-auto">J. Circlehead</span>
                <b-badge variant="dark">500</b-badge>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import breadCrumb from "../components/breadCrumb";
import scrollLoad from "../mixins/scrollLoad";
import cmSpinner from "../components/cmSpinner";
export default {
  mixins: [scrollLoad],
  components: { breadCrumb, cmSpinner },
  data() {
    return {
      list: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    };
  },
  methods: {
    scrollFn() {
      setTimeout(() => {
        this.scroll_loading = false;
        this.list = [...this.list, ...[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]];
      }, 1000);
    },
  },
};
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
