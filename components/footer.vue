<template>
    <div>
        <div class="container">
            <hr />
            <div class="friendship-links">
                <NuxtLink class="flink" to="/">首页</NuxtLink>
                <NuxtLink class="flink" to="/terms-and-conditions">使用条款</NuxtLink>
                <NuxtLink class="flink" to="/privacy">隐私条款</NuxtLink>
                <a class="flink" href="mailto:info@ewrt.top">联系站长</a>
            </div>
            <div class="copyright">
                © 东方蓝短链接服务 2017 - {{nowYear}}
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import moment from 'moment'

const nowYear = computed(() => moment().utcOffset(8).format('YYYY'))
</script>

<style scoped>
div {
    font-size: 14px;
    outline: none;
}

.friendship-links {
    font-size: 12px;
    margin-top: 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    color: #787fa9;
}

.friendship-links > * {
    margin: 0.3rem 0.5rem;
}

.flink {
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(26, 94, 197);
    text-decoration: none;
}

.apply {
    text-decoration: none;
}

.container {
    /* 字体颜色 */
    --font-color: #262626;

    color: var(--font-color);
    margin-top: 5.5rem;
}

hr {
    background: rgba(0, 0, 0, 0.1);
    display: block;
    border: none;
    height: 1px;
}

.copyright,
.record {
    font-size: 12px;
    margin-top: 0.5rem;
    text-align: center;
}

.record a {
    text-decoration: none;
}

.record a:visited {
    color: black;
}
</style>