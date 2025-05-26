import React, { useLayoutEffect, useState } from 'react'

export default function UseLayoutEffect() {
    const [color, setColor] = useState("black");

    useLayoutEffect(() => {
        document.body.style.backgroundColor = color;
        document.body.style.color = "white";      
    }, [color])

  return (
    <div>
      <h1>UseLayoutEffect - {color}</h1>
      <b>UseEffect run first in browser then after it show in our DOM</b>
      <br/>
      <br/>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </div>
  )
}
