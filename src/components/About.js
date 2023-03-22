import React from "react";
import styled from "styled-components";

const About = () => {
    return (
        <Background>
            <ShadowBox>
                <Container>
                    <Content>
                        <h1>About me</h1>
                        <p>I am a junior frontend developer who transitioned from a career in product management.</p>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id? Quam recusandae odit fuga ratione corrupti veniam unde laborum dolore, maxime dicta, nemo, eligendi quasi ipsam odio repudiandae iure suscipit?</p>
                    </Content>
                    <ProfileImg src="/profile-image.jpg"></ProfileImg>
                </Container>
                <Container bgColor="#323232">
                    <h1>container</h1>
                    <Icons></Icons>
                </Container>
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
`

const Container = styled.div`
    width: 90vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.bgColor || "white"};
`

const Content = styled.div`
    width: 40%;
    text-align: start;
    margin: 8%;

    hr {
        margin-top: 32px;
        margin-bottom: 32px;
    }
`

const ProfileImg = styled.img`
    // src: "/profile-image.jpg";
    width: 20%;
    margin: 8%;
`

const Icons = styled.div`

`

export default About