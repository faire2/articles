import React, {ReactNode} from "react";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import styled from '@emotion/styled'
import {Colors} from "./styles/generalStyles"

export default function Layout({children}: { children: ReactNode }): ReactJSXElement {
    return (
        <Container>
            <InnerContainer>
                <Header>
                    Articles Site
                </Header>
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
  position: sticky;
  background-color: ${Colors.Orange};
  padding: 2%;
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px ${Colors.Yellow};
  top: 0;
`;
