<template>
    <div>
        <Transition mode="out-in">
            <div class="wrapper" v-if="ready">
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
            <div class="error" v-else-if="isFailed">
                <frown-outlined class="error-icon" />
                <p class="error-info">加载统计数据失败，您可以刷新页面重试</p>
            </div>
            <div class="loading" v-else>
                <a-spin tip="正在加载统计数据……"></a-spin>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { Spin } from 'ant-design-vue'
import { FrownOutlined } from '@ant-design/icons-vue'

const ASpin = Spin
const links = ref(-1)
const clicks = ref(-1)
const isFailed = ref(false)
const runtimeConfig = useRuntimeConfig()
const API_HOST = runtimeConfig.public.API_HOST

function getData() {
    axios.get(`https://${API_HOST}/count/links`).then(res => {
        links.value = res.data.data
    }).catch(() => isFailed.value = true)
    axios.get(`https://${API_HOST}/count/clicks`).then(res => {
        clicks.value = res.data.data
    }).catch(() => isFailed.value = true)
}

const ready = computed(() => {
    return toValue(links) !== -1 && toValue(clicks) !== -1
})

onMounted(() => getData())
</script>

<style scoped>
.wrapper,
.loading,
.error {
    margin-top: 2.5rem;
}

.wrapper > div {
    text-align: center;
}

.wrapper > div:nth-child(2) {
    margin-top: 0.3rem;
}

.loading {
    display: flex;
    justify-content: center;
}

.error {
    display: flex;
    justify-content: center;
    align-items: center;
}

.error-icon {
    color: red;
    font-size: 1.2rem;
}

.error-info {
    margin-left: 0.4rem;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>