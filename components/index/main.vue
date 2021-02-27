<template>
    <div>
        <div class="main">
            <div class="container">
                <!-- 首页大LOGO -->
                <Logo />

                <!-- 首页标语 -->
                <h1>开始缩短您的链接吧</h1>

                <!-- 输入区 -->
                <div class="input-area">
                    <div>
                        <input
                            type="url"
                            placeholder="您的长链接（以 http:// 或 https:// 开头）"
                            v-model="input_url" />
                        <button
                            @click="handleShorten()"
                            :disabled="processing ? true : false">
                            {{processing ? '生成中' : '缩短'}}
                        </button>
                    </div>
                </div>

                <!-- 检测结果提示 -->
                <SecurityHint />

                <!-- 计数器组件 -->
                <div class="counter">
                    <Counter />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Counter from './counter'
import axios from 'axios'
import Swal from 'sweetalert2'
import Vue from 'vue'
import SecurityHint from './security-hint'
import Logo from '../logo'

export default {
    components: {
        Counter,
        SecurityHint,
        Logo
    },
    data() {
        return {
            input_url: '',
            processing: false
        }
    },
    methods: {
        reset() {
            this.input_url = '';
            this.processing = false;
        },
        handleShorten() {
            let url = this.input_url;
            this.processing = true;

            if (!url) {
                Swal.fire({
                    title: '错误',
                    text: '请输入一个 URL',
                    icon: 'error',
                    confirmButtonText: '确定',
                    customClass: {
                        confirmButton: 'modal-confirm-button'
                    }
                });
                return this.reset();
            }

            function checkURL(url) {
                var str = url;
                var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
                var objExp = new RegExp(Expression);
                if (objExp.test(str) == true) {
                    return true;
                } else {
                    return false;
                }
            }

            if (!checkURL(url)) {
                Swal.fire({
                    title: '错误',
                    text: '请输入一个合法的 URL',
                    icon: 'error',
                    confirmButtonText: '确定',
                    customClass: {
                        confirmButton: 'modal-confirm-button'
                    }
                });
                return this.reset();
            }

            axios.post(`https://${process.env.API_HOST}/links`, {
                domain: 'na.tn',
                url: url
            }).then(
                res=>{
                    Swal.fire({
                        title: '成功',
                        html: `您的短链接：<a href="${res.data.data}" target="_blank">${res.data.data}</a>`,
                        icon: 'success',
                        confirmButtonText: '确定',
                        customClass: {
                            confirmButton: 'modal-confirm-button'
                        },
                        allowOutsideClick: false
                    });
                }
            ).catch(
                err => {
                    Swal.fire({
                        title: '错误',
                        text: Vue.parseError(err.response.data.error),
                        icon: 'error',
                        confirmButtonText: '确定',
                        customClass: {
                            confirmButton: 'modal-confirm-button'
                        }
                    });
                }
            ).finally(
                () => {
                    return this.reset();
                }
            )
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

.main {
    margin-top: 8rem;
}

.main h1 {
    margin: 0;
    text-align: center;
    font-weight: 200;
}

.input-area {
    display: flex;
    margin-top: 1.5rem;
    justify-content: center;
}

/* 输入框 + 按钮区域 */
.input-area div {
    /* max-width: 750px; */
    /* min-width: 200px; */
    width: 80%;
    display: flex;
}

.input-area input,
.input-area button {
    border: none;
    outline: none;
    height: 42px;
}

.input-area input {
    border: 1px solid rgba(0, 0, 192, 0.3);
    border-radius: 3px 0 0 3px;
    border-right: none;
    padding: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
}

.input-area button {
    background: #3464e0;
    border-radius: 0 3px 3px 0;
    color: white;
    font-weight: 600;
    cursor: pointer;
    padding: 10px 20px;
    /* 让文字在Safari浏览器下不换行 */
    white-space: nowrap;
}
</style>