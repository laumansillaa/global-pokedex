<template>
    <div :class="$style.container">
        <h3 :class="$style.title">{{this.item.title}}:</h3>
        <p :class="$style.value">{{this.item.attribute}}</p>
    </div>
</template>

<script>
    export default {
        name: "ValueField",
        props: {
            item: {
                type: Object
            }
        }
    }
</script>

<style src="./styles/value-field.module.css" module></style>