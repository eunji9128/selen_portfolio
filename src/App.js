import './App.css';
import Main from './components/Main';
import About from './components/About'
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Features />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
