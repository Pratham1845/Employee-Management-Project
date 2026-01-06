import React, { useContext } from "react"
import './AllTasks.css'
import { AuthContext } from "../../context/AuthProvider"

const AllTasks = () => {
    const contextValue = useContext(AuthContext)
    const authData = Array.isArray(contextValue) ? contextValue[0] : null
    const employees = authData?.emp ?? []

    return (
        <div className='AllTaskContainer'>
            <div className="GivenTask" style={{ backgroundColor: ' #f87171' }}>
                <h3>Employee Name</h3>
                <h3>New Task</h3>
                <h3>Active Task</h3>
                <h3>Completed</h3>
                <h3>Failed</h3>
            </div>
            {employees.length === 0 ? (
                <div className="empInfo">
                    <h3>Loading employees...</h3>
                </div>
            ) : (
                employees.map((elem, idx) => {
                    return (
                        <div className="empInfo" key={idx}>
                            <h3>{elem.firstName}</h3>
                            <h3 style={{ color: '#60a5fa' }}>{elem.taskSummary.newTask}</h3>
                            <h3 style={{ color: '#f5fa60ff' }}>{elem.taskSummary.active}</h3>
                            <h3>{elem.taskSummary.completed}</h3>
                            <h3 style={{ color: '#fa6060ff' }}>{elem.taskSummary.failed}</h3>
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default AllTasks
