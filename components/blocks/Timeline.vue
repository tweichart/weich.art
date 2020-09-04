<template>
    <v-row
        align="center"
        justify="center"
        cols="12"
        class="grey lighten-1"
    >
        <v-timeline>
            <v-timeline-item v-for="(job, i) in jobs" :key="i" small>
                <v-card>
                    <v-card-title class="grey lighten-2 flex-column">
                        <h4 class="grey--text text--darken-3 font-weight-light">
                            {{ job.title }} @ {{ job.company.name }}
                        </h4>
                        <div>
                            <v-tooltip v-for="(tag, ii) in job.tags" :key="ii" bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon v-bind="attrs" v-on="on">
                                        {{ getIconForTag(tag) }}
                                    </v-icon>
                                </template>
                                <span>{{ getTooltipForTag(tag) }}</span>
                            </v-tooltip>
                        </div>
                    </v-card-title>
                    <v-container>
                        <v-row>
                            <v-col>
                                {{ job.description }}
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';

import { Job, IIconMap } from '@/plugins/types';

const user = namespace('user');
@Component
export default class Banner extends Vue {
    @user.State
    public jobs!: Job[];

    @user.Getter
    public tagIcons!: IIconMap;

    getIconForTag(tag: string) {
        return (this.tagIcons[tag] || { icon: '' }).icon;
    }

    getTooltipForTag(tag: string) {
        return (this.tagIcons[tag] || { text: '' }).text;
    }
}
</script>

<style lang="scss" scoped>
.v-timeline {
    padding: 24px;
}
</style>
