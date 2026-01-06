import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { AuthContext } from './context/AuthProvider.jsx'

function App() {
  const [User, setUser] = useState(() => {const loggedIn = localStorage.getItem('loggedInUser')
  if (loggedIn) {
    const userData = JSON.parse(loggedIn)
    return (userData.role)
  }})
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const loggedIn = localStorage.getItem('loggedInUser')
    if (loggedIn) {
      const userData = JSON.parse(loggedIn)
      return (userData.data)
    }})
  const [authData,setAuthData]=useContext(AuthContext)

  useEffect(()=>{
    
    const loggedIn=localStorage.getItem('loggedInUser')
    if(loggedIn){
      const userData=JSON.parse(loggedIn)
      setUser(userData.role)
      setLoggedInUser(userData.data)
    }
  },[authData])

  const handleLogin=(email,password)=>{
    if (authData){
      const adminData = authData.admin.find((a) => email == a.email && password == a.password)
      const employeeData = authData.emp.find((e) => email == e.email && password == e.password)

      if(adminData){
        setUser('admin')
        setLoggedInUser(adminData)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:adminData}))
      }
      else if(employeeData){
        setUser('employee')
        setLoggedInUser(employeeData)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employeeData}))
      }
      else{
        alert('Invalid Credentials')
      }
    }
  }
  
  return (
    <>
      {!User? <Login handleLogin={handleLogin}/> : ''}
      {User == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUser} /> : (User == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUser} /> : '')}
    </>
  )
}

export default App
