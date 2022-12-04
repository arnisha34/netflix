import { createContext, useMemo, useState } from "react";

export const MyListContext = createContext({})

export const MyListContextProvider = ({children}) => {
  const [isMyListSelected, setIsMyListSelected] = useState(false)

  const value = useMemo (() => {
    return {
      isMyListSelected,
      setIsMyListSelected
    }
  },[isMyListSelected, setIsMyListSelected])

  return <MyListContext value={value}>{children}</MyListContext>
}