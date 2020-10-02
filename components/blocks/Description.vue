<template>
    <b-container fluid="xl" class="text-dark">
        <b-row align-v="center">
            <b-col cols="12" sm="4" class="block left text-sm-left text-center pb-4 pb-sm-0">
                <h5 class="font-weight-bold">
                    Description
                </h5>
                <p v-for="(paragraph, i) of description" :key="i" class="text-md-justify pb-2">
                    {{ paragraph }}
                </p>
            </b-col>
            <b-col cols="12" sm="4" class="pl-lg-5 pl-sm-2 pl-5 pr-lg-5 pr-sm-2 pr-5 align-middle">
                <b-aspect :aspect="'1:1'">
                    <b-avatar variant="light" :src="src" size="100%" />
                </b-aspect>
            </b-col>
            <b-col cols="12" sm="4" class="block right text-sm-right text-center pt-4 pt-sm-0">
                <b-row>
                    <b-col cols="4" sm="12">
                        <h5 class="font-weight-bold">
                            Name
                        </h5>
                        <p>{{ name }}</p>
                    </b-col>
                    <b-col cols="4" sm="12">
                        <h5 class="font-weight-bold">
                            Age
                        </h5>
                        <p v-b-visible="onAgeVisible">
                            {{ ageCount }}-ish
                        </p>
                    </b-col>
                    <b-col cols="4" sm="12">
                        <h5 class="font-weight-bold">
                            Location
                        </h5>
                        <p>{{ location }}</p>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';

const user = namespace('user');

@Component
export default class Banner extends Vue {
    private src: string = require('~/assets/img/logo_black.png');
    private ageCount: number = 0;

    @user.State
    public name!: string;

    @user.State
    public description!: string[];

    @user.State
    public location!: string;

    @user.State
    public birthday!: Date;

    get age() {
        const ageDate = new Date(Date.now() - this.birthday.getTime());
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    onAgeVisible(isVisible: boolean, speed: number = 50) {
        if (!process.client || !isVisible || this.ageCount >= this.age) {
            return;
        }
        this.ageCount++;
        // simulate easing count up
        const updatedSpeed: number = speed + (speed / 15);
        setTimeout(() => this.onAgeVisible(true, updatedSpeed), updatedSpeed);
    }
}
</script>

<style lang="scss" scoped>
// scale not-square images
.b-avatar::v-deep .b-avatar-img img {
    width: 95%;
    height: auto;
    border-radius: initial;
}

.block p{
    margin-bottom: 0;
}
</style>
