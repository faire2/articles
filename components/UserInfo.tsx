import styled from "@emotion/styled";
import React from "react";
import {Colors} from "../common/styles/generalStyles";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

interface IProps {
    valueKey: string;
    value: string
}

export const UserInfoPair = ({valueKey, value}: IProps): ReactJSXElement =>
    <Container>
        <Inner>
            <Key>{valueKey}:</Key> {value}
        </Inner>
    </Container>;

const Container = styled.div`
    flex-flow: row;  
    padding-top: 2%;
`;

const Inner = styled.div`
    display: flex;
    flex-flow: row;  
`;

const Key = styled.span`
    color: ${Colors.Orange};
    font-weight: bold;
    width: 80px;
    text-align: right;
    padding-right: 3%;
`;
