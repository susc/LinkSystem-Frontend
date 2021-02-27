<template>
    <div>
        <div class="header-bg">
            <div class="container">
                <div class="content">
                    <div class="brand content-left">
                        <nuxt-link to="/">{{ siteName }}</nuxt-link>
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

<script>
import Swal from 'sweetalert2';

export default {
    methods: {
        // showDevelopingMedal() {
        //     Swal.fire({
        //         title: '提示',
        //         text: '开发中，敬请期待',
        //         icon: 'info',
        //         confirmButtonText: '确定',
        //         customClass: {
        //             confirmButton: 'modal-confirm-button'
        //         }
        //     });
        // }
    },
    data() {
        return {
            siteName: process.env.SITE_NAME
        }
    }
}
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

    height: var(--header-height);
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
    font-size: 18px;
}
</style>