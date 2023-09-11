import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Errorpage from './Components/Errorpage';
// import Axioss from './Components/Axioss';
import Pincodes from './Components/Pincodes';
import Books from './Components/Books';
import Headder from './Components/Headder';
import { BrowserRouter } from 'react-router-dom';
import Layouts from './Components/Layouts';
import DivisionComponent from './Components/DivisionComponent';
import Timer from './Components/Timer';
import Footer from './Components/Footer';
import Pagination from './Components/Pagination';
import LoginPage from './Components/LoginPage';
import SiteHeadder from './Components/SiteHeadder';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <BrowserRouter> */}
  {/* <Books />
  <Usestt /> */}
  <BrowserRouter>
  <SiteHeadder />
  <Headder />
  <Pagination />
  {/* <DivisionComponent /> */}
   </BrowserRouter>
  {/* <Footer /> */}
  {/* <Pincodes /> */}
  {/* <Axioss /> */}
    {/* <App />
    <Errorpage />
    <Contact />
    <Navigation /> */}
    {/* <Examples /> */}

    {/* <Timer /> */}
    {/* </BrowserRouter> */}
    {/* <LoginPage /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
