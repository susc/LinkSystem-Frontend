<template>
    <div>
        <div class="wrapper" v-if="links!==null && clicks !== null">
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

<script>
import axios from 'axios';

export default {
    data() {
        return {
            links: null,
            clicks: null
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            axios.get('https://api.linksystem.ewrt.top/v1/count/links').then(res => {
                this.links = res.data.data;
            });
            axios.get('https://api.linksystem.ewrt.top/v1/count/clicks').then(res => {
                this.clicks = res.data.data;
            });
        }
    }
}
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