<template>
    <div class="wwrap">
        <div class="wrap">
            <div class="box d1"></div>
            <div class="box d2"></div>
            <div class="box d3"></div>
        </div>
    </div>
</template>

<style scoped>
.wwrap {
    height: 160px;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrap {
    width: 100px;
    height: 100px;
    position: relative;
    transition: all 0.2s ease-in-out;
}

.wrap:hover {
    transform: translateY(-0.3rem) scale(1.02);
}

.box {
    width: 100%;
    height: 100%;
    position: absolute;
}

.d1 {
    top: -20px;
    left: -20px;
    background-color: deeppink;
}

.d2 {
    left: 0;
    top: 0;
    background-color: #1677ff;
    z-index: 1;
}

.d3 {
    bottom: -20px;
    right: -20px;
    background-color: rebeccapurple;
}
</style>