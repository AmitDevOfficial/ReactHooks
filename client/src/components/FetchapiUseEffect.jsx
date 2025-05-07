import React, { useEffect, useState } from 'react'

export default function FetchapiUseEffect() {

    const [data, setData] = useState([]);

    useEffect(() => {
     const fetchData = async() => {
        const api = await fetch("https://jsonplaceholder.typicode.com/todos");
        const result = await api.json();
        console.log("Fetching Data", result);
        setData(result);
     }
     fetchData();
    }, [])
    

  return (
    <div>
      <h1>UseEffect with Fetch API Data</h1>

      <ul>
        {data.slice(0, 5).map(todo => (
          <p key={todo.id}> <b style={{marginRight:"20px"}}>{todo.id}.)</b> {todo.title}</p>
        ))}
      </ul>

    </div>
  )
}
