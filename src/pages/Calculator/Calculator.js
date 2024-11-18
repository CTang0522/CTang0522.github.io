import './Calculator.css';
import particlesOptions from "../particles.json";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


import { useState, useEffect, useCallback } from 'react';


function Calculator() {
  const particlesInit = useCallback(main => {
    loadSlim(main);
  }, [])

  const [current,setCurrent] = useState("")

  function isNumber(str){
    return !isNaN(str)
  }

  function parseEquation(str){
    //replace ÷ with / for evaluation
    for(var i=0;i<str.length;i++){
      if(str.charAt(i) === "÷"){
        str = str.substring(0,i)+"/"+str.substring(i+1)
      }
    }
    return String(Function(`'use strict'; return(${str})`)())
  }

  function type(x) {
    if(isNumber(x) || x === "-" || x === "+"){
      setCurrent(current+x)
    } else if(x === "Clear"){
      setCurrent("")
    } else if(x === "+/-"){
      if(isNumber(current)){
        if(current.charAt(0) === '-'){
          setCurrent(current.slice(1,current.length))
        } else {
          setCurrent("-"+current);
        }
      }
    } else if(x === "%"){
      if(isNumber(current)){
        setCurrent(String(Number(current)/100))
      }
    } else if(x === "/"){
      setCurrent(current+"÷")
    } else if(x === "*"){
      setCurrent(current+"*")
    } else if(x === "."){
      setCurrent(current+".")
    } else if(x === "EQUALS"){
      try {
        setCurrent(parseEquation(current))
      } catch(err) {

      }
      
      //parseEquation(current)
    }
    

    
  }



  return (
    <div className="App">
      <Particles id='particles' options={particlesOptions} init={particlesInit} />

      <header className="App-header">
        <div className="frameBorder">
          <div className="display">
            <div className='displayInterior'>
            {current}
            </div>
          </div>
          <div className="row">
            <button className="button grayButton" type='button' onClick={() => {type("Clear")}}>
              C
            </button>
            <button className="button grayButton" type='button' onClick={() => {type("+/-")}}>
              +/-
            </button>
            <button className="button grayButton" type='button' onClick={() => {type("%")}}>
              %
            </button>
            <button className="button orangeButton" type='button' onClick={() => {type("/")}}>
              &#247;
            </button>
          </div>

          <div className="row">
            <button className="button" type='button' onClick={() => {type("7")}}>
              7
            </button>
            <button className="button" type='button' onClick={() => {type("8")}}>
              8
            </button>
            <button className="button" type='button' onClick={() => {type("9")}}>
              9
            </button>
            <button className="button orangeButton" type='button' onClick={() => {type("*")}}>
              &times;
            </button>
          </div>

          <div className="row">
            <button className="button" type='button' onClick={() => {type("4")}}>
              4
            </button>
            <button className="button" type='button' onClick={() => {type("5")}}>
              5
            </button>
            <button className="button" type='button' onClick={() => {type("6")}}>
              6
            </button>
            <button className="button orangeButton" type='button' onClick={() => {type("-")}}>
              &minus;
            </button>
          </div>

          <div className="row">
            <button className="button" type='button' onClick={() => {type("1")}}>
              1
            </button>
            <button className="button" type='button' onClick={() => {type("2")}}>
              2
            </button>
            <button className="button" type='button' onClick={() => {type("3")}}>
              3
            </button>
            <button className="button orangeButton" type='button' onClick={() => {type("+")}}>
              +
            </button>
          </div>

          <div className="row">
            <button className="button" type='button'>
              
            </button>
            <button className="button" type='button' onClick={() => {type("0")}}>
              0
            </button>
            <button className="button" type='button' onClick={() => {type(".")}}>
              .
            </button>
            <button className="button orangeButton" type='button' onClick={() => {type("EQUALS")}}>
              =
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Calculator;
