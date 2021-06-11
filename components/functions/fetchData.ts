import axios from "axios";
import {IArticle, IUser} from "../types/generalTypes";

export enum ApiLocations {
    Users = "https://jsonplaceholder.typicode.com/users",
    Posts = "https://jsonplaceholder.typicode.com/posts",
    Comments = "https://jsonplaceholder.typicode.com/comments"
}

export async function fetchData(url: string): Promise<IArticle[] | IUser[]> {
    try {
        const {data} = await axios.get<IArticle[]>(url);
        console.log("data loaded:");
        console.log(data);
        return data
    } catch (e) {
        console.info("Unable to fetch data from url: " + url);
        console.error(e);
        return e
    }
}