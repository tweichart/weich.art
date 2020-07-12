<template>
    <v-app id="app">
        <v-parallax :key="height" :srcset="srcset" :height="height">
            <v-row
                align="center"
                justify="center"
            >
                <v-col class="text-center" cols="12">
                    <h1 class="text-xl-h1 text-md-h2 font-weight-black">
                        {{ name }}
                    </h1>
                    <h2 class="text-xl-h3">
                        {{ title }}
                    </h2>
                </v-col>
            </v-row>
        </v-parallax>
    </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Banner",
    data() {
        return {
            height: 0,
        };
    },
    computed: {
        srcset() {
            return [4096, 1920, 800].map(s => require(`@/assets/banner-${s}w.jpg`) + " " + s + "w").join(", ");
        },
        ...mapState({
            name: state => state.name,
            title: state => state.jobtitle,
        }),
    },
    created() {
        if (process.client) {
            // eslint-disable-next-line nuxt/no-globals-in-created
            window.addEventListener("resize", this.onWindowResize);
        }
    },
    destroyed() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            window.removeEventListener("resize", this.onWindowResize);
        }
    },
    beforeMount() {
        this.height = this.getBannerHeight();
    },
    methods: {
        onWindowResize() {
            this.height = this.getBannerHeight();
        },
        getBannerHeight() {
            const ratioHeight = window.innerWidth * 0.665626; // ~ 4096 / 2487
            return ratioHeight < window.innerHeight ? (ratioHeight - 75) : window.innerHeight;
        },
    },
};
</script>
<style lang="scss">
    #app{
        height: 2000px;
    }
</style>
