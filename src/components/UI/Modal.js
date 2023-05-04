import React, { useState } from "react"
//import "./Modal.module.css"

const Modal = () => {
  const [roll, setRoll] = useState(1)
  const [rolling, setRolling] = useState(false)

  const rollDice = () => {
    setRolling(true)
    setRoll(Math.floor(Math.random() * 6) + 1)
    setTimeout(() => setRolling(false), 1000)
  }

  return (
    <div className="dice-container">
      <div className={`dice ${rolling ? "rolling" : ""}`}>
        <div className="side front">
          <span className="dot"></span>
        </div>
        <div className="side back">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="side right">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="side left">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="side top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="side bottom">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <button onClick={rollDice}>Roll Dice</button>
      <div className="result">
        {rolling ? "Rolling..." : `You rolled a ${roll}`}
      </div>
    </div>
  )
}

export default Modal
