<template>
    <b-container fluid class="main">
        <GithubLabel />
        <b-container>
            <Banner />
        </b-container>
        <b-container>
            <Description />
        </b-container>
        <b-container>
            <Timeline />
        </b-container>
        <b-container>
            <Contact />
        </b-container>
    </b-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
};
</script>
<style lang="scss">
.main{
    .container:nth-child(odd){
        background-color: $main-grey-bright;
    }
    .container:nth-child(even){
        background-color: $main-grey-dark;
    }
    // overlay scroll effect
    & > div.container:not(:first-child) {
        position: relative;
        z-index: 10;
        max-width: 100vw;
        width: 100vw;
        margin-left: -15px;
        padding: 30px 15px;
    }
}
</style>
