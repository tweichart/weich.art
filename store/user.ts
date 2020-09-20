import { VuexModule, Module } from 'vuex-module-decorators';
import { IUserState } from '@/plugins/types';
// @ts-ignore
import { faAngular, faAws, faBitbucket, faDocker, faGit, faGitlab, faJs, faLaravel, faNodeJs, faPhp, faSymfony, faVuejs, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faAngular, faAws, faBitbucket, faDocker, faGit, faGitlab, faJs, faLaravel, faNodeJs, faPhp, faSymfony, faVuejs, faWikipediaW);

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
        start: '12/2019',
        end: 'present',
        description: 'A new start into the world of E-Learning, mostly based on PHP/VueJS and AWS!',
        tags: ['vuejs', 'laravel', 'docker', 'aws', 'bitbucket']
    }, {
        title: 'Senior Application Developer',
        company: {
            name: 'Supply Chain Formulae'
        },
        start: '07/2019',
        end: '11/2019',
        description: `Mostly working with PHP and AWS, my skill set could be extended with a deeper dive into the
        Symfony framework. I've contributed to the modernisation, restructuring and reworking of the applications but
        could also assist in changing internal workflows, so that a modern style of software developing could be
        achieved.`,
        tags: ['angular', 'symfony', 'docker', 'aws', 'bitbucket']
    }, {
        title: 'Team Leader Frontend Technologies',
        company: {
            name: 'InterNetX GmbH',
            link: 'https://www.internetx.com/en/'
        },
        start: '03/2018',
        end: '07/2019',
        description: `By the experience gained in the last years with modern web technologies I was assigned to lead
        the development of the redesign of one of the biggest platforms the company has. Still being responsible for
        the projects I've successfully supervised before, the complete rewrite of a stable yet aged frontend was
        started. Using the modern technologies stack I became familiar with over the last years (Laravel + Vue.js,
        Docker + Kubernetes) this challenging new project was started and is progressing rapidly towards a new
        experience for all - developer just like end user.`,
        tags: ['vuejs', 'laravel', 'node-js', 'docker', 'gitlab']
    }, {
        title: 'Senior Software Engineer',
        company: {
            name: 'InterNetX GmbH',
            link: 'https://www.internetx.com/en/'
        },
        start: '10/2015',
        end: '03/2018',
        description: `Based on the latest web technologies (e.g. Laravel, Vue.js) my focus was set on a stable yet
        fully automated environment (Docker/Kubernetes + GitLab) with a good basis for everybody on the team to work
        with. New technologies are always welcome as long as everybody can learn them fast enough to get a real benefit
        out of it in a short time. Apart from the frontend I've also created multiple APIs (NodeJS) for various projects
         that don't fit the normal scheme.`,
        tags: ['vuejs', 'laravel', 'node-js', 'docker', 'gitlab']
    }, {
        title: 'Senior Web Developer',
        company: {
            name: 'HalloWelt! GmbH',
            link: 'https://en.hallowelt.com/'
        },
        start: '07/2013',
        end: '09/2015',
        description: `The team developed a framework tailored to the needs of business customers based on the famous
        MediaWiki software. One part of the job was working closely with the customers to define and then implement
        their special needs for the software. The other part was the development of the core framework always looking
        out for stability and good usability. Planning and maintaining the releases was also my responsibility.`,
        tags: ['wikipedia-w', 'php', 'js', 'git']
    }, {
        title: 'Apprenticeship',
        company: {
            name: 'HalloWelt! GmbH',
            link: 'https://en.hallowelt.com/'
        },
        start: '08/2010',
        end: '07/2013',
        description: `I've started to learn all about the handicraft of software development here. Having a good basis
        is always important, so I've learned the most important things for a good and long lasting project. Having all
        of the IT before me (from soft- to hardware to networking) I could get a nice overview of the world of IT,
        always finding new ways to learn and to build up the knowledge I now have.`,
        tags: ['wikipedia-w', 'php', 'js', 'git']
    }];
}
