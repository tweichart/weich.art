<template>
    <nuxt />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { namespace } from 'nuxt-property-decorator';

const user = namespace('user');
@Component
export default class Default extends Vue {
    @user.State
    public name!: string;

    @user.State
    public shortname!: string;

    @user.State
    public url!: string;

    @user.State
    public jobtitle!: string;

    head() {
        return {
            title: this.name,
            meta: [{
                hid: 'description',
                name: 'description',
                content: 'My name is ' + this.name + ' and I\'m a ' + this.jobtitle
            }, {
                name: 'autor',
                content: this.name
            }, {
                name: 'twitter:site',
                content: '@' + this.shortname
            }, {
                name: 'twitter:title',
                content: this.name + ' - ' + this.jobtitle
            }, {
                name: 'og:title',
                content: this.name + ' - ' + this.jobtitle
            }, {
                name: 'og:description',
                content: 'My name is ' + this.name + ' and I\'m a ' + this.jobtitle
            }, {
                name: 'og:url',
                content: this.url
            }, {
                name: 'og:image',
                content: this.url + '/logo_square.jpg'
            }, {
                name: 'og:sit_name',
                content: this.name
            }]
        };
    }
}
</script>
