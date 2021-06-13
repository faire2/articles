export interface IArticle {
    id: number;
    body: string;
    title: string;
    userId: number
}

// only relevant properties
export interface IUser {
    id: number;
    name: string;
    username: string;
    website: string;
    email: string;
}

export interface IComment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}