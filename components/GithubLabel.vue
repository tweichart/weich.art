<template>
    <a :href="repo" target="_blank" class="text-center font-weight-bold text-light text-decoration-none p-2 bg-dark">
        <b-row class="icon">
            <b-col>
                <b-avatar variant="light" size="40px">
                    <font-awesome-icon :icon="['fab', 'github']" size="2x" class="text-dark" />
                </b-avatar>
            </b-col>
        </b-row>
    </a>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';

const user = namespace('user');

@Component
export default class Banner extends Vue {
    @user.State
    public repo!:string;
};
</script>

<style scoped lang="scss">
a {
    position: fixed;
    z-index: 11;
    transform: rotate(45deg);
    top: -10px;
    right: -50px;
    width: 150px;
    height: 75px;
    padding-top: 23px !important;

    .icon {
        transform: scale(1);
        transition: transform 0.2s;
        &:hover{
            transform: scale(1.2);
            transition: transform 0.2s;
        }
    }
}
</style>
