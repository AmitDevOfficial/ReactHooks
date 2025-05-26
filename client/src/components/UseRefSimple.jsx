import React, { useEffect, useState, useRef } from 'react'

/* useRef value ko presist krta he iska mtlb ye he ki usestate humesha ui ko rerender krta he but useref value ko direcllty chagne krta he binna render ke ---
or useRef ko basically use kiya jata he dom ko direclty target krne ke liye or element ko change krne ke liye-*/


export default function UseRefSimple() {

    const [count, setCount] = useState(0)
    let val = useRef(0);
    let btnClr = useRef();


    function handelBtn(){
        val.current = val.current + 1;

        console.log("current value", val.current)

        setCount(count + 1)
    }

    function changeBtnClr() {
        btnClr.current.style.backgroundColor = "red"
        btnClr.current.style.color = "white"
    }

    useEffect(() => {
        console.log("I am rendring Again")
    })

  return (
    <div>
      <button ref={btnClr} onClick={handelBtn}>Increment - <b>{count}</b></button>
        <br />
        <br />
      <button onClick={changeBtnClr}>Click Me</button>
    </div>
  )
}
