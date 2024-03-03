<template>
    <div :class="$style.container">
        <slot></slot>
    </div>
</template>


<script>
    export default {
        name: "GenericModal"
    }
</script>

<style src="./styles/generic-modal.module.css" module></style>