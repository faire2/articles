import React from "react";
import {IComment} from "../common/types/generalTypes";
import {Colors} from "../common/styles/generalStyles";
import styled from "@emotion/styled";

interface IProps {
    comment: IComment;
}

export const Comment = ({comment}: IProps) =>
    <Container>
        {comment.name} (<Email>{comment.email}</Email>)
        <br/>
        <CommentBody>
            {comment.body}
        </CommentBody>
    </Container>;

const Container = styled.div`
    margin-left: 5%;
    margin-top: 2%;
    background-color: white;
    position: relative;  
    cursor: default;
`;

const Email = styled.span`
    color: ${Colors.Orange};
`;

const CommentBody = styled.div`
    margin-left: 2%;
`;
