import React from 'react'
import dropmark from 'store/reducers/dropmark'

export const Store = React.createContext()

export function StoreProvider(props) {
  const { children } = props
  const store = {
    dropmark: dropmark(),
  }
  return <Store.Provider value={store}>
    {children}
  </Store.Provider>
}
