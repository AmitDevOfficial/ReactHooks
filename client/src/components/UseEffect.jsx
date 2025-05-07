import React, { useEffect, useState } from 'react'

export default function UseEffect() {

    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("UseEffect is Running....")
      document.title = count;
    }, [count])
    

  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <b>{count}</b>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      
    </div>
  )
}
