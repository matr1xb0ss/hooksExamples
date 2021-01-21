import React, { useState } from "react";

// const computeInitialCounter = () => {
//   console.log('Calculations')
//   return Math.trunc(Math.random() * 20)
// }

const useStateExample = () => {
  const [count, setCount] = useState(0)
  // const [count, setCount] = useState(() => computeInitialCounter())

  // const [state, setState] = useState({
  //   title: 'Counter Example',
  //   date: Date.now(),
  // });

  const increment = () => {
    setCount(count + 1)
    setCount(prevState => prevState + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  // const updateTitle = () => {
  //   setState((prevState) => ({ ...prevState, title: 'New Title' }))
  // }

  return (
    <>
      <h1>Counter value: {count}</h1>
      <div className="btn btn-success" onClick={increment}>
        Add
      </div>
      <div className="btn btn-danger" onClick={decrement}>
        Remove
      </div>

      {/*<div*/}
      {/*  className="btn btn-warning"*/}
      {/*  onClick={updateTitle}*/}
      {/*>*/}
      {/*  Change Title*/}
      {/*</div>*/}

      {/*<pre>*/}
      {/*  {*/}
      {/*    JSON.stringify(state, null, 2)*/}
      {/*  }*/}
      {/*</pre>*/}
    </>
  )
}

export default useStateExample