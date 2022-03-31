import dice from "../images/icon-dice.svg";

function Dice({handleClick}) {
  return (
    <div className="dice" onClick={handleClick}>
      <img src={dice} alt="dice icon" width="30" />
    </div>
  )
}

export default Dice;
