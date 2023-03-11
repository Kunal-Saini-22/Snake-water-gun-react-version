import React from 'react'
import './scoreboard.css'

function Scoreboard() {
  return (
    <div className="outer-box">
    <div className='score-section'>
    <div  className='score-board'>

        <div className="box-table">
        <div className = "table">
        <div><span>You</span></div>
        <div className='score-card your-score'>0</div>
        </div>
        
        <div className = "table">
        <div><span>Computer</span></div>
        <div className='score-card computer-score'>1</div>
        </div>
     </div>
     <div className="make-me-center">
     <div className='result-display'></div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Scoreboard;