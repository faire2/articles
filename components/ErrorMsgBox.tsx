import styled from "@emotion/styled";
import * as React from "react";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import {Colors} from "../common/styles/generalStyles";

interface IProps {
    message: string
}

export const ErrorMsgBox = ({message}: IProps): ReactJSXElement =>
    <Container>
        {message}
    </Container>;

const Container = styled.div`
  padding: 2%;
  margin: 0 6%;
  background-color: ${Colors.Red};
  text-align: center;
  color: white;
  border-radius: 10px;
  cursor: default;
`;
