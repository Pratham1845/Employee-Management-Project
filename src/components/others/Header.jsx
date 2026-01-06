import React from 'react'
import './Header.css'
const Header=(props)=>{
    const logOut=()=>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // window.location.reload()
    }
    return(
        <div className="HeadOut">
            <h1>Hello, <br/> {props.data.firstName} 👋</h1>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}
export default Header


