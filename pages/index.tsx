import React, {useEffect, useState} from "react"
import {ApiLocations, fetchData} from "../components/functions/fetchData";
import {IArticle, IUser} from "../components/types/generalTypes";
import Layout from "../components/Layout";
import {Article} from "../components/Article";

export default function Home() {
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        console.log("load articles and users");
        setIsLoading(true);
        fetchData(ApiLocations.Posts)
            .then((data) => {
                setArticles(data as IArticle[]);
                setIsLoading(false);
            })
            .catch((e: Error) => {
                    setErrorMsg(e.message);
                    setIsLoading(false);
                }
            );
        fetchData(ApiLocations.Users)
            .then((data) => {
                setUsers(data as IUser[])
            })
            .catch((e: Error) => {
                    setErrorMsg(e.message);
                    setIsLoading(false);
                }
            );
    }, []);

    useEffect(() => {
        // wait until articles are loaded
        if (!isLoading && articles.length > 0) {

        }
    });

  return (
      <Layout>
          {articles.length !== 0 &&
          articles.map((article, i) =>
              <Article article={article} users={users} key={i}/>
          )}
      </Layout>
  )
}
