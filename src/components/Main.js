import React from "react";
import styled from "styled-components";

const Main = () => {
    return (
        <Background>
            <MainLayout>
                <Title>
                    <h1>Hello! I'm Selen</h1>
                </Title>
                <p>Welcome to my website!</p>
                <p>Former product manager, NOW junior frontend developer</p>
            </MainLayout>
        </Background>
    )
}

const Background = styled.div`
    position: relative;
    display: flex;
    width: 100vw;
    height: 45vw;
    align-items: end;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 45vw;
        overflow: hidden;
        background-image: url("/main-background3.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        filter: drop-shadow(0px 0px 1px black) blur(2px);
    }
`

const MainLayout = styled.div`
    display: flex;
    width: 90vw;
    height: 40vw;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/main-background3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    // opacity: 1.5;
`

const Title = styled.div`
    display: flex;
    width: 50%;
    height: 20%;
    border: 2px solid #78BB75;
    font-size: 2vw;
    margin-bottom: 4%;
    align-items: center;
    justify-content: center;
`

export default Main