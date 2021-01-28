import React from 'react'

export const AlertContext = React.createContext()
export const AlertToggleContext = React.createContext()

export const useAlert = () => {
  return React.useContext(AlertContext)
}

export const useAlertToggle = () => {
  return React.useContext(AlertToggleContext)
}

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = React.useState(false)

  const toggleAlert = () => setAlert(prev => !prev)

  return (
    <AlertContext.Provider value={alert}>
      <AlertToggleContext.Provider value={toggleAlert}>
      {children}
      </AlertToggleContext.Provider>
    </AlertContext.Provider>
  )
}