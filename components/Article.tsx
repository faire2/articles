import * as React from "react";
import styled from "@emotion/styled";
import {IArticle, IUser} from "./types/generalTypes";
import {getUsernameById} from "./functions/getUserNameById";
import {Colors} from "./styles/generalStyles";

interface IProps {
    article: IArticle;
    users: IUser[];
}

export const Article = ({article, users}: IProps) =>
    <Container>
        <Headline>
            {article.title}
        </Headline>
        <Line/>
        <Text>
            {article.body}
        </Text>
        <Author>
            {getUsernameById(article.userId, users)}
        </Author>
    </Container>

const Container = styled.div`
    margin: 2% 2%;
    padding-bottom: 3%;
    background-color: rgba(0,0,0,0.02);
    cursor: default;
    position: relative;  
`

const Headline = styled.div`
    font-size: 1.7rem;
    color: ${Colors.Orange};
    padding: 2% 2% 0 2%;
    width: 100%;
`

const Text = styled.p`
    padding: 0 1.5%;
    text-align: justify;
`

const Author = styled.div`
    position: absolute;
    background-color: ${Colors.LightBlue};
    color: white;
    padding: 1% 2%;
    right: 1%;
    bottom: 5%;
    border-radius: 20px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        padding: 1.5% 3%;
        bottom: 2%;
        right: -0%;
        border-radius: 40px;
        background-color: ${Colors.LighterBlue} ;
  }
`

const Line = styled.hr`
    margin: 1% 2%;
    color: rgba(255,255,89,0.21); 
`