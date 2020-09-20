<template>
    <b-container fluid="xl" class="text-dark">
        <h3 class="font-weight-bold">
            Experience
        </h3>
        <b-row v-for="(job, i) of jobs" :key="i" class="block">
            <b-col cols="4" class="job-general" align-self="baseline">
                <h5 class="font-weight-bold">
                    {{ job.title }}
                </h5>
                <small class="text-muted">{{ formatDate(job.start) }} - {{ formatDate(job.end) }}</small>
                <div>
                    <font-awesome-icon
                        v-for="(icon, ii) of job.tags"
                        :key="ii"
                        v-b-tooltip.hover.bottom="icon"
                        :icon="['fab', icon]"
                        class="icon"
                    />
                </div>
            </b-col>
            <b-col cols="8" class="job-description" align-self="stretch">
                <h5 class="font-weight-bold company">
                    <a v-if="job.company.link" :href="job.company.link" target="_blank" class="text-dark">
                        {{ job.company.name }}
                    </a>
                    <span v-else>
                        {{ job.company.name }}
                    </span>
                </h5>
                <p class="text-justify">
                    {{ job.description }}
                </p>
            </b-col>
        </b-row>
    </b-container>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'nuxt-property-decorator';
import { IJob } from '~/plugins/types';

const user = namespace('user');

@Component
export default class Banner extends Vue {
    private src: string = require('~/assets/logo_black.png');

    @user.State
    public jobs!: IJob[];

    formatDate(date: Date): string {
        const today: Date = new Date();
        if (today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth()) {
            return 'present';
        }
        const month: number = date.getMonth() + 1;
        return date.getFullYear() + '/' + (month < 10 ? '0' + month : month);
    }
}
</script>

<style lang="scss" scoped>
h3 {
    margin-bottom: 30px;
}

h5 {
    margin: 0;
}

.block {
    margin-bottom: 60px;

    &:last-of-type {
        margin-bottom: 0;
    }

    .job-general {
        padding: 15px 0 15px 15px;
        background-color: $main-grey-bright;

        .icon {
            margin-right: 10px;
            cursor: pointer;
        }
    }

    .job-description {
        padding: 15px 15px 0 15px;

        h5 {
            margin-bottom: 1px;
        }
    }

    .company > a {
        text-decoration: none;
    }
}
</style>
