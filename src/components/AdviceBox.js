import patternBorder from '../images/pattern-divider-desktop.svg'

const AdviceBox = () => {
  return(
    <div className="advice-giver__advice-box test">
      <p className="test">Advice #117</p>
      <h3 className="test">"It is easy to sit up and take notice, what's difficult is getting up and taking action"</h3>
      <div className="advice-giver__advice-box__border-row test">
        <span className="test"></span>
        <img src={patternBorder} className="pattern-border" />
        <span className="test"></span>
      </div>
    </div>
  )
}

export default AdviceBox