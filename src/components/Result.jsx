import React from 'react'
import './result.css'

function Result({userScore , computerScore , displayText}) {

  return (
    <div className="result" id="result">

      <div className="box-table">
        <div className = "table">
        <div><span className='score-title'>You</span></div>
        <div className='score-card your-score'><span className='score-title'>{userScore}</span></div>
        </div>
        
        <div className='result-display'><span className='score-title-small'>{displayText}</span></div>

        <div className = "table">
        <div><span className='score-title'>Computer</span></div>
        <div className='score-card computer-score'><span className='score-title'>{computerScore}</span></div>
        </div>
     </div>
    </div>
  )
}

export default Result