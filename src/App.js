import './App.css';
import React from 'react'
import {Navbar , Footer , Mainbody , Result, Rules} from  '../src/components/index';
import { useState } from 'react';

function App() {
  const [click,setClick] = useState(false);

  const [userScore, setuserScore] = useState(0);
  const [computerScore, setcomputerScore] = useState(0);
  const [displayText , setdisplayText] = useState("Result");

  const switching = ()=>{
    setClick(!click);
  }

  return (
    <>
      <div className = "outerbox" >
        <div className = "innerbox">
          <Navbar/>
          <div>
          <button className='rules-button' onClick={switching}>
          <span className='button-text-display'> {click ? 'x' : 'Rules'}</span></button>
          </div>
          { click? <Rules/> : null}

          <Result userScore = {userScore} computerScore = {computerScore} displayText = {displayText}/>

          <Mainbody setuserScore = {setuserScore}  setcomputerScore = {setcomputerScore} userScore = {userScore} computerScore = {computerScore} setdisplayText = {setdisplayText}/>

          <Footer/>
        </div>
      </div>
    </>
    );
}

export default App;
