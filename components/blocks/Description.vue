<template>
    <b-container fluid="xl">
        <b-row align-v="center">
            <b-col cols="4" class="block left text-left">
                <b-row>
                    <b-col>
                        <b>Description</b>
                        <p v-for="(paragraph, i) of description" :key="i">
                            {{ paragraph }}
                        </p>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="4">
                <b-avatar variant="light" :src="src" size="24rem" />
            </b-col>
            <b-col cols="4" class="block right text-right">
                <b-row>
                    <b-col>
                        <b>Age</b>
                        <br>
                        <span>{{ age }}-ish</span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b>Location</b>
                        <br>
                        <span>{{ location }}</span>
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
    private src: string = require('~/assets/logo_black.png');

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
}
</script>

<style lang="scss" scoped>
.b-avatar::v-deep .b-avatar-img img {
    width: 95%;
    height: auto;
    border-radius: initial;
}

.block.left .row {
    padding: 25px 50px 25px 0;
}

.block.right .row {
    padding: 25px 0 25px 50px;
}
</style>
