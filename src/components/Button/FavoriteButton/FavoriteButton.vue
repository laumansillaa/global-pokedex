<template>
    <div :class="$style.containerImg" @click="handleFavorite">
        <img :src=iconImg alt="favorite-icon" :class="$style.icon" />
    </div>
</template>

<script>
import iconDisabled from '@/assets/favorite-disabled.png'
import iconActive from '@/assets/favorite-active.png'
export default {
    name: 'FavoriteButton',
    props: {
        item: {
            type: Object
        },
    },
    computed: {
        iconImg() {
            return this.item.isFavorite ? iconActive : iconDisabled;
        },
    },
    methods: {
        addFavorite() {
            this.$store.commit('addFavorite', this.item)
        },

        deleteFavorite() {
            this.$store.commit('removeFavorite', this.item)
        },

        handleFavorite() {
            this.item?.isFavorite ? this.deleteFavorite() : this.addFavorite()
        },
    },
}

</script>


<style src="./styles/favorite-button.module.css" module></style>
