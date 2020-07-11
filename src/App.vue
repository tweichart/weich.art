<template>
    <v-app id="app">
        <Banner/>
    </v-app>
</template>

<script>
import Banner from './components/Banner.vue'

export default {
    name: 'App',
    components: {
        Banner
    }
}
</script>

<style lang="scss">
    #app{
        height: 2000px;
    }
</style>
