import React, { useContext } from 'react'
import MoneyContext from '../../context/MoneyContext'

export default function Global() {
    const {person} = useContext(MoneyContext);

    console.log("Printing", useContext(MoneyContext))
  return (
    <div>
      <h2>Hey I am Global Data Fetch Data using Context API</h2>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>Email:</strong> {person.email}</p>
    </div>
  )
}
