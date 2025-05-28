import { useState, createElement, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    /*<>
        <h1>Header</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid asperiores consectetur, deserunt distinctio dolor, fugit id, magni necessitatibus neque officiis quos repellendus repudiandae sapiente ullam velit voluptate. Quisquam, voluptas.</p>
        <img src={reactLogo} alt="react logo"/>
    </>*/
      createElement(
          Fragment,
          null,
            createElement('h1', null, 'Header'),
            createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid asperiores consectetur, deserunt distinctio dolor, fugit id, magni necessitatibus neque officiis quos repellendus repudiandae sapiente ullam velit voluptate. Quisquam, voluptas.'),
            createElement('img', { src: reactLogo, alt: 'react logo' }),
      )
  )
}

export default App
