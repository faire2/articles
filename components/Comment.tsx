import React from "react";
import styled from "@emotion/styled"
import {IComment} from "../common/types/generalTypes";
import {AuthorNameTag} from "../common/styles/generalStyles";

interface IProps {
    comment: IComment
}

export const comment = ({ comment }: IProps) =>
    <Container>
        {comment.body}
        <AuthorNameTag>
            {comment.name}
        </AuthorNameTag>
    </Container>;

const Container = styled.div`
    display: flex;
    flex-flow: column;
`;
