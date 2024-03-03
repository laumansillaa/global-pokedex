<template>
  <div :class="$style.containerWelcome">
    <img :src="logoImg" alt="Welcome Logo" :class="$style.logoWelcome" />
    <div :class="$style.containerText">
      <h1 :class="$style.title">Welcome to Pokédex</h1>
      <h3 :class="$style.description">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </h3>
    </div>
    <StyledButton :onClick="goToHome"> Get started </StyledButton>
  </div>
</template>

<script>
import logoWelcome from "@/assets/logo-welcome.png";
import { StyledButton } from "@/components/";
import { navigate } from "@/router/navigation";

export default {
  name: "Welcome",
  components: {
    StyledButton,
  },
  data() {
    return {
      logoImg: logoWelcome,
    };
  },
  methods: {
    goToHome() {
      this.$router.push(navigate.home);
    },
  },
};
</script>

<style src="./styles/welcome.module.css" module></style>
