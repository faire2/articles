export interface IArticle {
    id: number;
    body: string;
    title: string;
    userId: number
}

// only type relevant properties
export interface IUser {
    id: number;
    name: string;
    username: string;
    website: string;
    email: string;
}