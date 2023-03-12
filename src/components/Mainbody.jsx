import React from 'react'
import './mainbody.css';

import {Card} from  '../components/index';
import {snake,water,gun} from '../images/index';

function Mainbody({ setuserScore , setcomputerScore , userScore , computerScore , setdisplayText}) {

  var increment = null;
  function myChoice(name){
  
    let choices = ["Snake" , "Water" , "Gun"];
    let index = Math.floor((Math.random()*3));
    
    let choice = choices[index];
    let val = name;
    
    if(choice === name)
    {
      // console.log("it's a draw , try one more time...");
      setdisplayText(()=>("It's a draw"))
      // r.innerText = "It's a draw , try one more time...";
    }
    // console.log("clicked "+ name + " " + choice + " " + val);
    
    switch(choice)
    {
      case "Snake" :    
    
      if(val === "Water"){
      // console.log("You Lost !!");
      setdisplayText(()=>("Lost against Snake!")); increment = "computerScore"}
      else if(val === "Gun"){
      setdisplayText(()=>("Won  against Snake!")); increment = "playerScore" } 
      break; 
    
      case "Water" :             
      
      if(val === "Snake"){
      setdisplayText(()=>("Won  against Water!")); increment = "playerScore" }
      else if(val === "Gun"){
      setdisplayText(()=>("Lost against Water!")); increment = "computerScore"}
      break;
      
      case "Gun":
    
      if(val === "Snake"){
      setdisplayText(()=>("Lost against Gun!"));  increment = "computerScore"}
      else if(val === "Water"){
      setdisplayText(()=>("Won against Gun!")); increment = "playerScore" }
      break;
    } 

    incrementPoints();
}

function incrementPoints()
{
  if(increment === "playerScore")
  {
    setuserScore(()=>userScore+1);
  }
  else if(increment === "computerScore"){
    setcomputerScore(()=>computerScore+1);
  }

  // deciding winner
  if(userScore === 14 && computerScore < 14)
  {
    setdisplayText(()=>("You Win !!"));
    alert("You Win !!");
    setuserScore(0);
    setcomputerScore(0);

  }
  else if(userScore < 14 && computerScore === 14)
  {
    setdisplayText(()=>("You Lost !!"));
    alert("You Lost !!");
    setuserScore(0);
    setcomputerScore(0);
  }
  else if(userScore === 14 && computerScore === 14){
    setdisplayText(()=>("Game Draw !!"));
    setuserScore(0);
    setcomputerScore(0);
  }
}

  return (
<>
<div className='main-body'>
  <div className="container">
    <div className="cards">
    <Card photo={snake} name = "Snake" myChoice = {myChoice}/>
    <Card photo={water} name = "Water" myChoice = {myChoice}/>
    <Card photo={gun} name = "Gun" myChoice = {myChoice}/>
    </div>
  </div>
</div>
</>

  )
}

export default Mainbody;