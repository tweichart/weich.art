<template>
    <v-row
        v-resize="rerenderImg"
        align="center"
        justify="center"
        class="description"
    >
        <v-col
            :key="imgKey"
            class="img-container"
            align-item="center"
            justify="center"
            v-bind="imgSizes"
        >
            <v-img v-img-circle="'white'" :eager="true" :contain="true" :src="src" @load="rerenderImg" />
        </v-col>
        <v-col class="text-container" v-bind="textSizes">
            <p v-for="(paragraph, index) in description" :key="index">
                {{ paragraph }}
            </p>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';
import { IBreakpointSizes } from '~/plugins/types.ts';

const user = namespace('user');

@Component
export default class Banner extends Vue {
    private src: string = require('~/assets/logo_black.png');
    private $vuetify: any;
    private imgKey: string = '';

    @user.State
    public name!: string;

    @user.State
    public jobtitle!: string;

    @user.State
    public description!: string[];

    get imgSizes(): IBreakpointSizes {
        return {
            xl: 4,
            lg: 4,
            md: 4,
            cols: 12
        };
    }

    get textSizes(): IBreakpointSizes {
        return {
            xl: 8,
            lg: 8,
            md: 8,
            cols: 12
        };
    }

    rerenderImg(): void {
        this.imgKey = this.$vuetify.breakpoint.name;
    }
}
</script>

<style lang="scss" scoped>
.description {
    background-color: #E5E5E5;

    .img-container {
        padding: 50px;
    }

    .text-container {
        padding: 25px;
    }
}
</style>
