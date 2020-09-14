<template>
  <div id="main-wrapper">
    <!-- 头部组件 -->
    <Header></Header>

    <nuxt />

    <!-- 页脚 -->
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style>
:root {
  font-family: 'Noto Sans SC', Arial, Helvetica, sans-serif;
}

#main-wrapper {
  min-height: 100vh;
}
</style>
