import React from 'react'
import './rules.css'

function Rules() {
  return (
    <div className="cont">
    <div className='map-image'>
    <span className='rule-heading'>RULES</span>
      <div className='cover-text'>
        <span className='rule-font'>1. It will be a 15 points games.</span>
        <span className='rule-font'>2. Snake is defeated by Gun.</span>
        <span className='rule-font'>3.Gun is defeated by water.</span>
        <span className='rule-font'>4.Water is defeated by snake.</span>
        </div>
    </div>
    </div>
  )
}

export default Rules;