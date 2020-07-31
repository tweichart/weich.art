<template>
    <v-parallax ref="paral" :srcset="srcset" :height="height">
        <v-row
            align="center"
            justify="center"
        >
            <v-col class="text-center" cols="12">
                <h1 class="text-xl-h1 text-md-h2 font-weight-black">
                    {{ name }}
                </h1>
                <h2 class="text-xl-h3">
                    {{ jobtitle }}
                </h2>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';

const user = namespace('user');

@Component
export default class Banner extends Vue {
    private sizes: Array<number> = [1280, 1920, 4096];

    @user.State
    public name!: string;

    @user.State
    public jobtitle!: string;

    get srcset(): string {
        return this.sizes.map((s: number) => require(`@/assets/banner-${s}w.jpg`) + ' ' + s + 'w').join(', ');
    }

    get height(): number {
        return process.client ? window.innerHeight : 500;
    }

    mounted() {
        if (window.innerHeight > window.innerWidth) {
            (this.$refs.paral as Vue).$el.getElementsByTagName('img')[0].onload = (e) => {
                const container = e.target as HTMLImageElement;
                // @ts-ignore
                container.style.top = container.style.transform.match(/(\d+)px/)[1] + 'px';
            };
        }
    }
}
</script>

<style lang="scss" scoped>
.v-parallax {
    width: 100vw;

}
</style>
