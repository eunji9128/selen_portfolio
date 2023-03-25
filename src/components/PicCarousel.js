import React from "react";
import Carousel from 'react-material-ui-carousel'
import styled from "styled-components"

const PicCarousel = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel autoPlay={false} animation="slide">
            <Post Src="/carousel-img1.jpg"></Post>
            <Post Src="/carousel-img2.png"></Post>
            <Post Src="/carousel-img3.jpg"></Post>
            <Post Src="/carousel-img4.jpg"></Post>
            <Post Src="/carousel-img5.jpg"></Post>
            <Post Src="/carousel-img6.jpg"></Post>
            {/* <img src="/carousel-img1.jpg" width="100%" />
            <img src="/carousel-img2.png" width="100%" />
            <img src="/carousel-img3.jpg" width="100%" /> */}
        </Carousel>
    )
}

const Post = styled.div`
    background-image: url(${props => props.Src || ""});
    width: 100%;
    height: 35vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (max-width: 1000px) {
        height: 70vw;
    }
`

export default PicCarousel