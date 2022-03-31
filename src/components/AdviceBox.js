import patternBorder from '../images/pattern-divider-desktop.svg'

const AdviceBox = ({advice}) => {
  return(
    <div className="advice-giver__advice-box test">
      <p className="test">{`ADVICE #${advice.id}`}</p>
      <h3 className="test">{advice.advice}</h3>
      <div className="advice-giver__advice-box__border-row test">
        <span className="test"></span>
        <img src={patternBorder} className="pattern-border" />
        <span className="test"></span>
      </div>
    </div>
  )
}

export default AdviceBox