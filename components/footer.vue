<template>
    <div>
        <div class="container">
            <hr />
            <div class="friendship-links">
                <span>友情链接：</span>
                <a class="flink" v-for="item in this.flinks" :key="item.id" target="_blank" :href="item.url">{{item.title}}</a>
                <a class="apply" href="mailto:apply@ewrt.top">交换友链</a>
            </div>
            <div class="copyright">
                © EWRT 短链接服务 2017 - {{nowYear}}
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    props: ['flinks'],
    computed: {
        nowYear() {
            return moment().utcOffset(8).format('YYYY');
        }
    }
}
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
    color: #787fa9;
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

.copyright {
    font-size: 12px;
    margin-top: 0.5rem;
    text-align: center;
}
</style>