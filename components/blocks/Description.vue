<template>
    <div>
        <v-row
            align="center"
            justify="center"
            class="text-center img-container d-block d-md-none"
            cols="12"
        >
            <v-img v-img-circle="'white'" :contain="true" :src="src" />
        </v-row>
        <v-row
            align="center"
            justify="center"
        >
            <v-col class="text-center img-container d-none d-md-block" cols="4">
                <v-img v-img-circle="'white'" :contain="true" :src="src" />
            </v-col>
            <v-col class="text-center text-container" cols="8">
                <p v-for="(paragraph, index) in description" :key="index">
                    {{ paragraph }}
                </p>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';

const user = namespace('user');

@Component
export default class Banner extends Vue {
    private src: string = require('~/assets/logo_black.png');

    @user.State
    public name!: string;

    @user.State
    public jobtitle!: string;

    @user.State
    public description!: string[];
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';
.row {
    background-color: #E5E5E5;
}

.img-container {
    padding: 50px;
}

.text-container {
    padding: 25px;
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
    .text-container {
        max-width: 100%;
        width: 100%;
        flex: 0 0 90%;
    }
}

</style>
