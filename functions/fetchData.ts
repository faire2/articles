import axios from "axios";
import {IArticle, IComment, IUser} from "../common/types/generalTypes";

export enum ApiLocations {
    Users = "https://jsonplaceholder.typicode.com/users",
    Articles = "https://jsonplaceholder.typicode.com/posts",
    Comments = "https://jsonplaceholder.typicode.com/comments"
}

export async function fetchData(url: string): Promise<IArticle[] | IUser[] | IComment[]> {
    try {
        const {data} = await axios.get<IArticle[]>(url);
        console.log("data loaded:");
        console.log(data);
        return data
    } catch (e) {
        console.error("Unable to fetch data from url: " + url);
        console.error(e);
        return e
    }
}