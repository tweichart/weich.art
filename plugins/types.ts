export interface ICompany {
    name: string,
    link?: string
}

export interface IJob {
    title: string,
    company: ICompany,
    start: Date,
    end?: Date,
    description: string,
    tags: string[]
}

export interface IContact {
    icon: string,
    link: string
}

export interface IUserState {
    name: string
    shortname: string
    url: string
    repo: string,
    jobtitle: string,
    birthday: Date,
    location: string,
    description: string[],
    jobs: IJob[],
    contacts: IContact[]
}
