<template>
    <div>
        <div class="header-bg">
            <div class="container">
                <div class="content">
                    <div class="brand content-left">
                        <nuxt-link to="/">{{ SITE_NAME }}</nuxt-link>
                    </div>
                    <div class="content-right">
                        <!-- TODO: 注册/登录 -->
                        <!-- <a href="#" @click="showDevelopingMedal()">登录 | 注册</a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const SITE_NAME = runtimeConfig.public.SITE_NAME
</script>

<style scoped>
div {
    font-size: 14px;
    outline: none;
}

a,
a:visited,
a:hover {
    color: #262626;
    text-decoration: none;
}

.container {
    /* 字体颜色 */
    --font-color: #262626;

    color: var(--font-color);
}

.header-bg {
    /* header 高度 */
    --header-height: 42px;
    /* header 背景颜色 */
    --header-bg-color: white;

    background: var(--header-bg-color);
    line-height: var(--header-height);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.content {
    display: flex;
}

.content-left {
    flex: 1;
}

.content-right {
    text-align: right;
}

.brand {
    font-weight: 600;
    font-size: 30px;
    padding: 0.5rem 1rem;
}
</style>