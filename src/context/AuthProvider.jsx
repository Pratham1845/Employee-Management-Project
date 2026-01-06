import React, { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localStorage"

export const AuthContext=createContext()

const AuthProvider=({children})=>{
    const [userData,setUserData]=useState(null)
    useEffect(()=>{
        if(localStorage.getItem('employees')===null || localStorage.getItem('admin')===null){
            setLocalStorage()
            // localStorage.clear()
        }
        const {empData,admData}=getLocalStorage()
        setUserData({emp:empData,admin:admData})
    },[])
    return(
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider