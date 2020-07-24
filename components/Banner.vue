<template>
    <v-parallax ref="paral" :key="height" :height="height" :src="src">
        <v-row
            align="center"
            justify="center"
        >
            <v-col class="text-center" cols="12">
                <h1 class="text-xl-h1 text-md-h2 font-weight-black">
                    {{ info.name }}
                </h1>
                <h2 class="text-xl-h3">
                    {{ info.jobTitle }}
                </h2>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "nuxt-property-decorator";

const user = namespace("user");

@Component
export default class Banner extends Vue {
    private height: number = 0;
    private src: string = "";
    private sizes: Array<number> = [4096, 1920, 1280];

    @user.State
    public info!: object;

    public mounted() {
        if (process.client) {
            const imageWidth: number = this.getSmallestWidth();
            const imageHeight: number = imageWidth * 0.665626;
            this.height = window.innerHeight > imageHeight ? imageHeight : window.innerHeight;
            this.src = require(`@/assets/banner-${imageWidth}w.jpg`);
        }
    }

    private getSmallestWidth(): number {
        const width: number = (this.$refs.paral as Vue).$el.getElementsByTagName("img")[0].clientWidth;
        for (const s of this.sizes.sort((a, b) => a - b)) {
            if (s >= width) {
                return s;
            }
        }
        return 0;
    }
}
</script>

<style lang="scss" scoped>
    .v-parallax {
        width: 100%;
    }
</style>
