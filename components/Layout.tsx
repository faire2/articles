import React, {ReactNode} from "react";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import styled from '@emotion/styled'
import {Colors, LinkNoDecor} from "../common/styles/generalStyles"
import Link from "next/link";

// drag would have to be implemented instead of hover for touch screens
export default function Layout({children}: { children: ReactNode }): ReactJSXElement {
    return (
        <Container>
            <Header>
            <Links>links - settings - logout</Links>
                <Link
                    href={{
                        pathname: "/",
                    }}
                >
                    <LinkNoDecor>Articles Site </LinkNoDecor>
                </Link>
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
  padding-top: 80px;
`
;

const InnerContainer = styled.div`
  max-width: 800px;
  @media (max-width: 400px) {
    max-width: 350px;
  }
`;

const Header = styled.div`
  border-radius: 0 0 25px 25px;
  position: absolute;
  top: 0;
  background-color: ${Colors.Yellow};
  padding: 10px;
  height: 80px;
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px ${Colors.Yellow};
  margin-top: -30px;
  z-index: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  transition: margin-top 0.3s ease-in-out;
  cursor: default;
  &:hover {
    margin-top: -10px;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
    height: 60px;
    margin-top: -5px;
  }
`;

const Links = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;
