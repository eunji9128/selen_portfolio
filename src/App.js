import React, { useEffect, useState } from "react";
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
  console.log(lastScrollTop)

  return (
    <div className="App">
      {/* {lastScrollTop < 350 ? <Faded><Main /></Faded> : <Faded opacity="0.3"><Main /></Faded>} */}
      <Faded opacity={1 - (lastScrollTop/550)}><Main /></Faded>
      <Faded opacity={lastScrollTop > 550 ? 1 - (lastScrollTop/1600) : 1}><About /></Faded>
      <Faded opacity={lastScrollTop > 1600 ? 1 - (lastScrollTop/2000) : 1}><Features /></Faded>
      {/* <Contact /> */}
    </div>
  );
}

const Faded = styled.div`
  width: 100%;
  opacity: ${props => props.opacity || 1};
  transition: width 0.5s;
`

export default App;
