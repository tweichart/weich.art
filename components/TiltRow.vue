<template>
    <v-row>
        <div ref="top" class="tilt-block top" />
        <slot />
        <div ref="bottom" class="tilt-block bottom" />
    </v-row>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Banner extends Vue {
};
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

$height: 50px;
$border: 24px;

.tilt-block {
    width: calc(100% + #{$border});
    height: $height;
    position: absolute;
    z-index: 2;
    background-color: transparent;
}
.top {
    top: -$height;
    left: calc((#{$border} / 2) * -1);
    border-right: 82rem solid transparent;
    border-bottom: $height solid #E5E5E5;
}
.bottom {
    bottom: -$height;
    right: calc((#{$border} / 2) * -1);
    border-left: 82rem solid transparent;
    border-top: $height solid #E5E5E5;
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
    .top {
        border-right-width: 59rem;
    }
    .bottom {
        border-left-width: 59rem;
    }
}

</style>
