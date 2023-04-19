import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Contact = () => {
    return (
        <Container justifyContent="start" margin="4% 10% 4% 10%">
            <Vr>
                <Container justifyContent="space-evenly" width="70vw">
                    <h1>Contact</h1>
                    <p>+82-10-6212-8912</p>
                    <p>eunji9128@gmail.com</p>
                    <a href="https://github.com/eunji9128">
                        <FontAwesomeIcon icon={brands("square-github")} size="3x" style={{color: "#000000",}} />
                    </a>
                    <FontAwesomeIcon icon={solid("envelope")} size="3x" style={{color: "#000000",}} />
                    {/* 클릭 시 이메일 전송 기능 구현 예정 */}
                </Container>
            </Vr>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justifyContent || "center"};
    background-color: ${props => props.bgColor || "white"};
    margin: ${props => props.margin || "0"};
    flex-direction: ${props => props.direction || "row"};
    text-align: start;
`

const Vr = styled.div`
    width: 90vw;
    border: 4px solid #d295ed;
    border-width: 0 0 0 4px;
    padding-left: 16px;

    @media screen and (max-width: 1000px) {
        
        h1 {
            font-size: 1.5em;
        }
    }
`

export default Contact