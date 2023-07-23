<template>
    <div class="wrap">
        <embed class="icon" src="/icon/security.svg" />
        链接安全性检测结果由
        <a href="https://urlsec.qq.com/" target="_blank">腾讯安全</a>
        提供
    </div>
</template>

<style scoped>
.wrap {
    margin-top: 1.3rem;
    display: flex;
    justify-content: center;
}

.icon {
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
}

a {
    text-decoration: none;
}

a,
a:visited {
    color: blue;
}
</style>