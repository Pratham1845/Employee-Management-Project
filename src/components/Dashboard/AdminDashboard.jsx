import React from 'react'
import Header from '../others/Header.jsx'
import './AdminDashboard.css'
import CreateTask from '../others/CreateTask.jsx'
import AllTasks from '../others/AllTasks.jsx'

const AdminDashboard = (props) => {
    return (
        <div className='AdminContainer'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <CreateTask/>
            <AllTasks />
        </div>
    )
}

export default AdminDashboard