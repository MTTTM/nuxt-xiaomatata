<template>
  <div>
    <carouselBox />
    <b-container style="margin-top: 1rem">
      <b-row class="w-100" no-gutters>
        <b-col lg="9" md="12" sm="12" class="pr-3">
          <b-card no-body>
            <b-card-body>
              <b-card-title>Spring Boot 2.x基础教程：使用MongoDB</b-card-title>
              <b-card-sub-title class="mb-2"
                >作者:
                <NuxtLink :to="'/blog?username=zhazhahui'"> 渣渣辉</NuxtLink>
                时间:2020/12/10 12-10-10 <b-icon icon="eye"></b-icon> 100
                <b-icon icon="chat-dots"></b-icon> 100</b-card-sub-title
              >
              <b-card-text>
                <p>
                  前段时间因为团队调整，大部分时间放在了团队上，这系列的更新又耽误了一下。但既然承诺持久更新，那就不会落下，今天开始继续更新这部分的内容！
                  过了年，重申一下这个系列的目标：目前主要任务就是把Spring Boot
                </p>
                <p>
                  1.x部分没有升级的内容做完升级。我会将因为版本升级而产生的变化做一些说明，这样不论低版本的读者还是高版本的读者都能找到自己想要的部分。这也是这次做2.x版本升级的重要原因，尽量避免或减少有读者用着高版本参考我这边低版本的实现而出现问题，然后开始问候我家人的情况。
                  在完成上述所有的更新之后，接下来很重要的更新内容将会集中在关于Spring
                </p>
                <p>
                  Boot的一些进阶内容，比如：要做什么扩展的时候，该从哪里着手等。
                </p>
                <p>如果是您是Spring</p>
                <p>
                  Boot的使用者，那么一定要关注一下！后面的内容会越来越精彩！
                </p>
                <p>
                  下面回归今天的主题，如何在Spring Boot中使用MongoDB！
                  MongoDB简介
                  MongoDB是一个基于分布式文件存储的数据库，它是一个介于关系数据库和非关系数据库之间的产品，其主要目标是在键/值存储方式（提供了高性能和高度伸缩性）和传统的RDBMS系统（具有丰富的功能）之间架起一座桥梁，它集两者的优势于一身。
                  MongoDB支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型，也因为他的存储格式也使得它所存储的数据在Nodejs程序应用中使用非常流畅。
                  既然称为NoSQL数据库，Mongo的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。
                  但是，MongoDB也不是万能的，同MySQL等关系型数据库相比，它们在针对不同的数据类型和事务要求上都存在自己独特的优势。在数据存储的选择中，坚持多样化原则，选择更好更经济的方式，而不是自上而下的统一化。
                  较常见的，我们可以直接用MongoDB来存储键值对类型的数据，如：验证码、Session等；由于MongoDB的横向扩展能力，也可以用来存储数据规模会在未来变的非常巨大的数据，如：日志、评论等；由于MongoDB存储数据的弱类型，也可以用来存储一些多变json数据，如：与外系统交互时经常变化的JSON报文。而对于一些对数据有复杂的高事务性要求的操作，如：账户交易等就不适合使用MongoDB来存储。
                  MongoDB官网：https://www.mongodb.org/ 作者：程序猿DD
                </p>
                <p>
                  链接：https://www.jianshu.com/p/157f9060753c 来源：简书
                  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。前段时间因为团队调整，大部分时间放在了团队上，这系列的更新又耽误了一下。但既然承诺持久更新，那就不会落下，今天开始继续更新这部分的内容！
                  过了年，重申一下这个系列的目标：目前主要任务就是把Spring Boot
                  1.x部分没有升级的内容做完升级。我会将因为版本升级而产生的变化做一些说明，这样不论低版本的读者还是高版本的读者都能找到自己想要的部分。这也是这次做2.x版本升级的重要原因，尽量避免或减少有读者用着高版本参考我这边低版本的实现而出现问题，然后开始问候我家人的情况。
                  在完成上述所有的更新之后，接下来很重要的更新内容将会集中在关于Spring
                  Boot的一些进阶内容，比如：要做什么扩展的时候，该从哪里着手等。
                  如果是您是Spring
                </p>
                <p>
                  Boot的使用者，那么一定要关注一下！后面的内容会越来越精彩！
                  下面回归今天的主题，如何在Spring Boot中使用MongoDB！
                  MongoDB简介
                  MongoDB是一个基于分布式文件存储的数据库，它是一个介于关系数据库和非关系数据库之间的产品，其主要目标是在键/值存储方式（提供了高性能和高度伸缩性）和传统的RDBMS系统（具有丰富的功能）之间架起一座桥梁，它集两者的优势于一身。
                  MongoDB支持的数据结构非常松散，是类似json的bson格式，因此可以存储比较复杂的数据类型，也因为他的存储格式也使得它所存储的数据在Nodejs程序应用中使用非常流畅。
                  既然称为NoSQL数据库，Mongo的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。
                  但是，MongoDB也不是万能的，同MySQL等关系型数据库相比，它们在针对不同的数据类型和事务要求上都存在自己独特的优势。在数据存储的选择中，坚持多样化原则，选择更好更经济的方式，而不是自上而下的统一化。
                  较常见的，我们可以直接用MongoDB来存储键值对类型的数据，如：验证码、Session等；由于MongoDB的横向扩展能力，也可以用来存储数据规模会在未来变的非常巨大的数据，如：日志、评论等；由于MongoDB存储数据的弱类型，也可以用来存储一些多变json数据，如：与外系统交互时经常变化的JSON报文。而对于一些对数据有复杂的高事务性要求的操作，如：账户交易等就不适合使用MongoDB来存储。
                  MongoDB官网：https://www.mongodb.org/ 作者：程序猿DD
                  链接：https://www.jianshu.com/p/157f9060753c 来源：简书
                  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
                </p>
              </b-card-text>
            </b-card-body>
          </b-card>
          <commentBox />
          <commentList />
          <b-card no-body class="overflow-hidden card-list-item">
            <template #header>
              <h4 class="mb-0">你可能感兴趣</h4>
            </template>
            <b-list-group flush>
              <b-list-group-item
                v-for="(item, index) in list"
                :key="index"
                @click="artcleClick(index)"
              >
                <articleListItem :singe="true" />
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col lg="3" md="12" sm="12" class="cm-sm-hide">
          <recommendList
            :list="hotArcList"
            :showEye="false"
            title="其他推荐文章"
          />
          <bloggerRanking />
          <latestComment />
          <aboutMe />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import breadCrumb from "../../components/breadCrumb";
import scrollLoad from "../../mixins/scrollLoad";
import cmSpinner from "../../components/cmSpinner";
import recommendList from "../../components/recommendList";
import bloggerRanking from "../../components/bloggerRanking";
import latestComment from "../../components/latestComment";
import aboutMe from "../../components/aboutMe";
import carouselBox from "../../components/carouselBox";
import commentBox from "../../components/commentBox";
import commentList from "../../components/commentList";
import { mapMutations } from "vuex";
export default {
  components: {
    breadCrumb,
    cmSpinner,
    recommendList,
    bloggerRanking,
    latestComment,
    aboutMe,
    carouselBox,
    commentBox,
    commentList,
  },
  data() {
    return {
      list: [{}, {}, {}, {}],
      hotArcList: [
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          count: 100,
          id: 1,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          count: 100,
          id: 2,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          count: 100,
          id: 3,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          count: 100,
          id: 4,
        },
        {
          title: "你好无趣你hi昂奋神鼎飞丹砂发斯蒂芬",
          count: 100,
          id: 5,
        },
      ],
    };
  },
  computed: {
    validSearch() {
      return (
        (this.$route.query.search &&
          String(this.$route.query.search).trim().length > 0) ||
        (this.search && String(this.search).trim().length > 0)
      );
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  created() {
    this.$store.commit("system/setBreadList", [
      {
        text: "首页",
        href: "#",
      },
    ]);
  },
  methods: {
    artcleClick(id) {
      this.$router.push({
        path: `/article?id=${id}`,
      });
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
