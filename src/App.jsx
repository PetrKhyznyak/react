import { useState } from 'react'
import './App.css'

function App() {
    const [numbers, setNumbers] = useState([1, 4, 5,]);
    const [random, setRandom] = useState(0);
    const [color, setColor] = useState('black');

    const getRandomNumber = (number) => {
        return Math.floor(Math.random() * number)
    }


  return (
    <>
      <button onClick={ () => {
          setNumbers([...numbers, getRandomNumber(1000)])
      }}>Випадкове число до массиву</button>
        <p>{numbers.join(', ')}</p>
        <button onClick={ () => {setRandom(getRandomNumber(100))}}>Випадкове число</button>
        <p>{random}</p>
        <button onClick={() => setColor(`${getRandomNumber(255)} ${getRandomNumber(255)} ${getRandomNumber(255)}`)}>Змінити колір тексту</button>
        <p
        style={{
            color: `rgb(${color})`
        }}>Текст</p>
    </>
  )
}

export default App
