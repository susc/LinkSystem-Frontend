<template>
  <div>
    <!-- 主操作区 -->
    <Main></Main>
  </div>
</template>

<script>
import Main from '../components/index/main';

export default {
  layout: 'default-no-header',
  components: {
    Main
  },
  head() {
    return {
      title: `首页 - ${process.env.SITE_NAME}`
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
