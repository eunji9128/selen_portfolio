import React from "react";
import styled from "styled-components";
import Contact from "./Contact";

const Features = () => {
    return (
        <Background>
            <ShadowBox>
                <Container alignItems="start" margin="4% 10% 4% 10%" direction="column">
                    <Vr>
                        <h1>Featured Works</h1>
                    </Vr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id? Quam recusandae odit fuga ratione corrupti veniam unde laborum dolore, maxime dicta, nemo, eligendi quasi ipsam odio repudiandae iure suscipit?</p>
                </Container>
                <Container margin="0 0 4% 0" style={{flexWrap: "wrap"}}>
                    <img src="/main-background.jpg" width="25%"/>
                    <img src="/main-background.jpg" width="25%"/>
                    <img src="/main-background.jpg" width="25%"/>
                    <img src="/main-background.jpg" width="25%"/>
                    <img src="/main-background.jpg" width="25%"/>
                    <img src="/main-background.jpg" width="25%"/>
                    <img src="/main-background.jpg" width="25%"/>
                    <img src="/main-background.jpg" width="25%"/>
                </Container>
                <Contact />
            </ShadowBox>
        </Background>
    )
}

const Background = styled.div`
    width: 100vw;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ShadowBox = styled.div`
    width: 90vw;
    height: 100%;
    box-shadow: 0px 0px 30px grey;
    margin: 0;
`

const Container = styled.div`
    display: flex;
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justifyContent || "center"};
    background-color: ${props => props.bgColor || "white"};
    margin: ${props => props.margin || "0"};
    flex-direction: ${props => props.direction || "row"};

    p {
        text-align: start;
    }
`

const Vr = styled.div`
    border: 4px solid #78BB75;
    border-width: 0 0 0 4px;
    padding-left: 16px;
`

export default Features