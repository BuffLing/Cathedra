import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header'
import { BrowserRouter, NavLink, Routes, Route, Outlet } from "react-router-dom";
import Infa from './pages/infa-o-kafedre';
import Infa2 from './pages/infa-o-kafedre-2';
import Dostizheniya from './pages/Dostizheniya';
import Napravleniya from './pages/Napravleniya';
import Programma from './pages/ObrazovProgramma';
import Footer from './components/Footer';
import Sotrudniki from './pages/Sotrudniki';
import Raspisaniye from './pages/Raspisaniye';
import './Play/Play-Regular.ttf'


function App() {
  document.body.style = 'background: black;';
  const [knop,setKnop] = React.useState(0);
  return (<>
    <Header></Header>
    <Infa knop={knop} setKnop={setKnop}></Infa>
    <Infa2></Infa2>
    <Sotrudniki></Sotrudniki>
    <Napravleniya knop={knop} setKnop={setKnop}></Napravleniya>
    <Dostizheniya></Dostizheniya>
    <Programma></Programma>
    <Raspisaniye></Raspisaniye>
    <Footer></Footer>
  </>
  );
}

export default App;
