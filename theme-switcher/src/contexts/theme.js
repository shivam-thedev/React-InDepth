import {createContext,useContext} from 'react'

//phle se koi value de skte hai context ke ander

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

// shortcut of ThemeContextprovider
export const ThemeProvider = ThemeContext.Provider

//ise ab themecontext or usecontext bar bar import nhi krna pdega
export default function useTheme(){
    return useContext(ThemeContext)
}