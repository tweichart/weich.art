<template>
    <b-container class="pt-2 pb-1 text-dark">
        <b-row>
            <b-col class="text-center">
                <span>Built with &hearts; and
                    <a
                        v-for="(link, name) of links"
                        :key="name"
                        :href="link"
                        target="__blank"
                        class=" text-decoration-none text-dark"
                    >
                        {{ name }}
                    </a>
                </span>
            </b-col>
        </b-row>
    </b-container>
</template>
<script lang="ts">
/* eslint-disable quote-props */

import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
    private links: string[] = {
        'Vue.js': 'https://vuejs.org/',
        'Nuxt.js': 'https://nuxtjs.org/',
        'TypeScript': 'https://www.typescriptlang.org/',
        'Bootstrap Vue': 'https://bootstrap-vue.org/',
        'AWS': 'https://aws.amazon.com/'
    }
}
</script>
<style lang="scss" scoped>
.container {
    background-color: $main-grey-dark;
    font-size: 0.8rem;
    line-height: 14px;

    a:after {
        content: '/';
    }

    a:last-of-type:after {
        content: '';
    }
}

</style>
