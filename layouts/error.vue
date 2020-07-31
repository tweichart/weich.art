<template>
    <v-app dark>
        <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
        </h1>
        <h1 v-else>
            {{ otherError }}
        </h1>
        <NuxtLink to="/">
            Home page
        </NuxtLink>
    </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

interface error {
    statusCode: number
    message: string
}

@Component
export default class Error extends Vue {
    pageNotFound: string = '404 Not Found';
    otherError: string = 'An error occurred';

    @Prop({ default: null }) readonly error!: error;

    head(): object {
        return {
            title: this.error.statusCode === 404 ? this.pageNotFound : this.otherError
        };
    }
};
</script>

<style scoped>
    h1 {
        font-size: 20px;
    }
</style>
