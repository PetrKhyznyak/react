import {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
      <>
        <Header header={"React documentation page"} text={"Learn react"}/>
        <Main/>
        <Sidebar/>
        <Footer/>
      </>
  )
}

export default App
