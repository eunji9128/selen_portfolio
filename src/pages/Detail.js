import React from "react";
import styled from "styled-components";
import projectData from "../data/projectData";
import { useParams } from "react-router";

const Detail = function () {
    let {id} = useParams();
    id = parseInt(id);
    return (
        <Background>
            <h1>{projectData[id].name}</h1>
            <Container>
                <TitleImg id={id}></TitleImg>
            </Container>
            <Container>
                <hr />
                <h3>About Project</h3>
                <p>{projectData[id].summary}</p>
            </Container>
            <Container>
                <hr />
                <h3>Technical Sheet</h3>
                <p>해당 프로젝트에서 사용한 언어, 프레임 워크 및 패키지</p>
                <ul>
                    {
                        projectData[id].tech.map((data, i) => {
                            return (
                                <li>{data}</li>
                            )
                        })
                    }
                </ul>
            </Container>
            <Container>
                <hr />
                <h3>Resources</h3>
                <p>The project is online at <a href={projectData[id].resource}>{projectData[id].resource}</a></p>
            </Container>
        </Background>
    )
};

const Background = styled.div`
    width: 100vw;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(#2e80e9, #776ce7, #2f80e9);
    color: #ffffff;

    h1 {
        font-size: 2.5em;
    }
`

const Container = styled.div`
    width: 60vw;
    height: 80%;
    // background-color: #ffffff;
    margin-top: 20px;
    padding: 20px;

    h3 {
        font-size: 1.5em;
        margin-bottom: 16px;
    }

    p, li, a {
        font-size: 1.2em;
        color: #c0d2f9;
    }
`

const TitleImg = styled.div`
    width: 100%;
    height: 60vh;
    background-image: url("${process.env.PUBLIC_URL}/feature${props => props.id}.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;

`

export default Detail