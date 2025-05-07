import React, { useState } from 'react'
import MoneyContext from './MoneyContext'

export default function MoneyState(props) {

    const money = 1000;

    const [counter, setCounter] = useState(0)

    const person = {
        name : "Amit",
        age: 27,
        email: "vishamit8827@gmail.com"
    }

  return (
    <div>
      <MoneyContext.Provider value={{money, counter, setCounter, person}}>
        {props.children}
      </MoneyContext.Provider>
    </div>
  )
}
