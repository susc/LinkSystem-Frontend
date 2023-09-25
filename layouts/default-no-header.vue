<template>
    <div class="wrapper">
        <div class="my-container">
            <slot />
            <Footer></Footer>
        </div>
    </div>
</template>
  
<script setup>
import 'normalize.css'
</script>

<style scoped>
:root {
    font-family: 'Noto Sans SC', Arial, Helvetica, sans-serif;
}

/* lg */
@media (min-width: 1200px) {
    .my-container {
        width: 900px;
    }
}

/* md */
@media (min-width: 992px) and (max-width: 1199px) {
    .my-container {
        width: 80vw;
    }
}

/* sm */
@media (min-width: 768px) and (max-width: 991px) {
    .my-container {
        width: 95vw;
    }
}

/* xs */
@media (max-width: 767px) {
    .my-container {
        width: 95vw;
    }
}

.wrapper {
    display: flex;
    justify-content: center;
}
</style>
  