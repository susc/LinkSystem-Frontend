<template>
    <div id="main-wrapper">
        <!-- 头部组件 -->
        <Header></Header>

        <slot />

        <!-- 页脚 -->
        <Footer id="footer"></Footer>
    </div>
</template>
  
<script>
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
</script>
  
<style>
:root {
    font-family: 'Noto Sans SC', Arial, Helvetica, sans-serif;
}
</style>
  