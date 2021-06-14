import styled from "@emotion/styled";

export enum Colors {
    Orange = "#FFAA00",
    Yellow = "#FFD300",
    LightBlue = "#1240AB",
    LighterBlue = "rgba(20,88,255,0.85)",
    Red = "rgba(170,6,0,0.56)",
}

export const AuthorNameTag = styled.div`
    position: absolute;
    background-color: ${Colors.LightBlue};
    color: white;
    padding: 1% 2%;
    right: 1%;
    bottom: 3%;
    border-radius: 20px;
    display: inline-block;
    text-align: center;
    transition: all 0.3s ease-in-out;
    &:hover {
        padding: 1.5% 3%;
        bottom: 1%;
        right: -0%;
        border-radius: 40px;
        background-color: ${Colors.LighterBlue} ;
        
    }
    @media (max-width: 400px) {
      font-size: 0.8rem;
    }
`;

export const LinkNoDecor = styled.div`
    color: white;
    text-decoration: none;
    cursor: pointer;
`;