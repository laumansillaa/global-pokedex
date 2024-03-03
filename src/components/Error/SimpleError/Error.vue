<template>
    <div :class="$style.containerError">
        <h1 :class="$style.title">Uh-oh!</h1>
        <h3 :class="$style.description">You look lost on your journey!</h3>
        <StyledButton :onClick="goToHome"> Go back home </StyledButton>
    </div>
</template>

<script>
import { StyledButton } from "@/components/";
import { navigate } from "@/router/navigation";

export default {
    name: "Error",
    components: {
        StyledButton
    },
    methods: {
        goToHome() {
            this.$router.push(navigate.welcome);
            this.$store.commit("setError", false);
        },
    },
}
</script>

<style src="./styles/error.module.css" module></style>