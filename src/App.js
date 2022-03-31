import './App.css';
import AdviceBox from './components/AdviceBox'
import Dice from './components/Dice';

function App() {
  return (
    <div className="App">
      <div className="container test">
        <AdviceBox />
        {/* <image
          className="dice"
          src="./images/icon-dice.svg"
          alt="dice-button"
          width="100" */}
        {/* /> */}

      <Dice />
      </div>
    </div>
  );
}

export default App;
