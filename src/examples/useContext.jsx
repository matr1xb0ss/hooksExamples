import React from 'react'
import Main from './Main'
import Alert from './Alert'
// import { AlertProvider } from './AlertContext'

export const AlertContext = React.createContext()

function useContextExample() {
  const [alert, setAlert] = React.useState(false)

  const toggleAlert = () => setAlert(prev => !prev)

  return (
    <AlertContext.Provider value={alert}>
      <div className={'container pt-3'}>
        <Alert />
        <Main toggle={toggleAlert}/>
      </div>
    </AlertContext.Provider>
  )
}

export default useContextExample