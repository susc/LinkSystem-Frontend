<template>
  <div id="main-wrapper">
    <nuxt />

    <!-- 页脚 -->
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import Footer from '../components/footer';

export default {
  components: {
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
