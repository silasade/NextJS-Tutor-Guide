"use client"
import React, { createContext, useContext } from "react";
type Theme={
    colors:{
      primary:string
      secondary: string
    }
  }
  const defaultTheme:Theme={
    colors:{
      primary:"#007bff",
      secondary: "#6c757d"
    }
  }
  const ThemeContext=createContext<Theme>(defaultTheme)
  type ThemeContextProp={
    children:React.ReactNode
  }
  export default function ThemeContextProvider({children}:ThemeContextProp){
    return (
        <ThemeContext.Provider value={defaultTheme}>
                {children}
        </ThemeContext.Provider>
    )
  }
  export const useTheme=()=>useContext(ThemeContext)