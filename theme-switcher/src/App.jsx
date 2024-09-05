import { useState,useEffect } from "react"
import { ThemeProvider } from "./contexts/theme"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/card"

function App() {
  const [themeMode,setThemeMode]=useState("light")
  
  const darkTheme = () =>{
    setThemeMode("dark")
  }
  
  const lightTheme = () =>{
    setThemeMode("light")
  }

  useEffect(() => {
    let html =document.querySelector('html')
    html.classList.remove("light","dark")
    html.classList.add(themeMode)
  }, [themeMode])
  
  
  return (
        <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
          <div className="flex flex-wrap items-center min-h-screen">
             <div className="w-full">
                 <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
                        <ThemeBtn/>
                 </div>

                 <div className="w-full max-w-sm mx-auto">
                       <Card/>
                 </div>
             </div>
         </div>
        </ThemeProvider>
  )
}

export default App
