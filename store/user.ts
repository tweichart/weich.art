import { VuexModule, Module } from "vuex-module-decorators";

interface UserData {
    name: string
    jobTitle: string
}

@Module({
    name: "user",
    namespaced: true,
    stateFactory: true,
})
export default class User extends VuexModule {
    public info: UserData = {
        name: "Tobias Weichart",
        jobTitle: "Senior Software Engineer"
    }
};
