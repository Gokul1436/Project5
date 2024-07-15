import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Topselling from './Compounts/Topselling.jsx'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Mens from './Compounts/Mens.jsx'
import Womens from './Compounts/Womens.jsx'
import Kids from './Compounts/Kids.jsx'
import NoMatch from './Compounts/NoMatch.jsx';
import About from './Compounts/About.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/App.jsx" element={<App/>}/>
    <Route path="/Topselling.jsx" element={<Topselling/>}/>
    <Route path="/Mens.jsx" element={<Mens/>}/>
    <Route path="/Womens.jsx" element={<Womens/>} />
    <Route path="/About.jsx" element={<About/>} />
   
    {/* <Route path="*" elements={<NoMatch/>}/> */}
 
  </Routes>
  </BrowserRouter>
 
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
