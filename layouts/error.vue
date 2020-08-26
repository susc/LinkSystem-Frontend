<template>
    <div>
        <Header></Header>

        <div class="container">
            <h1 class="error-title">错误</h1>
            <p class="error-reason">{{errorReason}}</p>
            <nuxt-link to="/" class="return-home">返回首页</nuxt-link>
        </div>
        
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/header';
import ErrorMain from '../components/error/main';
import Footer from '../components/footer';

export default {
    props: ['error'],
    layout: 'default',
    components: {
        Header,
        ErrorMain,
        Footer
    },
    mounted() {
        console.log(this.error);
        console.log(this.$route);
    },
    computed: {
        errorReason() {
            let _query = this.$route.query;
            if(_query.type === 'link-not-found') {
                return '您访问的链接不存在';
            }
            return '你来到了一片荒地（404）';
        }
    },
    head() {
        return {
            title: '错误 - EWRT 短链接服务'
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
</style>
