import { useState } from "react";
import UserContext from "./userContext";

//jo bhi prop aarha hai use as it is use krlo
export default function UserContextProvider({children}) {
    const [user,setUser]=useState(null)
  return (
    //jo bhi value pass krna chahte hai vo ham pass kr skte jo ki children use kr ske
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  );
}