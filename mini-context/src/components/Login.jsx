import { useState,useContext } from "react";
import UserContext from "../context/userContext";
export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //is usecontext ko hame context dena pdta hai
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div className="flex flex-col gap-4 p-5 w-96">
        <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}