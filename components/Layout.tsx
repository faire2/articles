import React, {ReactNode} from "react";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import styled from '@emotion/styled'
import {Colors} from "../common/styles/generalStyles"

export default function Layout({children}: { children: ReactNode }): ReactJSXElement {
    return (
        <Container>
            <Header>
                Articles Site
            </Header>
            <InnerContainer>
                {children}
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-family: Calibri, sans-serif;
  align-items: center;
`
;

const InnerContainer = styled.div`
  max-width: 1000px;
`;

const Header = styled.div`
  border-radius: 0 0 25px 25px;
  position: sticky;
  background-color: ${Colors.Yellow};
  padding: 2%;
  margin-top: -1.5%;
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px ${Colors.Yellow};
  top: 0;
  z-index: 1;
`;
