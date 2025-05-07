import React, { useCallback, useState } from 'react'
import Child from './Child';


export default function Parent() {

    const [count, setCount] = useState(0);
    const [child, setChild] = useState([])

    const handleCount = () => {
          setCount(count + 1);
      }
      
      
      

      const handleChild = useCallback(
        () => {
            console.log("hey i am rendering")
          },
        [child],
      ) 

  return (
    <div>
        <Child child={child} setChild={handleChild}/>
      <button onClick={handleCount}> Parent Click Me - <b>{count}</b></button>
    </div>
  )
}
