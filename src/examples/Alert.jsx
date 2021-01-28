import React from 'react'
// import { useAlert } from './AlertContext'
import { AlertContext } from './useContext'

export default function Alert() {
  const alert = React.useContext(AlertContext)

  // const alert = useAlert()

  if (!alert) return null

  return (
    <div
      className={'alert alert-danger'}
      // onClick={alert.hide}
    >
      Alert!
      {/*{alert.text}*/}
    </div>
  )
}
