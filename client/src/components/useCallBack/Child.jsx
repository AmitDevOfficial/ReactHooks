import React, { memo } from 'react'

const Child = ({child, handleChild}) => {

    console.log("Hey i am Child Component")

  return (

    <div>
      <h3>hey i am Child Component</h3>
    </div>
  )
}

export default memo(Child)
