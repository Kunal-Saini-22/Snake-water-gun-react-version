import React from 'react'
import './rules.css'

function Rules() {
  return (
    <div className="cont">
    <div className='map-image'>
        <span className='rule-heading'>RULES</span>
        <span className='rule-font'>1. Snake is defeated by Gun.</span>
        <span className='rule-font'>2.Gun is defeated by water.</span>
        <span className='rule-font'>3.Water is defeated by snake.</span>
    </div>
    </div>
  )
}

export default Rules;