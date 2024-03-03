<template>
  <div :class="$style.container">
    <div v-if="viewCharacters?.length > 0" :class="$style.containerList">
      <CharacterCard v-for="item in viewCharacters" :key="item.id" :item="item" />
    </div>
    <Error v-if="clientError" />
  </div>
</template>

<script>
import { CharacterCard, Error } from "@/components/";
import { mapState } from "vuex";

export default {
  name: "CharactersList",
  props: {
    view: { type: String },
  },
  components: {
    CharacterCard,
    Error,
  },
  computed: {
    ...mapState(["characters", "favoriteState", "filteredCharacters", "clientError"]),
    viewCharacters() {
      if (this.view === "list") {
        return this.characters;
      } else if (this.view === "favorite") {
        return this.favoriteState;
      } else if (this.view === "search") return this.filteredCharacters;
    },
  }
};
</script>

<style src="./styles/characters-list.module.css" module></style>
