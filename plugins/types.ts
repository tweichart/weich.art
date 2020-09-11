export interface IBreakpointSizes {
    xl?: number,
    lg?: number,
    md?: number,
    sm?: number,
    xs?: number,
    cols?: number
}

interface IIcon {
    icon: string,
    text: string
}

export interface IIconMap {
    [index: string]: IIcon | undefined,
}

interface Company {
    name: string,
    link?: string
}

export interface Job {
    title: string,
    company: Company,
    start: string,
    end?: string,
    description: string,
    tags: string[]
}

export interface IUserState {
    name: string
    jobtitle: string,
    birthday: Date,
    location: string,
    description: string,
    jobs: Job[]
}
