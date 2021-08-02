export interface Contact {
    name: string,
    company?: string,
    email: string,
    mobile?: string,
    message: string
}


export class Blog {
    name?: string;
    description?: string;
    thumbnail?: string;
    date?: Date;
    blogUrl?: string;
}


export class Work {
    name!: string;
    description!: string;
    projectUrl!: string;
}
