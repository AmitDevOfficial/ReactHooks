import React, { useMemo, useState } from 'react'

export default function UseMemoThree() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0)

    const IncrementOne = () => {
        setCountOne(countOne + 1);
        console.log("Hey i am Delay")
    }

    const IncrementTwo = () => {
        setCountTwo(countTwo + 1);
    }


    const isEven =  useMemo(() => {
        let i = 0;
        while (i<2000000000) i++;
        return countOne%2 === 0;
    }, [countOne])


  return (
    <div>
      <button onClick={IncrementOne}>Increment {countOne}</button>
        {isEven ? "Even" : "Odd"}
      <button onClick={IncrementTwo}>Increment {countTwo}</button>
    </div>
  )
}
