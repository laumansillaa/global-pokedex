<template>
    <div :class="$style.containerCard">
        <div :class="$style.containerTitle" @click="viewToDetail">
            <h3 :class="$style.title">{{ item.name }}</h3>
        </div>
        <FavoriteButton :item="item" />
    </div>
</template>

<script>
import { DetailCard, GenericModal, FavoriteButton } from '@/components/';

import { mapState } from 'vuex';

export default {
    name: "CharacterCard",
    props: {
        item: { type: Object },
    },
    components: {
        DetailCard,
        GenericModal,
        FavoriteButton
    },
    computed: {
        ...mapState(['favoriteState', 'detailCharacter']),
    },
    methods: {
        viewToDetail(event) {
            event.stopPropagation();
            this.$store.dispatch('handleGetCharacterDetail', { name: this.item.name, id: this.item.id, isFavorite: this.item.isFavorite });
        }
    }
}
</script>

<style src="./styles/character-card.module.css" module></style>