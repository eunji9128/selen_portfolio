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
                    <ImgLink href="https://drive.google.com/file/d/1zXo_9ZDs7ciUUylfmFpamN2zorCkqcQK/view?usp=share_link">
                        <img src="/feature1.png" alt="PM portfolio"/>
                    </ImgLink>
                    <ImgLink href="https://eunji9128.github.io/">
                        <img src="/feature2.png" alt="React shopping-mall demo"/>
                    </ImgLink>
                    <ImgLink href="https://eunji9128.github.io/dm_w_LandingPage/">
                        <img src="/feature3.png" alt="Landing page demo"/>
                    </ImgLink>
                    <ImgLink href="https://eunji9128.github.io/dm_w_SNSprofile/">
                        <img src="/feature4.png" alt="SNS profile page demo"/>
                    </ImgLink>
                    <ImgLink href="#">
                        <Dummy>To be updated</Dummy>
                    </ImgLink>
                    <ImgLink href="#">
                        <Dummy>To be updated</Dummy>
                    </ImgLink>
                    <ImgLink href="#">
                        <Dummy>To be updated</Dummy>
                    </ImgLink>
                    <ImgLink href="#">
                        <Dummy>To be updated</Dummy>
                    </ImgLink>
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

const ImgLink = styled.a`
    width: 25%;
    height: 15vw;
    object-fit: cover;
`

const Dummy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #323232;
    box-shadow: inset 0px 0px 3px rgba(200, 200, 200, 0.3);
    color: #AAAAAA;
`

export default Features