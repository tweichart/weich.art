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
    mounted() {
        const containerWidth = this.$el.offsetWidth;
        this.$refs.top.style.borderRightWidth = containerWidth + 'px';
        this.$refs.bottom.style.borderLeftWidth = containerWidth + 'px';
    }
};
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

$height: 35px;

.tilt-block {
    width: 100%;
    height: $height;
    position: absolute;
    z-index: 2;
    background-color: transparent;
}
.top {
    top: -$height;
    left: -12px;
    border-right: 0 solid transparent;
    border-bottom: $height solid #E5E5E5;
}
.bottom {
    bottom: -$height;
    right: -12px;
    border-left: 0 solid transparent;
    border-top: $height solid #E5E5E5;
}
</style>
