<template>
    <div :class="$style.container">
        <img :src="loadingImg" alt="loader" :class="$style.loader">
    </div>
</template>

<script>
import loadingImg from '@/assets/loader.png'
export default {
    name: "Loader",
    data() {
        return {
            loadingImg: loadingImg
        }
    }
}
</script>

<style src="./styles/loader.module.css" module></style>