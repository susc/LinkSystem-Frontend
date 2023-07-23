<template>
    <div>
        <Head>
            <Title>首页 - {{SITE_NAME}}</Title>
        </Head>

        <Main />
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const SITE_NAME = runtimeConfig.public.SITE_NAME

definePageMeta({
    layout: 'default-no-header'
})
</script>

<style scoped>
#footer {
    position: absolute;
    bottom: 1.3rem;
    min-width: 100vw;
}
</style>
