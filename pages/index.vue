<template>
    <v-app id="app">
        <v-main>
            <v-container ref="container" class="fill-height">
                <v-row justify="center">
                    <Banner />
                </v-row>
                <v-row id="spacing" />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Banner from '@/components/Banner.vue';

@Component({
    components: {
        Banner
    }
})

export default class Index extends Vue {
};
</script>
<style lang="scss">
    @import '~vuetify/src/styles/settings/_variables';

    #spacing {
        height: 2000px;
    }

    .container {
        padding: 0;
    }

    @media #{map-get($display-breakpoints, 'lg-and-up')} {
        .container {
            max-width: map-get($grid-breakpoints, "lg");
        }
    }
</style>
