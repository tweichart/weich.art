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

    public description = [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nisi, semper lobortis
        dignissim eget, dapibus et lorem. Aenean varius tincidunt lobortis. Integer ipsum arcu, efficitur eget lorem
        non, sollicitudin volutpat mauris. Cras varius velit lacinia ligula ullamcorper feugiat. Maecenas ultricies
        vehicula hendrerit. Duis eget consequat nisl. Nunc iaculis, justo et fringilla consectetur, elit nisi dictum
        purus, ac facilisis eros nulla in metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        fringilla vehicula lectus non suscipit. Nunc sed tristique enim, at scelerisque lorem.`,
        `Suspendisse imperdiet neque at laoreet dictum. Vivamus vestibulum nibh dui, vel suscipit elit pellentesque id. Ut
        porta, diam in convallis tristique, urna mauris tincidunt risus, quis tincidunt neque lectus et lectus. Nullam
        vitae tincidunt metus. Duis est libero, tempor ac libero lobortis, scelerisque sodales metus. Nulla vel pretium
        ex. Donec quis fringilla nunc, id imperdiet lacus. Etiam et elit ut neque pharetra venenatis nec non nisi.
        Phasellus facilisis sollicitudin quam vitae vestibulum.`
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
