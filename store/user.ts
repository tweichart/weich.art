import { VuexModule, Module } from 'vuex-module-decorators';

export interface IUserState {
    name: string
    jobtitle: string
}

@Module({
    name: 'user',
    namespaced: true,
    stateFactory: true,
})
export default class User extends VuexModule implements IUserState {
    public name = 'Tobias Weichart';
    public jobtitle = 'Senior Software Engineer';
}
