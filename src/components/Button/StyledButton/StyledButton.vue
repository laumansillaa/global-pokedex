<template>
    <button :class="$style.styledButton" @click="handleClick" :style="customStyle">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'StyledButton',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        customStyle: {
            type: Object,
        }
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
    
}
</script> 

<style src="./styles/styled-button.module.css" module> </style>
