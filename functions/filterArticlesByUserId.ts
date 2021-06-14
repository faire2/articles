import {IArticle} from "../common/types/generalTypes";

export function getArticlesById(userId: number, articlesArr: IArticle[]) {
    return articlesArr.filter((article: IArticle) => article.userId === userId);
}