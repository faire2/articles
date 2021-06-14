import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import {IArticle, IUser} from "../common/types/generalTypes";
import {getNameById} from "../functions/getNameById";
import {AuthorNameTag, Colors, LinkNoDecor} from "../common/styles/generalStyles";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

interface IProps {
    article: IArticle;
    users: IUser[];
}

export const Article = ({article, users}: IProps): ReactJSXElement =>
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
                <LinkNoDecor>
                    {getNameById(article.userId, users)}
                </LinkNoDecor>
            </Link>
        </AuthorNameTag>
    </Container>;

const Container = styled.div`
    margin: 2% 2%;
    padding-bottom: 3%;
    background-color: rgba(0,0,0,0.02);
    position: relative;  
    cursor: pointer;
    @media (max-width: 400px) {
      padding-bottom: 4%;
    }
`;

const Headline = styled.div`
    font-size: 1.3rem;
    color: ${Colors.Orange};
    padding: 2% 2% 0 1%;
    width: 100%;
    @media (max-width: 400px) {
      font-size: 1.1rem;
    }
`;

const Text = styled.p`
    padding: 0 2%;
    text-align: justify;
    font-size: 0.9rem;
`;

const Line = styled.hr`
    margin: 1% 2%;
    color: rgba(255,255,89,0.21); 
`;