import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Newsitem from './components/Newsitem';
import News from './components/News';
import Spinner from './components/Spinner';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
    <Routes>
   
    <Route exact strict path="/" element={<News key="general" category="general"/>}></Route>
    <Route exact strict path="/sports" element={<News key="sports" category="sports"/>}></Route>
    <Route exact path="/business" element={<News key="business" category="business"/>}></Route>
    <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment"/>}></Route>
    <Route exact path="/health" element={<News key="apikey" category="health"/>}></Route>
    <Route exact path="/science" element={<News key="science" category="science"/>}></Route>
    <Route exact path="/technology" element={<News key="technology" category="technology"/>}></Route>
     
     </Routes>
     </Router>
    </>
  );
}

export default App;
