<template>
  <div :class="$style.container">
    <Loader v-if="loading" />
    <div :class="$style.containerHome" v-else>
      <StyledInput v-model:searchInput="searchInput" :inputValue="searchInput" />
      <CharactersList :view="viewCharacters" />
    </div>
    <GenericModal v-if="detailCharacter?.id">
      <DetailCard />
    </GenericModal>
    <GenericModal v-if="serverError?.status">
      <ServiceError />
    </GenericModal>
    <NavigationBar :handleControl="handleControlNavigation" :view="viewCharacters" />
  </div>
</template>

<script>
import {
  StyledInput,
  CharactersList,
  Loader,
  NavigationBar,
  GenericModal,
  DetailCard,
  ServiceError
} from "@/components/";
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      viewCharacters: "list",
      searchInput: "",
    };
  },
  components: {
    StyledInput,
    CharactersList,
    Loader,
    NavigationBar,
    GenericModal,
    DetailCard,
    ServiceError
  },
  computed: {
    ...mapState(["loading", "detailCharacter", "clientError", "serverError"])
  },
  methods: {
    handleControlNavigation(value) {
      this.viewCharacters = value
    },
  },
  watch: {
    searchInput() {
      if (this.searchInput.length > 0) {
        this.handleControlNavigation("search")
      } else {
        this.clientError === true ? this.$store.commit("setError", false) : null;
        this.handleControlNavigation("list")
      }
      this.$store.dispatch("handleFilterCharacters", this.searchInput)
    }
  },
  created() {
    this.$store.dispatch("handleGetCharacters");
  },

};
</script>

<style src="./styles/home.module.css" module></style>
