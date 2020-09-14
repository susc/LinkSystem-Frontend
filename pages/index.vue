<template>
  <div>
    <!-- 头部组件 -->
    <Header></Header>

    <!-- 主操作区 -->
    <Main></Main>

    <!-- 页脚 -->
    <Footer id="footer" :flinks="flinks"></Footer>
  </div>
</template>

<script>
import Header from '../components/header';
import Main from '../components/index/main';
import Footer from '../components/footer';
import axios from 'axios';

export default {
  asyncData({params}) {
    return axios.get('https://service-37st3k6g-1252233372.gz.apigw.tencentcs.com/friendship_links').then(
      res => {
        return {
          flinks: res.data
        }
      }
    );
  },
  components: {
    Header,
    Main,
    Footer
  },
  head() {
    return {
      title: '首页 - EWRT 短链接服务'
    }
  }
}
</script>

<style scoped>
  #footer {
    position: absolute;
    bottom: 1.3rem;
    min-width: 100vw;
  }
</style>
