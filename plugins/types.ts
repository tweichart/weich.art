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

export interface IUserState {
    name: string
    jobtitle: string,
    birthday: Date,
    location: string,
    description: string[],
    jobs: IJob[],
    contacts: IContact[]
}

export interface IContact {
    icon: string,
    link: string
}
