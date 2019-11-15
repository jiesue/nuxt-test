<template>
  <section class="container">
    <ul>
      <li>
        <nuxt-link to="/">首页15245后即可收到风华高科</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/test1">test1/index</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/test1/test1-child1">test1/</nuxt-link>
      </li>
      <el-input placeholder="123"></el-input>
    </ul>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import my from '../auto'
export default {
  asyncData(context){
    context.app.myInjectedFunction('ctx!')
  },
  components: {
    AppLogo
  },
  // 设置TDK
  head() {
    // const { path, params } = this.$nuxt.$route;
    // const { id, keyword: urlKeyword } = params;
    // const { categoryList = [] } = this;

    // TDK: title
    const title =
      "行家资讯-财经资讯-IT资讯-考试资讯-政策资讯-求职资讯-行家推荐";

    // TDK: keyword
    const keywords =
      "会计行业动态，投资，股票基金，理财资讯，宏观经济，云计算" +
      "，大数据，互联网，设计，人工智能，产品运营，开发，考试政策，" +
      "考试报名，考试大纲，备考指导，政策解读，法规库，简历制作，" +
      "岗位吐槽，面试技巧，职业动态，行业报告，常规资讯，热点追踪";

    // TDK: description
    const description =
      "行家资讯。主要为财务会计、IT互联网、职场技能、兴趣生活、" +
      "设计创作、学历自考等领域提供专业的资讯服务。为您的职场赋能123！";

    function my(dataObj) {
      const metaArr = [];
      for (const key in dataObj) {
        if (dataObj.hasOwnProperty(key)) {
          const content = dataObj[key];
          metaArr.push({
            hid: key,
            name: key,
            content
          });
        }
      }
      return metaArr;
    }
    const meta = my({
      keywords,
      description
    });
    return {
      title,
      meta
    };
  },
  loading:true,
  created(){
    // console.log(123,process)
    // console.log(my);
    my.my1()
    my.my2()
    my.my3()
    my.my4()
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
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

