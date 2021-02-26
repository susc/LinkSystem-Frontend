<template>
    <div>
        <div class="container">
            <h1 class="error-title">
                <img class="error-icon" src="/icon/error.png">
                错误
            </h1>
            <p class="error-reason">{{errorReason}}</p>
            <nuxt-link to="/" class="return-home">返回首页</nuxt-link>
        </div>
    </div>
</template>

<script>

export default {
    props: ['error'],
    layout: 'default',
    mounted() {
        // console.log(this.error);
        // console.log(this.$route);
    },
    computed: {
        errorReason() {
            let _query = this.$route.query;
            if(_query.type === 'LINK_NOT_FOUND') {
                return '您访问的链接不存在';
            }
            return '你来到了一片荒地（404）';
        }
    },
    head() {
        return {
            title: `错误 - ${process.env.SITE_NAME}`
        }
    }
}
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
