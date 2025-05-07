import React, { useCallback, useState } from 'react'
import Child from './Child';

export default function Parent() {

    const [count, setCount] = useState(0);
    const [child, setChild] = useState([]);


    
    

    const hadleChild = useCallback(
        () => {
          console.log("Hey i am Rendring")
        },
        [child],
      )




  return (
    <div>
        <Child child={child} setChild={hadleChild} />
      <button onClick={() => setCount(count + 1)}>Click Me Parent <b>{count}</b></button>
    </div>
  )
}
