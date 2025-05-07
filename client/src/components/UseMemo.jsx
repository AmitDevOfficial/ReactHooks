import React, { useMemo, useState } from 'react'

export default function UseMemo() {

    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState(0);

    function expensiveTask(num) {
        console.log("Inside Expensive task");
        for( let i=0; i<=1000000000; i++){}
        return num*2;
    }

    let dubleValue = useMemo(() => expensiveTask(input), [input]);

  return (


    // We use useMemo and useCallback to opetimize our website 
   <>
     <div>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
    <div>
         <b>Count - {counter}</b>
    </div>

    <input type="number" value={input} onChange={(e) => setInput(e.target.value)}/>
    <div>
        Double: {dubleValue}
    </div>
   </>
  )
}

