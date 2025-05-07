import React, { memo } from 'react'

const Child = () => {
    
    console.log("child component paractise rendering")
   
  return (
    <div>
      <h3>Hey i Am Child Componet - Practise</h3>
    </div>
  )
}

export default memo(Child)
