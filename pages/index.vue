<template>
    <v-app id="app">
        <v-main>
            <v-container ref="container" class="fill-height">
                <v-row justify="center">
                    <Banner />
                </v-row>
                <v-row id="spacing">
                    <div>spacing content</div>
                </v-row>
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
        & > .row{
            position: relative;
            &:before {
                position: absolute;
                z-index: 0;
                top: 0;
                left: 10px;
                right: 10px;
                bottom: 0;
                border: 10px solid black;
                border-top: none;
                border-bottom: none;
                filter: blur(10px);
                content: ''
            }
            & > *{
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
