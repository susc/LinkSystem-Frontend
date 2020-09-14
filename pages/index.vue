<template>
  <div>
    <!-- 主操作区 -->
    <Main></Main>
  </div>
</template>

<script>
import Main from '../components/index/main';

export default {
  components: {
    Main
  },
  head() {
    return {
      title: '首页 - EWRT短链接服务'
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
