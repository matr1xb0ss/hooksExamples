import React, { useState, useCallback } from 'react'
import ItemsList from './ItemsList'

function useCallbackExample() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'pink' : 'black'
  }

  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_, i) => `Element ${i + indexNumber}`)
  }, [count])

  return (
    <>
      <h1 style={styles}>Number of Elements: {count}</h1>
      <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change color</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </>
  )
}

export default useCallbackExample