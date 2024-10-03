import React, {createContext} from 'react'

export const SolutionContext = createContext()

export const SolutionProvider = ({children}) => {

    const value = {}

  return (
    <SolutionContext.Provider value={value}>
        {children}
    </SolutionContext.Provider>
  )
}