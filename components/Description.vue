<template>
    <v-row
        align="center"
        justify="center"
    >
        <v-col class="text-center img-container" cols="4">
            <v-img v-img-circle="'white'" :contain="true" :src="src" />
        </v-col>
        <v-col class="text-center" cols="8">
            <p v-for="(paragraph, index) in description" :key="index">
                {{ paragraph }}
            </p>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';

const user = namespace('user');

@Component
export default class Banner extends Vue {
    private src: string = require('@/assets/logo_black.png');

    @user.State
    public name!: string;

    @user.State
    public jobtitle!: string;

    @user.State
    public description!: string[];
}
</script>

<style lang="scss" scoped>
.row {
    background-color: #E5E5E5;
    margin-left: 0;
    margin-right: 0;
}

.img-container {
    padding: 50px;
}
</style>
