import './App.css';
import { useState, useEffect } from 'react'
import AdviceBox from './components/AdviceBox'
import Dice from './components/Dice';

function App() {
  const [advice, setAdvice] = useState('')

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    return data
  }

  useEffect(() => {
    const getAdvice = async () => {
      const adviceFromServer = await fetchAdvice()
      setAdvice(adviceFromServer.slip)
    }
    getAdvice()
  }, [])

  return (
    <div className="App">
      <div className="container test">
        <AdviceBox advice={advice} />
        <Dice />
      </div>
    </div>
  );
}

export default App;
