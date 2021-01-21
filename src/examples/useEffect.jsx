import React, { useState, useEffect } from 'react'

function useEffectExample() {
  const [type, setType] = useState('users')
  // const [data, setData] = useState([])
  // const [position, setPosition] = useState({
  //   x: 0, y: 0
  // })

  useEffect(() => {
    console.log('render')
  })

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //
  //   // return () => {
  //   //   console.log('clean type')
  //   // }
  // }, [type])

  // const mouseMoveHandler = event => {
  //   setPosition({
  //     x: event.clientX,
  //     y: event.clientY
  //   })
  // }

  // useEffect(() => {
  //   console.log('ComponentDidMount')
  //
  //   window.addEventListener('mousemove', mouseMoveHandler)
  //
  //   return () => {
  //     window.removeEventListener('mousemove', mouseMoveHandler)
  //   }
  // }, [])

  return (
    <div>
      <h1>Type of data: <br/>{type}</h1>

      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>

      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      {/*<pre>{JSON.stringify(position, null, 2)}</pre>*/}
    </div>
  )
}

export default useEffectExample