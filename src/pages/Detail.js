import React from "react";
import styled from "styled-components";

const Detail = function () {
    return (
        <Background>
            <h1>Project Title</h1>
            <p>project summary blah</p>
            <Container>
                <TitleImg></TitleImg>
            </Container>
            <Container>
                <h3>About Project</h3>
                <p>project details blah blah</p>
            </Container>
            <Container>
                <h3>Technical Sheet</h3>
                <p>technical sheet blah blah</p>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>
            </Container>
            <Container>
                <h3>Resources</h3>
                <p>The project is online at ~~~</p>
            </Container>
        </Background>
    )
};

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dcb8f6;
`

const Container = styled.div`
    width: 60vw;
    height: 80vh;
    background-color: #ffffff;
    margin-top: 20px;
    padding: 10px;
`

const TitleImg = styled.div`
    width: 100%;
    height: 60vh;
    background-image: url("${process.env.PUBLIC_URL}/feature1.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

`

export default Detail