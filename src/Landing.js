import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MoonAnime from "./components/MoonAnime";

const Landing = function () {
    return (
        <Background>
            <Container>
                <h1>WELCOME</h1>
                <Start>
                    <MoonAnime />
                    <StyledLink to="/home"><p>click me!</p></StyledLink>
                </Start>
            </Container>
        </Background>
    )
};

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#8ff5fe, #dcb8f6, #0c5ee3);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 100%;
    color: #dcb8f6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: 5em;
    text-shadow: 1px 5px 20px #d295ed;
`

const Start = styled.span`
    text-align: right;
    margin: 0;

    p {
        color: #ffffff;
        font-size: 0.3em;
        margin: 0;
        text-decoration: #dcb8f6 wavy underline 4px;
    }
`

const StyledLink = styled(Link)`
    &:any-link {
        text-decoration: none;
    }
`





export default Landing