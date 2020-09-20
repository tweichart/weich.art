import { VuexModule, Module } from 'vuex-module-decorators';
import { IUserState, IIconMap } from '@/plugins/types';
import { mdiAngular, mdiAws, mdiLaravel, mdiSymfony, mdiVuejs } from '@mdi/js';

@Module({
    name: 'user',
    namespaced: true,
    stateFactory: true,
})
export default class User extends VuexModule implements IUserState {
    public name = 'Tobias Weichart';

    public jobtitle = 'Senior Software Engineer';

    public birthday = new Date('1989-02');

    public location = 'Galway, Ireland';

    public description = [
        'Hey, my name is Tobias and I\'m a Senior Software Engineer.',
        'What I do? Front & Backend, DevOps and most important learning every day!'
    ];

    public jobs = [{
        title: 'Senior Software Engineer',
        company: {
            name: 'EssentialSkillz',
            link: 'https://www.essentialskillz.com/'
        },
        start: '2019-12',
        description: 'A new start into the world of E-Learning, mostly based on PHP/VueJS and AWS!',
        tags: ['vuejs', 'laravel', 'aws']
    }, {
        title: 'Senior Application Developer',
        company: {
            name: 'Supply Chain Formulae'
        },
        start: '2019-07',
        end: '2019-11',
        description: `Mostly working with PHP and AWS, my skill set could be extended with a deeper dive into the
        Symfony framework. I've contributed to the modernisation, restructuring and reworking of the applications but
        could also assist in changing internal workflows, so that a modern style of software developing could be
        achieved.`,
        tags: ['angular', 'symfony', 'aws']
    }];

    get tagIcons(): IIconMap {
        return {
            angular: {
                icon: mdiAngular,
                text: 'AngularJS'
            },
            aws: {
                icon: mdiAws,
                text: 'AWS'
            },
            laravel: {
                icon: mdiLaravel,
                text: 'Laravel'
            },
            symfony: {
                icon: mdiSymfony,
                text: 'Symfony'
            },
            vuejs: {
                icon: mdiVuejs,
                text: 'VueJS'
            },
        };
    }
}
