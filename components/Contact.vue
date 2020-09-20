<template>
    <b-container fluid="xl" class="text-dark">
        <b-row>
            <b-col v-for="(contact, i) of contacts" :key="i" :cols="contactCols" class="text-center">
                <a :href="contact.link" target="_blank">
                    <b-avatar variant="light" size="75px">
                        <font-awesome-icon :icon="['fab', contact.icon]" size="3x" class="text-dark" />
                    </b-avatar>
                </a>
            </b-col>
        </b-row>
    </b-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';
import { IContact } from '~/plugins/types';

const user = namespace('user');

@Component
export default class Banner extends Vue {
    @user.State
    public contacts!: IContact[];

    get contactCols(): number {
        return Math.floor(this.contacts.length / 12);
    }
}
</script>

<style lang="scss" scoped>
</style>
