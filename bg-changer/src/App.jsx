import { useState } from "react"


function App() {
 const [color,setColor]=useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
    <div className="fixed inset-x-0 flex justify-center bottom-12 ">
         <div className="flex justify-center gap-[20px]  bg-white p-[10px] rounded-2xl">
           <button  className=" px-5 py-1 rounded-3xl text-[1.2rem] text-white shadow-lg"
           style={{backgroundColor:"red"}}
           onClick={()=>setColor("red")}
           >Red</button>
           <button  className="px-5 py-1 rounded-3xl text-[1.2rem] text-white shadow-lg"
           style={{backgroundColor:"green"}}
           onClick={()=>setColor("green")}
           >Green</button>
           <button  className="px-5 py-1 rounded-3xl text-[1.2rem] text-white shadow-lg"
           style={{backgroundColor:"blue"}}
           onClick={()=>setColor("blue")}
           >Blue</button>
           <button  className="px-5 py-1 rounded-3xl text-[1.2rem] text-white shadow-lg"
           style={{backgroundColor:"olive"}}
           onClick={()=>setColor("olive")}
           >Olive</button>
           <button  className="px-5 py-1 rounded-3xl text-[1.2rem] text-white shadow-lg"
           style={{backgroundColor:"grey"}}
           onClick={()=>setColor("grey")}
           >Grey</button>
           <button  className="px-5 py-1 rounded-3xl text-[1.2rem] text-black shadow-lg"
           style={{backgroundColor:"yellow"}}
           onClick={()=>setColor("yellow")}
           >Yellow</button>
           <button  className="px-5 py-1 rounded-3xl text-[1.2rem] text-black shadow-lg"
           style={{backgroundColor:"pink"}}
           onClick={()=>setColor("pink")}
           >Pink</button>
           <button  className="px-5 py-1 rounded-3xl text-[1.2rem] text-white shadow-lg"
           style={{backgroundColor:"purple"}}
           onClick={()=>setColor("purple")}
           >Purple</button>
           <button  className="px-5 py-1 rounded-3xl text-[1.2rem] text-black shadow-lg"
           style={{backgroundColor:"lavender"}}
           onClick={()=>setColor("lavender")}
           >Lavender</button>
           <button  className="px-5 py-1 rounded-3xl text-[1.2rem] text-black shadow-lg"
           style={{backgroundColor:"white"}}
           onClick={()=>setColor("white")}
           >White</button>
           <button  className="px-5 py-1 rounded-3xl text-[1.2rem] text-white shadow-lg"
           style={{backgroundColor:"black"}}
           onClick={()=>setColor("black")}
           >Black</button>
         </div>
    </div>
       
    </div>
  )
}

export default App
