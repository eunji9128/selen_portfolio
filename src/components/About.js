import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

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
                    <IconBox>
                        <FontAwesomeIcon icon={brands("square-js")} size="6x" style={{color: "#ffffff",}} />
                        <h4>JavaScript</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id? Quam recusandae</p>
                    </IconBox>
                    <IconBox>
                        <FontAwesomeIcon icon={brands("react")} size="6x" style={{color: "#ffffff",}} />
                        <h4>React</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id? Quam recusandae</p>
                    </IconBox>
                    <IconBox>
                        <FontAwesomeIcon icon={brands("html5")} size="6x" style={{color: "#ffffff",}} />
                        <h4>HTML</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id? Quam recusandae</p>
                    </IconBox>
                    <IconBox>
                        <FontAwesomeIcon icon={brands("css3-alt")} size="6x" style={{color: "#ffffff",}} />
                        <h4>CSS</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id? Quam recusandae</p>
                    </IconBox>
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
    justify-content: ${props => props.justifyContent || "center"};
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

const IconBox = styled.div`
    width: 15%;
    text-align: center;
    color: white;
    margin: 4% 3% 4% 3%;
`

export default About