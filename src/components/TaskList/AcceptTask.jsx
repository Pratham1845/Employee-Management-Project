import React, { useContext, useEffect } from "react"
import { AuthContext } from '../../context/AuthProvider'
import { getLocalStorage } from "../../utils/localStorage"

const AcceptTask = (props) => {
    // useEffect(() => {
    const [userData, setUserData] = useContext(AuthContext)
    // },[props])
    
    const markComplete = () => {
        let data = JSON.parse(localStorage.getItem('employees'))
        props.data.tasks[props.index].completed = true
        props.data.tasks[props.index].active = false
        props.data.tasks[props.index].newTask = false
        props.data.tasks[props.index].failed = false
        props.data.taskSummary.completed = props.data.taskSummary.completed + 1
        props.data.taskSummary.active = props.data.taskSummary.active - 1
        
        let temp = [...data]
        data.forEach((elem,index) => {
            
            if (elem.id == props.data.id) {
                temp.splice(index, 1,props.data)
                localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: props.data}))
            }
        })
        data=[...temp]
        localStorage.setItem('employees', JSON.stringify(data))
        const { empData, admData } = getLocalStorage()
        
        setUserData({ emp: empData, admin: admData })
    }

    const markFailed = () => {
        let data = JSON.parse(localStorage.getItem('employees'))
        props.data.tasks[props.index].completed = false
        props.data.tasks[props.index].active = false
        props.data.tasks[props.index].newTask = false
        props.data.tasks[props.index].failed = true
        props.data.taskSummary.failed = props.data.taskSummary.failed + 1
        props.data.taskSummary.active = props.data.taskSummary.active - 1

        let temp = [...data]
        data.forEach((elem, index) => {

            if (elem.id == props.data.id) {
                temp.splice(index, 1, props.data)
                localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: props.data }))
            }
        })
        data = [...temp]
        localStorage.setItem('employees', JSON.stringify(data))
        const { empData, admData } = getLocalStorage()

        setUserData({ emp: empData, admin: admData })
    }

    return (
        <div className='Task' style={{ backgroundColor: '#facc15' }} >
            <div className='TaskContent'>
                <h3>{props.task.category}</h3>
                <h4>{props.task.date}</h4>
            </div>
            <h2>{props.task.title}</h2>
            <p>{props.task.description}</p>
            <div className="AcceptTask">
                <button className='complete' onClick={markComplete}>Mark as complete</button>
                <button className="Failed" onClick={markFailed}>Mark as failed</button>
            </div>
        </div>
    )
}

export default AcceptTask