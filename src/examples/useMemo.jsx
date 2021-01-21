import React, { useState, useMemo, useEffect } from 'react'

function complexComputation(num) {
  console.log('computations...')
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function useMemoExample() {
  const [number, setNumber] = useState(1)
  const [colored, setColored] = useState(false)

  // const styles = useMemo(() => ({
  //   color: colored ? 'pink' : 'black'
  // }), [colored])

  const styles = {
    color: colored ? 'pink' : 'black'
  }

  const computed = complexComputation(number)

  // const computed = useMemo(() => {
  //   return complexComputation(number)
  // }, [number])

  //
  useEffect(() => {
    console.log('Styles changed')
  }, [styles])

  return (
    <>
      <h1>Computed Value: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Remove</button>

      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change</button>
      <h2 style={styles}>Just test with styles</h2>
    </>
  )
}

export default useMemoExample