import React from 'react'
// import { useAlertToggle } from "./AlertContext";
// import { useAlert } from './AlertContext'

export default function Main({ toggle }) {
  // const { show } = useAlert()
  // const toggle = useAlertToggle()

  return (
    <>
      <h1>Context Example</h1>
      <button
        onClick={toggle}
        // onClick={() => show('Text from Main.js')}
        className="btn btn-success"
      >
        Toggle alert
      </button>
    </>
  )
}