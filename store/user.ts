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
    public description = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nisi, semper lobortis
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
}
