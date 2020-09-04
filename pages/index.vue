<template>
    <v-app id="app">
        <v-main>
            <v-container class="fill-height app-container">
                <Banner />
                <Description />
                <Timeline />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
};
</script>
<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.app-container {
    padding: 0;
}

//noinspection SassScssUnresolvedVariable
@media #{map-get($display-breakpoints, 'lg-and-up')} {
    .app-container {
        max-width: map-get($grid-breakpoints, "lg");
    }
}
</style>
