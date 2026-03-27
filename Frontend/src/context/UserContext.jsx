import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({children})=>{
  const[user , setUser] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    if(user) return;

    const accessToken = localStorage.getItem("token");
    if(!accessToken){
      setLoading(false);
      return;
    }

    const fetchUser = async () =>{
      try {
        
      } catch (error) {
        console.error("User not authenticate", error);
        clearUser();
      }finally{
        setLoading(false);
      }
    };

    fetchUser();
  },[]);
   const updateUser = (userData)=>{
    setUser(userData);
    localStorage.setItem("token", userData.token);
    setLoading(false);
   };

   const clearUser = () =>{
    setUser(null);
    localStorage.removeItem("token")
   }

  return(
    <UserContext.Provider value={{user, loading, updateUser, clearUser}}>
      {children}
    </UserContext.Provider>
  )
};

export default UserProvider;
