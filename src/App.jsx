import {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ArticlesProvider from "./Context/AriclesContext.jsx";

function App() {

  return (
      <ArticlesProvider>
          <div className="container">
              <Header header={"React documentation page"} text={"Learn react"}/>
              <Main/>
              <Sidebar/>
              <Footer/>
          </div>
      </ArticlesProvider>
  )
}

export default App
