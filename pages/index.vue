<template>
    <v-app id="app">
        <v-main>
            <v-container ref="container" class="fill-height">
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

.container {
    padding: 0;
}

//noinspection SassScssUnresolvedVariable
@media #{map-get($display-breakpoints, 'lg-and-up')} {
    .container {
        max-width: map-get($grid-breakpoints, "lg");
    }
}
</style>
