import Button from "./Button"


function PortfolioURL({portfolioURL, setPortfolioURL, nextStop}){
    const handleChange = (event) => {
        setPortfolioURL(event.target.value);    
    }

    return(
        <div className="enter-form">
         <p className="questionText">Paste a link to your Portfolio website</p>
         <input value={portfolioURL} onChange={handleChange} placeholder="www.your-portfolio.com" className="questionInput" type="link" />
          <div>
          <Button onClick={nextStop} text="Continue" />
          </div>
        </div>
    )
}

export default PortfolioURL