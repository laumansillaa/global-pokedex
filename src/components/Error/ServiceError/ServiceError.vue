<template>
    <div :class="$style.container">
        <div :class="$style.containerError">
            <h1 :class="$style.title">Uh-oh!</h1>
            <h3 :class="$style.description">{{ this.serverError.message }}</h3>
            <StyledButton :onClick="goToHome">
                Go Back Home
            </StyledButton>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { navigate } from "@/router/navigation";

import {
    StyledButton
} from "@/components/";
export default {
    name: "ServiceError",
    components: {
        StyledButton
    },
    computed: {
        ...mapState(["serverError"])
    },
    methods: {
        goToHome() {
            this.$store.commit("setServerError", {
                status: false,
                message: ""
            });
            this.$router.push(navigate.welcome);
        },
    },
}
</script>

<style src="./styles/service-error.module.css" module></style>
