import { useCallback, useEffect, useState,useRef } from "react"


function App() {
  const [password,setPassword]=useState("");
  const [length,setLength]=useState(8);
  const [numAllowed,setNumAllowed]=useState();
  const [charAllowed,setCharAllowed]=useState(false);

  //useRef is used to reference(koi bhi element hai hamare webpage me ,to kisi ka bhi ham reference le skte hai,and we can do manupulations with it),we have used for selecting
  const passwordRef=useRef(null)
  
  //useCallback is not responsible for running the function but for running the function,take it as cache or in a memory(jitna part memorize ho skta utna part memorize krta hai),FOR OPTIMIZATION
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="~!@#$%^&*"
    for (let i=0; i < length; i++) {
      let char =Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])//if any changes occur in these states keep it in a cache or memory

  const handleCopy=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])
  
  //useEffect is used for re-rendering based on dependencies,it is also responsible for running the function
  useEffect(()=>{
    passwordGenerator();
  },[length,numAllowed,charAllowed,setPassword,passwordGenerator])
  
  return (
    <>
      <div className="flex flex-col w-full max-w-lg p-5 mx-auto my-8 bg-gray-800 rounded-lg gap-y-4">
       <h1 className="text-2xl text-white">Password Generator</h1>
       <div className="flex w-full mb-3 overflow-hidden bg-white rounded-lg ">
        <input type="text" className="w-full px-3 py-1 outline-none" value={password} readOnly placeholder="password" ref={passwordRef}/>
        <button className="flex-shrink-0 px-4 py-3 text-white bg-blue-700" onClick={handleCopy}>copy</button>
       </div>
       <div  className="flex text-xl text-orange-700 text-md gap-x-2">
        <div className="flex items-center gap-x-1 ">
          <input type="range" min={6} max={100}  value={length} onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
              setNumAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
       </div>
      </div>
    </>
  )
}

export default App
