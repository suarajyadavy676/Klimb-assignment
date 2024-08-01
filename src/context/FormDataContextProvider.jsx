import React, { createContext, useState } from "react"

// craete
export const DataContext = createContext()

export default function FormDataContextProvider({ children }) {

  // initial data
  const initialData = [
    { id: 1, firstName:'Aman',lastName:'Kumar',phoneNumber:'7833444433',email:'aman@gmail.com',role:"frontend",location:"mumbai",department:"cloud" },
    { id: 2, firstName:'Jane',lastName:'doe',phoneNumber:'88887777',email:'jane.doe@example.com',role:"backend",location:"thane",department:"aws" },
  ];

  // state
  const [items,setItems] = useState(initialData)

  return (
    <DataContext.Provider value={{items,setItems}}>
      {children}
    </DataContext.Provider>
  )
}