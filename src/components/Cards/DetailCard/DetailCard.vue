<template>
    <div :class="$style.containerCard">
        <Loader v-if="!detailCharacter?.id" />
        <div v-else :class="$style.containerDetail" >
            <div :class="$style.containerImage">
                <img :src="backgroundImage" alt="background-img" :class="$style.backgroundImage" />
                <img :src="closeIcon" alt="close-icon" :class="$style.icon" @click="clearDetail" />
                <img :src="detailCharacter.image" alt="close-icon" :class="$style.characterImage" />
            </div>
            <div :class="$style.containerInfo">
                <ValueField v-for="detail in details" :key="detail.title" :item="detail" />
                <div :class="$style.containerButtons">
                    <StyledButton :onClick="handleShareToFriend" :customStyle="customShare"  >
                        {{textButton}}
                    </StyledButton>
                    <FavoriteButton :item="detailCharacter"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import ValueField from "./Components/ValueField/ValueField.vue";
import { StyledButton, FavoriteButton, Loader } from '@/components/'

import closeIcon from "@/assets/close.png";
import backgroundImage from "@/assets/background-detail.png";
import { copyToClipboard } from "../../../utils/copyToClipboard";

export default {
    name: "DetailCard",
    components: {
        ValueField,
        StyledButton,
        FavoriteButton,
        Loader
    },
    computed: {
        ...mapState(["favoriteState", "detailCharacter"]),
        details() {
            if (!this.detailCharacter) return []
            return [
                { title: "Name", attribute: this.detailCharacter?.name },
                { title: "Weight", attribute: this.detailCharacter?.weight },
                { title: "Height", attribute: this.detailCharacter?.height },
                { title: "Types", attribute: this.detailCharacter?.types }
            ]
        }
    },
    methods: {
        ...mapMutations(["clearDetailCharacter"]),
        clearDetail() {
            this.clearDetailCharacter();
        },

        handleShareToFriend () {
            const {name, weight, height, types} = this.detailCharacter
            const message = `Name: ${name}, Weight: ${weight}, Height: ${height}, Types: ${types}`;
            copyToClipboard(message).then(() => {
                this.textButton = 'Copied to clipboard';
                setTimeout(() => {
                    this.textButton = 'Share to my friends'
                }, 2000)
            }).catch(() => {
                this.textButton = 'Failed to copy';
                setTimeout(() => {
                    this.textButton = 'Share to my friends'
                }, 2000)
            })
        }
    },
    data() {
        return {
            closeIcon,
            backgroundImage,
            customShare: {
                maxWidth: '195px',
            },
            textButton: 'Share to my friends'

        };
    },
};
</script>

<style src="./styles/detail-card.module.css" module></style>
