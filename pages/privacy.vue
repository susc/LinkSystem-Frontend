<template>
    <div>
        <Head>
            <Title>隐私条款 - {{SITE_NAME}}</Title>
        </Head>

        <div class="my-container">
            <h1>{{ SITE_NAME }}隐私条款</h1>
            <p>
                我们不会从
                <b>{{ SITE_NAME }}</b>
                的用户那里收集任何个人身份信息。我们只存储提供URL缩短服务所需的信息（如原始的长URL）、识别和跟踪滥用我们的服务所需的信息（如IP地址）和汇总信息，以收集有关各个链接使用情况的统计信息（如浏览器和居住国）。
            </p>
            <p>我们在需要时与第三方共享信息，以识别或跟踪滥用或防止未来的滥用（例如，我们可以根据第三方黑名单检查提交的URL，并可能与第三方共享恶意URL或滥用用户的信息）。</p>
            <p>
                <b>{{ SITE_NAME }}</b>
                的短链接不是私有的，并且不应被视为私有的。第三方很容易猜出您使用的短链接，因此您不应该使用
                <b>{{ SITE_NAME }}</b>
                链接到敏感或安全的数据。
            </p>
        </div>
    </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const SITE_NAME = runtimeConfig.public.SITE_NAME
</script>

<style scoped>
.my-container {
    margin-top: 3rem;
    padding: 0 1rem;
}
</style>
