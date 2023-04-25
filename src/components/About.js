import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import PicCarousel from "./PicCarousel";

const About = () => {
    return (
        <Background>
            <ShadowBox>
                <Container>
                    <Content>
                        <Vr>
                            <h1>About me</h1>
                        </Vr>
                        <br></br>
                        <p>I am a junior frontend developer who transitioned from a career in product management.</p>
                        <hr></hr>
                        <p>
                            반도체, 자율 주행 로봇 배달앱 분야에서 PM 업무를 하다, 현재는 주니어 프론트엔드 개발자로 전향한 양은지입니다. <br />
                            HTML/CSS, JS 외에 React Framework를 이용해 반응형 페이지, 쇼핑몰, SNS page 데모 등을 개발하고 있습니다.
                        </p>
                        <a href="https://drive.google.com/file/d/1fclqLoSyBn4GXptnGpsZMCXCUTE2FmfZ/view?usp=share_link">
                            <Button>
                                <FontAwesomeIcon icon={solid("download")} style={{color: "#ffffff",}} />
                                <p>Download CV</p>
                            </Button>
                        </a>
                    </Content>
                    <CarouselBox>
                        <PicCarousel />
                    </CarouselBox>
                    {/* <ProfileImg src="/profile-image.jpg"></ProfileImg> */}
                </Container>
                <Container bgColor="linear-gradient(#d7bbe8, #d295ed)">
                    <IconBox>
                        <FontAwesomeIcon icon={brands("square-js")} size="6x" style={{color: "#ffffff",}} />
                        <h4>JavaScript</h4>
                    </IconBox>
                    <IconBox>
                        <FontAwesomeIcon icon={brands("react")} size="6x" style={{color: "#ffffff",}} />
                        <h4>React</h4>
                    </IconBox>
                    <IconBox>
                        <FontAwesomeIcon icon={brands("html5")} size="6x" style={{color: "#ffffff",}} />
                        <h4>HTML</h4>
                    </IconBox>
                    <IconBox>
                        <FontAwesomeIcon icon={brands("css3-alt")} size="6x" style={{color: "#ffffff",}} />
                        <h4>CSS</h4>
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
    background: ${props => props.bgColor || "white"};
    flex-wrap: wrap;
`

const Content = styled.div`
    width: 40%;
    text-align: start;
    margin: 8%;

    hr {
        margin-top: 32px;
        margin-bottom: 32px;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        
        a {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
`

const Vr = styled.div`
    border: 4px solid #d295ed;
    border-width: 0 0 0 4px;
    padding-left: 16px;

    @media screen and (max-width: 1000px) {
        h1 {
            font-size: 1.5em;
        }
    }
`

const IconBox = styled.div`
    width: 15%;
    text-align: center;
    color: white;
    margin: 2% 3% 2% 3%;

    @media screen and (max-width: 1000px) {
        width: 30%;
    }
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    color: white;
    background-color: #d295ed;
    border: none;
    margin-top: 4%;
    cursor: pointer;

    &:hover {
        background-color: #e8bedc;
    }
`

const CarouselBox = styled.div`
    width: 35%;

    @media screen and (max-width: 1000px) {
        width: 80%;
    }
`

export default About