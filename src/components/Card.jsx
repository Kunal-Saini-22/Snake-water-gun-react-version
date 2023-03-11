import React from 'react'
import './card.css';

function Card({photo , name , myChoice}) {

  const UserChoice = ()=>{
    myChoice(name);
  }

  return (
        <div className="box">
                <div className="card">
                    <img src={photo} alt="snake image"/>
                </div>
                <div className="img-button" id="snake">
                  <button type="button" onClick={UserChoice} className="img-button"><span>{name}</span></button>
                </div>
        </div>
  )
}

export default Card;