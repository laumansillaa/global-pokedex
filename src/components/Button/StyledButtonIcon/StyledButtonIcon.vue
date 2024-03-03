<template>
    <button :class="$style.styledButtonIcon" @click="handleClick" :disabled="disabled">
        <img :src="icon" alt="img" />
        <p>{{ text }}</p>
    </button>
</template>

<script>
import listIcon from '@/assets/icon-list.png'
import favoriteIcon from '@/assets/favorite-icon.png'
export default {
    name: 'StyledButtonIcon',
    props: {
        type: {
            type: String,
            default: 'list'
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        handleClick() {
            this.$emit('click')
        },
    },
    data() {
        return {
            icon: this.type === 'list' ? listIcon : favoriteIcon,
            text: this.type === 'list' ? 'All' : 'Favorites',
        }
    }
}
</script>

<style src="./styles/styled-button-icon.module.css" module></style>
