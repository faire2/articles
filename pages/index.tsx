import React, {useEffect, useState} from "react"
import {ApiLocations, fetchData} from "../functions/fetchData";
import {IArticle, IUser} from "../common/types/generalTypes";
import Layout from "../components/Layout";
import {Article} from "../components/Article";
import {PropagateLoader} from "react-spinners";
import {Colors} from "../common/styles/generalStyles";
import styled from "@emotion/styled";
import {ErrorMsgBox} from "../components/ErrorMsgBox";
import {saveData} from "../functions/sessionStorageFunctions";
import {StorageLocations} from "../common/storageLocations";

export default function Home() {
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        console.log("load articles and users");
        setIsLoading(true);
        fetchData(ApiLocations.Articles)
            .then((data) => {
                setArticles(data as IArticle[]);
                saveData(StorageLocations.Articles, data)
                    .catch((e: Error) => {
                        console.error("Unable to save articles to session storage");
                        console.error(e);
                    });
            })
            .catch((e: Error) => {
                    setErrorMsg(e.message);
                }
            );
        fetchData(ApiLocations.Users)
            .then((data) => {
                setUsers(data as IUser[]);
                saveData(StorageLocations.Users, data)
                    .catch((e: Error) => {
                        console.error("Unable to save articles to session storage");
                        console.error(e)
                    });
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
          {errorMsg.length > 0 && <ErrorMsgBox  message={"Unable to load resources: " + errorMsg } />}
      </Layout>
  )
}

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;