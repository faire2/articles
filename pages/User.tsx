import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {useRouter} from "next/router";
import {loadData} from "../functions/sessionStorageFunctions";
import {StorageLocations} from "../common/storageLocations";
import {IArticle, IUser} from "../common/types/generalTypes";
import {getUserById} from "../functions/getUserById";
import {ApiLocations, fetchData} from "../functions/fetchData";
import {ErrorMsgBox} from "../components/ErrorMsgBox";
import Layout from "../components/Layout";
import {UserInfoPair} from "../components/UserInfo";
import {Article} from "../components/Article";
import {getArticlesById} from "../functions/filterArticlesByUserId";
import {Colors} from "../common/styles/generalStyles";

export default function User() {
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [user, setUser] = useState<IUser | null>(null);
    const [articles, setArticles] = useState<IArticle[]>([]);

    const router = useRouter();
    const userId = parseInt(router.query.userId as string);
    console.log("UserId: " + userId);

    useEffect(() => {
        if (router.query.userId) {
            loadData(StorageLocations.Users, true)
                .then((users: IUser[]) => {
                    const user = getUserById(userId!, users);
                    if (user) {
                        setUser(user);
                        setErrorMsg("");
                        console.log("User loaded from session storage");
                    } else {
                        setErrorMsg("Unable to load user data")
                    }
                })
                .catch((e: Error) => {
                    setErrorMsg(e.message);
                    console.error(e);
                });

            loadData(StorageLocations.Articles, true)
                .then((articles: IArticle[]) => {
                    if (articles) {
                        const tArticles = articles.filter((article: IArticle) =>
                            article.userId === userId);
                        setArticles(tArticles);
                        console.log("Articles loaded from session storage");
                    }
                })
                .catch((e: Error) => {
                    setErrorMsg(e.message);
                    console.error(e);
                });
        }
    }, [router]);

    // load articles from API
    useEffect(() => {
        if (router.query.userId) {
            if (router.query) {
                fetchData(ApiLocations.Articles)
                    .then((articles) => {
                        const tArticles: IArticle[] = getArticlesById(userId, articles as IArticle[]);
                        setArticles(tArticles);
                        console.log("Article fetched from API");
                    })
                    .catch((e: Error) => {
                            setErrorMsg(e.message);
                        }
                    );
            }
        }
    }, [router]);

    return (
        <Layout>
            <Container>
                <Headline>User Information</Headline>
                {user &&
                <UserInformation>
                    <UserInfoPair valueKey={"Name"} value={user.name}/>
                    <UserInfoPair valueKey="Username" value={user.username}/>
                    <UserInfoPair valueKey="Email" value={user.email}/>
                    <UserInfoPair valueKey="Website" value={user.website}/>
                </UserInformation>}
                {user && articles.length > 0  && <Headline>Articles written by {user!.name}</Headline>}
            </Container>
            {articles.length > 0 && articles.map((article, i) =>
                <Article article={article} users={[user!]} key={i}/>)}
            {errorMsg.length > 0 && <ErrorMsgBox message={"Unable to load resources: " + errorMsg}/>}
        </Layout>
    )
};

const Container = styled.div`
    padding: 3%;
`;


const UserInformation = styled.div`
    display: flex;
    flex-flow: column;
`;

const Headline = styled.div`
    font-size: 1.5rem;
    color: ${Colors.Orange};
    margin-top: 3%;
    @media (max-width: 400px) {
      font-size: 1.3rem;
      margin-top: 5%;
    }
`;