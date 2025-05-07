import React, { useState } from 'react'


export default function UseState() {

    const [count, setCount] = useState(0.2);

  return (

    <div>
      <h1>UseState</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <b>{count}</b>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>

  )
}
