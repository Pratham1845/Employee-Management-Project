import React, { useState } from 'react'
import './Login.css'

function Login({handleLogin}) {
    const [mail, setmail] = useState('')
    const [password, setpassword] = useState('')
    const SubmitHandler = (e) => {
        e.preventDefault()
        handleLogin(mail,password)
        setmail('')
        setpassword('')
    }
    return (
        <div className="Outer">
            <div className="Inner">
                <form className="Form" onSubmit={(e) => {
                    SubmitHandler(e)
                }}>
                    <input type='email'
                        value={mail}
                        onChange={(e) => {
                            setmail(e.target.value)
                        }}
                        placeholder='Enter Email' className="Email" required />
                    <input type='password'
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        placeholder='Enter Password' className="Password" required />
                    <button>Log in</button>
                </form>
            </div>
        </div>
    )
}
export default Login
