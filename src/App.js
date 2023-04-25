import React, { useEffect, useRef, useState } from "react";
import './App.css';
import Main from './components/Main';
import About from './components/About'
import Features from './components/Features';
import styled from 'styled-components';

function App() {
  let [lastScrollTop, setLastScrollTop] = useState(0);

  const listener = e => {
    setLastScrollTop(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener)
    };
  })
  console.log(lastScrollTop);
  console.log(window.innerWidth);

  return (
    <div className="App">
      {/* {lastScrollTop < 350 ? <Faded><Main /></Faded> : <Faded opacity="0.3"><Main /></Faded>} */}
      <Faded opacity={lastScrollTop > 300 ? 1 - (lastScrollTop/1000) : 1}><Main /></Faded>
      <Faded opacity={lastScrollTop > 1500 ? 1 - (lastScrollTop/1700) : 1}><About /></Faded>
      <Faded opacity={lastScrollTop > 3000 ? 1 - (lastScrollTop/(1500*3)) : 1}><Features /></Faded>
      {/* <Contact /> */}
    </div>
  );
}

const Faded = styled.div`
  width: 100%;
  opacity: ${props => props.opacity || 1};
  transition: opacity 0.3s;

  // @media screen and (max-width: 1000px) {
  //   opacity: ${props => props.opacity || 1};
  // }
`

export default App;
