import {IArticle} from "../common/types/generalTypes";

export function getArticleById(id: number, articlesArr: IArticle[]): IArticle | undefined {
    for (const article of articlesArr) {
        if (article.id === id) {
            return article;
        }
    }
}