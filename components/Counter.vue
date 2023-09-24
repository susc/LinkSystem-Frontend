<template>
    <div>
        <div class="wrapper" v-if="links >= 0 && clicks >= 0">
            <div class="link-count">
                已生成
                <strong>{{links}}</strong>
                个短链接
            </div>
            <div class="click-count">
                它们已经被点击了
                <strong>{{clicks}}</strong>
                次
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios'

const links = ref(-1)
const clicks = ref(-1)
const runtimeConfig = useRuntimeConfig()
const API_HOST = runtimeConfig.public.API_HOST

function getData() {
    axios.get(`https://${API_HOST}/count/links`).then(res => {
        links.value = res.data.data;
    })
    axios.get(`https://${API_HOST}/count/clicks`).then(res => {
        clicks.value = res.data.data;
    })
}

onMounted(() => getData())
</script>

<style scoped>
.wrapper {
    margin-top: 2.5rem;
}

.wrapper > div {
    text-align: center;
}

.wrapper > div:nth-child(2) {
    margin-top: 0.3rem;
}
</style>