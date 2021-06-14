import styled from "@emotion/styled";
import React from "react";
import {Colors} from "../common/styles/generalStyles";

interface IProps {
    valueKey: string;
    value: string
}

export const UserInfoPair = ({valueKey, value}: IProps) =>
    <Container>
        <Key>{valueKey}:</Key> {value}
    </Container>;

const Container = styled.div`
    display: flex;
    flex-flow: row;  
    width: 400px;
    padding-top: 2%;
`;

const Key = styled.span`
    color: ${Colors.Orange};
    font-weight: bold;
    width: 80px;
    text-align: right;
    padding-right: 3%;
`;
