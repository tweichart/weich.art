<template>
    <v-app id="app">
        <v-parallax :key="height" :srcset="srcset" :height="height">
            <v-row
                align="center"
                justify="center"
            >
                <v-col class="text-center" cols="12">
                    <h1 class="text-xl-h1 text-md-h2 font-weight-black">
                        {{ info.name }}
                    </h1>
                    <h2 class="text-xl-h3">
                        {{ info.title }}
                    </h2>
                </v-col>
            </v-row>
        </v-parallax>
    </v-app>
</template>

<script lang="ts">
import * as process from "process";
import { Vue, Component, namespace } from "nuxt-property-decorator";
const user = namespace("user");

@Component
export default class Index extends Vue {
    private height: number = 0;
    private sizes: Array<number> = [4096, 1920, 800];

    @user.State
    public info!: string

    get srcset(): string {
        return this.sizes.map((s: number) => require(`@/assets/banner-${s}w.jpg`) + " " + s + "w").join(", ");
    }

    public onWindowResize(): void {
        this.height = this.getBannerHeight();
    }

    public getBannerHeight(): number {
        const ratioHeight = window.innerWidth * 0.665626; // ~ 4096 / 2487
        return ratioHeight < window.innerHeight ? (ratioHeight - 75) : window.innerHeight;
    }

    created() {
        if (process.client) {
            window.addEventListener("resize", this.onWindowResize);
        }
    }

    destroyed() {
        if (process.client) {
            window.removeEventListener("resize", this.onWindowResize);
        }
    }

    beforeMount() {
        this.height = this.getBannerHeight();
    }
};
</script>
<style lang="scss">
    #app {
        height: 2000px;
    }
</style>
