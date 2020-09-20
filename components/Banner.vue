<template>
    <b-container fluid="xl">
        <b-row align-v="center" class="text-container">
            <b-col>
                <h1 class="text-center font-weight-bold text-dark">
                    {{ name }}
                </h1>
                <h2 class="text-center text-dark">
                    {{ jobtitle }}
                </h2>
            </b-col>
        </b-row>
        <b-aspect ref="img" aspect="4096:2487" class="img-container" :style="{ left }">
            <b-img :srcset="srcset" />
        </b-aspect>
    </b-container>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';

const user = namespace('user');

@Component
export default class Banner extends Vue {
    private left: string = '0px';

    @Ref('img') readonly img!: Vue

    @user.State
    public name!: string;

    @user.State
    public jobtitle!: string;

    get srcset(): string {
        return [800, 1280, 1920, 4096].map((s: number) => require(`~/assets/banner-${s}w.jpg`) + ` ${s}w`).join(', ');
    }

    setBannerOffset() {
        const img: number = (this.img.$el as HTMLElement).clientWidth;
        const win: number = window.innerWidth;
        this.left = '-' + ((img / 2) - (win / 2)) + 'px';
    }

    mounted() {
        if (!process.client) {
            return;
        }
        window.addEventListener('resize', this.setBannerOffset);
        this.setBannerOffset();
    }
}
</script>

<style lang="scss" scoped>
div[class^='container-'] {
    height: 100vh;

    div.row {
        height: 100%;
    }
}

h1, h2{
    text-shadow: 0 0 3px white;
}

.text-container {
    position: relative;
    z-index: 5;
}

.img-container {
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;

    img {
        min-width: 100vw;
        min-height: 100vh;
    }
}
</style>
