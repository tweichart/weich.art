<template>
    <b-container fluid="xl" class="text-dark">
        <h3 class="font-weight-bold mb-4">
            Experience
        </h3>
        <b-row v-for="(job, i) of jobs" :key="i" class="block mb-md-5">
            <b-col cols="12" md="4" align-self="baseline" class="mt-4 mt-md-0">
                <b-card no-body class="job-general p-4">
                    <h4 class="font-weight-bold mb-0">
                        {{ job.title }}
                    </h4>
                    <small class="text-muted">
                        {{ formatDate(job.start) }} - {{ formatDate(job.end) }}
                    </small>
                    <div class="mt-4">
                        <font-awesome-icon
                            v-for="(icon, ii) of job.tags"
                            :key="ii"
                            v-b-tooltip.hover.bottom="icon"
                            :icon="['fab', icon]"
                            class="icon"
                        />
                    </div>
                </b-card>
            </b-col>
            <b-col cols="12" md="8" class="job-description" align-self="stretch">
                <b-card no-body class="pt-4 pb-4">
                    <h4 class="font-weight-bold company mb-0">
                        <a
                            v-if="job.company.link"
                            :href="job.company.link"
                            target="_blank"
                            class="text-dark text-decoration-none"
                        >
                            {{ job.company.name }}
                        </a>
                        <span v-else>
                            {{ job.company.name }}
                        </span>
                    </h4>
                    <p class="text-justify m-0">
                        {{ job.description }}
                    </p>
                </b-card>
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
.block {
    // remove margin for last block
    &:last-of-type {
        margin-bottom: 0;
        & > .job-description > .card{
            padding-bottom: 10px !important;
        }
    }

    // remove margin for first column present
    &:first-of-type {
        & > [class*='col'] {
            margin-top: 0 !important;
        }
    }

    [class*="col"] {
        padding: 0 15px;
    }

    .card {
        border: none;
        border-radius: 0;
        background-color: transparent;

        &.job-general {
            background-color: $main-grey-bright;
        }
    }

    .job-description h5 {
        margin-bottom: 1px;
    }

    .icon {
        margin-right: 10px;
        cursor: pointer;
    }

    h4{
        font-size: 1.25rem;
    }
}
</style>
