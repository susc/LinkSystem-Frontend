<template>
    <NuxtLayout name="default">
        <Head>
            <Title>错误 - {{ SITE_NAME }}</Title>
        </Head>
        <div class="container">
            <h1 class="error-title">
                <img class="error-icon" src="/icon/error.png">
                错误
            </h1>
            <p class="error-reason">{{errorReason}}</p>
            <nuxt-link to="/" class="return-home">返回首页</nuxt-link>
        </div>
    </NuxtLayout>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const SITE_NAME = runtimeConfig.public.SITE_NAME
const route = useRoute()

const errorReason = computed(() => {
    const errorInfo = useErrorInfo(route.query.type)
    return errorInfo !== '未知错误' ? errorInfo : '你来到了一片荒地（404）'
})
</script>

<style scoped>
.return-home {
    display: block;
}

.error-title,
.error-reason,
.return-home {
    text-align: center;
}

.error-icon {
    height: 30px;
    margin-right: 0.5rem;
}

.error-title {
    margin-top: 3rem;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.error-reason,
.return-home {
    font-size: 14px;
}
</style>
