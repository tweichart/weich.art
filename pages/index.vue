<template>
    <v-app id="app">
        <v-main>
            <v-container ref="container" class="fill-height">
                <v-row justify="center">
                    <Banner />
                </v-row>
                <tilt-row justify="center">
                    <Description />
                </tilt-row>
                <v-row id="spacing">
                    <v-row>spacing content</v-row>
                </v-row>
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

#spacing {
    height: 2000px;
}

.container {
    padding: 0;

    & > .row {
        position: relative;
        @media #{map-get($display-breakpoints, 'md-and-up')} {
            &:before {
                position: absolute;
                z-index: 0;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border: 10px solid black;
                border-top: none;
                border-bottom: none;
                filter: blur(10px);
                content: ''
            }
        }
        /* @media #{map-get($display-breakpoints, 'lg-and-up')} {
            &:before {
                left: 10px;
                right: 10px;
            }
        } */

        & > * {
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: white;
        }
    }
}

@media #{map-get($display-breakpoints, 'lg-and-up')} {
    .container {
        max-width: map-get($grid-breakpoints, "lg");
    }
}
</style>
