<template>
  <div v-if="!clientError" :class="$style.container">
    <StyledButtonIcon :type="'list'" :onClick="redirectList" :disabled="this.view === 'list'" />
    <StyledButtonIcon :type="'favorite'" :onClick="redirectFavorite" :disabled="this.view === 'favorite'" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { StyledButtonIcon } from "@/components/";

export default {
  name: "NavigationBar",
  components: {
    StyledButtonIcon,
  },
  props: {
    handleControl: {
      type: Function,
    },
    view: {
      type: String
    }
  },
  methods: {
    redirectFavorite() {
      this.handleControl('favorite');
    },
    redirectList() {
      this.handleControl('list');
    }
  },
  computed: {
    ...mapState(["loading", "clientError"]),
  },
};
</script>

<style src="./styles/navigation-bar.module.css" module></style>

