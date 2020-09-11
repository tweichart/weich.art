<template>
    <b-container fluid="xl">
        <b-row>
            <b-col cols="4">
                <p>{{ description }}</p>
            </b-col>
            <b-col cols="4">
                <b-avatar variant="light" :src="src" size="24rem" />
            </b-col>
            <b-col cols="4">
                <p><b>Age: </b>{{ age }}</p>
                <p><b>Location: </b>{{ location }}</p>
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
    public description!: string;

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
</style>
