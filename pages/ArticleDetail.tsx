import * as React from "react";
import {useEffect, useState} from "react";
import {ApiLocations, fetchData} from "../components/functions/fetchData";
import {IArticle} from "../components/types/generalTypes";

export function ArticleDetail() {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>(""); // todo implement

    useEffect(() => {
        // normally we would only bring relevant comments
        fetchData(ApiLocations.Comments)
            .then((data) => {
                setArticles(data as IArticle[]);
                setIsLoading(false);
            })
            .catch((e: Error) => {
                    setErrorMsg(e.message);
                    setIsLoading(false);
                }
            );
    }, []);

    return (
        <div>
            Article
        </div>
    )
}
