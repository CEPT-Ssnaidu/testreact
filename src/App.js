// import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
// import Contact from './Components/Contact';
import Errorpage from './Components/Errorpage';

import './App.css';

function App() {
  return (
    <>
    <div>
      <Routes>

        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        {/* <Route path="/contact" element = {<Contact/>} /> */}
        <Route path="*" element = {<Errorpage/>} />

      </Routes>
    </div>


    </>
   
  )
}

export default App;
