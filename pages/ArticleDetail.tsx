import React, {useEffect, useState} from "react";
import {ApiLocations, fetchData} from "../functions/fetchData";
import {useRouter} from "next/router";
import {IArticle, IComment, IUser} from "../common/types/generalTypes";
import {Article} from "../components/Article";
import {loadData} from "../functions/sessionStorageFunctions";
import {StorageLocations} from "../common/storageLocations";
import {ErrorMsgBox} from "../components/ErrorMsgBox";
import Layout from "../components/Layout";
import {getArticleById} from "../functions/getArticleById";

export default function ArticleDetail() {
    const [article, setArticle] = useState<IArticle | null>(null);
    const [comments, setComments] = useState<IComment[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const router = useRouter();
    const articleId = parseInt(router.query.articleId as string);

    // load previously saved article to shorten the time for loading
    useEffect(() => {
        if (router.query) {
            console.log("Detail for article id: " + articleId);
            loadData(StorageLocations.Articles, true)
                .then((articles: IArticle[]) => {
                    const tArticle = getArticleById(articleId, articles);
                    tArticle && !article && setArticle(tArticle);
                    console.log("Article loaded from session storage");
                })
                .catch((e: Error) => {
                    setErrorMsg(e.message);
                    console.error(e);
                });

            loadData(StorageLocations.Users, true)
                .then((data: IUser[]) => {
                    setUsers(data);
                    console.log("Users loaded from sesison storage");
                })
        }
    }, [router]);

// load articles from API to check for a possible recent change
// normally we would only bring relevant article, but we have no API to fetch comments by id
    useEffect(() => {
        if (router.query) {
            fetchData(ApiLocations.Articles)
                .then((data) => {
                    console.log(data);
                    const tArticle = getArticleById(articleId, data as IArticle[]);
                    if (tArticle) {
                        setArticle(tArticle);
                        console.log("Article loaded from API")
                    }
                })
                .catch((e: Error) => {
                        setErrorMsg(e.message);
                    }
                );
        }
    }, [router]);

// load users from API
    useEffect(() => {
        fetchData(ApiLocations.Users)
            .then((data) => {
                setUsers(data as IUser[]);
                console.log("Users loaded from API");
            })
            .catch((e: Error) => {
                    setErrorMsg(e.message);
                }
            );
    }, []);

// load comments
    useEffect(() => {
        fetchData(ApiLocations.Comments)
            .then((data) => {
                setComments((data as IComment[]));
                setIsLoading(false);
                console.log("Comments loaded from API.");
            })
            .catch((e: Error) => {
                    setErrorMsg(e.message);
                    setIsLoading(false);
                }
            );
    }, []);


    return (
        <Layout>
            {article && users.length > 0 && <Article article={article} users={users}/>}
            {errorMsg.length > 0 && <ErrorMsgBox message={"Unable to load resources: " + errorMsg}/>}
        </Layout>
    )
};