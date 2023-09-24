<template>
    <!-- <div id="main-wrapper">
        <slot />

        <Footer id="footer"></Footer>
    </div> -->

    <Row justify="center">
        <Col :xs="23" :sm="23" :md="18" class="lg-800px">
            <slot />

            <!-- 页脚 -->
            <Footer id="footer"></Footer>
        </Col>
    </Row>
</template>
  
<script setup>
import 'normalize.css'
// import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { Row, Col } from 'ant-design-vue'
</script>

<style>
:root {
    font-family: 'Noto Sans SC', Arial, Helvetica, sans-serif;
}

@media (min-width: 992px) {
    .lg-800px {
        max-width: 800px;
    }
}
</style>
  