<template>
    <v-row
        align="center"
        justify="center"
        class="background"
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
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';

const user = namespace('user');

@Component
export default class Banner extends Vue {
    @user.State
    public name!: string;

    @user.State
    public jobtitle!: string;
}
</script>

<style lang="scss" scoped>
.background {
    background: url('~assets/banner-1280w.jpg');
    background: -webkit-image-set(
            url('~assets/banner-800w.jpg') 0x,
            url('~assets/banner-1280w.jpg') 1x,
            url('~assets/banner-1920w.jpg') 2x
    );
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    min-height: calc(100vh + 35px);
}
</style>
