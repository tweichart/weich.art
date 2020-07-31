import { VuexModule, Module } from 'vuex-module-decorators';

export interface IUserState {
    name: string
    jobtitle: string,
    description: string[]
}

@Module({
    name: 'user',
    namespaced: true,
    stateFactory: true,
})
export default class User extends VuexModule implements IUserState {
    public name = 'Tobias Weichart';
    public jobtitle = 'Senior Software Engineer';
    public description = [`Hey pals, my name is Tobias Weichart, or Toby for short and I'm a programming enthusiast
        always on the look out for cool technologies. Describing myself is somewhat a harder job than I thought,
        so maybe my wife should do it, as she's quite successful with advertising me when I'm around. Maybe it's
        the perspective... Well, let's try that...`,
    `Toby is working in IT for quite some time now (started in ~2010, professionally) though he's always been
        surrounded by IT stuff from his early childhood on. Being fascinated with the internals and the magic that
        made computers do what they do he's always tried to understand the principle behind the things, still leaving
        him most of the time clueless about why it's working the way it does. Enter the internetz. This funny invention
        gave his thirst for knowledge the much needed saturation, explaining most of the things tiny Toby never could've
         made sense of by himself!`,
    `Few years in the future, Toby is now a coding guy, loving to solve the mysteries of bits and bytes, always
        looking for new technologies or other neat things that he can dig into or read more about. Most of the time
        he's working with PHP, JavaScript and CSS these days and frameworks are a little hobby of his, although there's
        not always the need for them (quote: "Why isn't there an ES6 framework out now!?"). He's also very handsome and
        people tensely like to listen to his eloquent statements being fascinated about his intelligent yet humble
        personality with a hint of...`,
    `Ok, let's cut it here, wrong direction... Whoever feels the need to see what I am all about can contact me via one
        of the buttons below or just send me an e-mail at the bottom of the page. Looking forward to hear from you!`
    ];
}
