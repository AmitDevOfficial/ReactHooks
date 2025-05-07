import React, { useMemo, useState } from 'react'

export default function UseMemoTwo() {

  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function expensiveNum(num){

    console.log("Hey i am slow")

    for (let i = 0; i < 1000000000; i++) {}

    return num*2

  }
 
  let double =  useMemo(() =>  expensiveNum(input), [input]);


  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br />
      <br />
      <input type="number" value={input} onChange={(e) => setInput(e.target.value)}/>
      <div>
        double: {double}
      </div>
    </div>
  )
}
