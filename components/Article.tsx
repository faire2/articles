import * as React from "react";
import styled from "@emotion/styled";
import {IArticle, IUser} from "../common/types/generalTypes";
import {getNameById} from "../functions/getNameById";
import {AuthorNameTag, Colors} from "../common/styles/generalStyles";
import Link from "next/link";

interface IProps {
    article: IArticle;
    users: IUser[];
}

export const Article = ({article, users}: IProps) =>
    <Container>
        <Link
            href={{
                pathname: "/ArticleDetail",
                query: {articleId: article.id},
            }}
        >
            <div>
                <Headline>
                    {article.title}
                </Headline>
                <Line/>
                <Text>
                    {article.body}
                </Text>
            </div>
        </Link>
        <AuthorNameTag>
            <Link
                href={{
                    pathname: "/User",
                    query: {userId: article.userId},
                }}
            >
                <User>
                    {getNameById(article.userId, users)}
                </User>
            </Link>
        </AuthorNameTag>
    </Container>;

const Container = styled.div`
    margin: 2% 2%;
    padding-bottom: 3%;
    background-color: rgba(0,0,0,0.02);
    position: relative;  
    cursor: pointer;
`;

const Headline = styled.div`
    font-size: 1.3rem;
    color: ${Colors.Orange};
    padding: 2% 2% 0 1%;
    width: 100%;
`;

const Text = styled.p`
    padding: 0 2%;
    text-align: justify;
`;

const Line = styled.hr`
    margin: 1% 2%;
    color: rgba(255,255,89,0.21); 
`;

const User = styled.div`
    color: white;
    text-decoration: none;
    &:visited{
      color: white;
    }
`;