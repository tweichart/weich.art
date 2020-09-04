<template>
    <v-row
        align="center"
        justify="center"
        class="text-center"
        cols="12"
    >
        <v-col class="text-container" cols="12">
            <p>asd</p>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Banner extends Vue {
}
</script>

<style lang="scss" scoped>
.row {
    background-color: #D7D6D6;
}
</style>
