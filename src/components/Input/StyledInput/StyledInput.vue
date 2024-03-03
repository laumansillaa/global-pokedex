<template>
    <div :class="$style.styledInputContainer">
        <img :class="$style.icon" :src="iconSearch" alt="icon-search" />
        <input :class="$style.styledInput" :placeholder="placeholder" :value="inputValue"
            @input="$emit('update:searchInput', $event.target.value)" />
    </div>
</template>

<script>
import iconSearch from '@/assets/input-search.png'
export default {
    name: 'StyledInput',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        inputValue: { type: String },
        placeholder: { type: String, default: 'Search' },
    },
    methods: {

    },
    data() {
        return {
            iconSearch: iconSearch,
        }
    },
    methods: {
        updateSearchInput(e) {
            this.$emit('update:searchInput', e.target.value)
        }
    },

}
</script>

<style src="./styles/input.module.css" module></style>