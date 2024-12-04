import './Calculator.css';
import { useState } from 'react';
import Navbar from '../Navbar';
import MyParticles from '../MyParticles';


function Calculator() {

  const [current, setCurrent] = useState("")
  const empty = ""

  function isNumber(str) {
    return !isNaN(str)
  }

  function parseEquation(str) {
    //replace ÷ with / for evaluation
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === "÷") {
        str = str.substring(0, i) + "/" + str.substring(i + 1)
      }
    }
    return String(Function(`'use strict'; return(${str})`)())
  }

  function handleType(x) {
    if (current === "ERROR" || current === "Must Clear Calculator") {
      if(x === "Clear"){
        type(x)
      } else {
        setCurrent("Must Clear Calculator")
      }
    } else {
      type(x)
    }


  }

  function type(x) {
    if (isNumber(x) || x === "-" || x === "+") {
      setCurrent(current + x)
    } else if (x === "Clear") {
      setCurrent("")
    } else if (x === "+/-") {
      if (isNumber(current) && current.length > 0) {
        if (current.charAt(0) === '-') {
          setCurrent(current.slice(1, current.length))
        } else {
          setCurrent("-" + current);
        }
      }
    } else if (x === "%") {
      if (isNumber(current)) {
        setCurrent(String(Number(current) / 100))
      }
    } else if (x === "/") {
      setCurrent(current + "÷")
    } else if (x === "*") {
      setCurrent(current + "*")
    } else if (x === ".") {
      setCurrent(current + ".")
    } else if (x === "BACK") {
      if (current.length > 0) {
        setCurrent(current.slice(0, current.length - 1))
      }
    } else if (x === "EQUALS") {
      if (current.length == 0) {
        setCurrent("0");
      } else {
        try {
          setCurrent(parseEquation(current))
        } catch (err) {
          setCurrent("ERROR")
        }
      }

      //parseEquation(current)
    }



  }



  return (
    <div className="App">
      <MyParticles/>

      <header className="App-header">
        <Navbar/>
        <div className="frameBorder">
          <div className="display">
            <div className='displayInterior'>
              {current}
            </div>
          </div>
          <div className="row">
            <button className="button grayButton" type='button' onClick={() => { handleType("Clear") }}>
              C
            </button>
            <button className="button grayButton" type='button' onClick={() => { handleType("+/-") }}>
              +/-
            </button>
            <button className="button grayButton" type='button' onClick={() => { handleType("%") }}>
              %
            </button>
            <button className="button orangeButton" type='button' onClick={() => { handleType("/") }}>
              &#247;
            </button>
          </div>

          <div className="row">
            <button className="button" type='button' onClick={() => { handleType("7") }}>
              7
            </button>
            <button className="button" type='button' onClick={() => { handleType("8") }}>
              8
            </button>
            <button className="button" type='button' onClick={() => { handleType("9") }}>
              9
            </button>
            <button className="button orangeButton" type='button' onClick={() => { handleType("*") }}>
              &times;
            </button>
          </div>

          <div className="row">
            <button className="button" type='button' onClick={() => { handleType("4") }}>
              4
            </button>
            <button className="button" type='button' onClick={() => { handleType("5") }}>
              5
            </button>
            <button className="button" type='button' onClick={() => { handleType("6") }}>
              6
            </button>
            <button className="button orangeButton" type='button' onClick={() => { handleType("-") }}>
              &minus;
            </button>
          </div>

          <div className="row">
            <button className="button" type='button' onClick={() => { handleType("1") }}>
              1
            </button>
            <button className="button" type='button' onClick={() => { handleType("2") }}>
              2
            </button>
            <button className="button" type='button' onClick={() => { handleType("3") }}>
              3
            </button>
            <button className="button orangeButton" type='button' onClick={() => { handleType("+") }}>
              +
            </button>
          </div>

          <div className="row">
            <button className="button" type='button' onClick={() => { handleType("BACK") }}>
              &larr;
            </button>
            <button className="button" type='button' onClick={() => { handleType("0") }}>
              0
            </button>
            <button className="button" type='button' onClick={() => { handleType(".") }}>
              .
            </button>
            <button className="button orangeButton" type='button' onClick={() => { handleType("EQUALS") }}>
              =
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Calculator;
