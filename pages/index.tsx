import React, {useEffect, useState} from "react"
import {ApiLocations, fetchData} from "../components/functions/fetchData";
import {IArticle, IUser} from "../components/types/generalTypes";
import Layout from "../components/Layout";
import {Article} from "../components/Article";
import {PropagateLoader} from "react-spinners";
import {Colors} from "../components/styles/generalStyles";
import styled from "@emotion/styled";

export default function Home() {
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>(""); // todo implement

    useEffect(() => {
        console.log("load articles and users");
        setIsLoading(true);
        fetchData(ApiLocations.Posts)
            .then((data) => {
                setArticles(data as IArticle[]);
                users.length > 0 && setIsLoading(false);
            })
            .catch((e: Error) => {
                    setErrorMsg(e.message);
                }
            );
        fetchData(ApiLocations.Users)
            .then((data) => {
                setUsers(data as IUser[]);
            })
            .catch((e: Error) => {
                    setErrorMsg(e.message);
                }
            );
    }, []);

    useEffect(() => {
        isLoading && users.length + articles.length > 0 && setIsLoading(false);
    }, [articles, users]);

  return (
      <Layout>
          {isLoading ?
              <SpinnerContainer>
                  <PropagateLoader color={Colors.Orange} size={30}/>
              </SpinnerContainer>
              :
              articles.length !== 0 && articles.map((article, i) =>
              <Article article={article} users={users} key={i}/>
          )}
      </Layout>
  )
}

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`