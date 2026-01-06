import React, { useContext, useState } from "react"
import './CreateTask.css'
import { AuthContext } from "../../context/AuthProvider"
import { getLocalStorage } from "../../utils/localStorage"

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [category, setCategory] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [newTask, setNewTask] = useState({})
    const [userData, setUserData] = useContext(AuthContext)

    const submitHandler = (e) => {
        e.preventDefault()
        const task = { title: taskTitle, category: category, description: taskDescription, date: taskDate, active: false, newTask: true, completed: false, failed: false }
        setNewTask(task)
        const data = JSON.parse(localStorage.getItem('employees'))
        let matched = false
        data.forEach((elem) => {
            if (elem.firstName.toLowerCase() === assignTo.toLowerCase()) {
                elem.tasks = [...elem.tasks, task]
                elem.taskSummary.newTask += 1
                matched = true
                return
            }
        })
        if (matched === false) {
            alert('No Employee Found with this Name')
            return
        }
        localStorage.setItem('employees', JSON.stringify(data))
        const { empData, admData } = getLocalStorage()
        setUserData({ emp: empData, admin: admData })
        setNewTask({})
        setTaskTitle('')
        setCategory('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
    }
    return (
        <form onSubmit={(e) => {
            submitHandler(e)
        }}>
            <div className='TaskForm'>
                <div className='TaskBlock1'>
                    <div className='Field1'>
                        <h3>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => {
                            setTaskTitle(e.target.value)
                        }} type='text' placeholder='Make a UI design' id='title' required />
                    </div>
                    <div className="Field2">
                        <h3>Date</h3>
                        <input value={taskDate} onChange={(e) => {
                            setTaskDate(e.target.value)
                        }} type='date' placeholder='DD/MM/YYYY' id='date' required />
                    </div>
                    <div className="Field3">
                        <h3>Assign To</h3>
                        <input value={assignTo} onChange={(e) => {
                            setAssignTo(e.target.value)
                        }} type='text' placeholder='Employee Name' id='empName' required />
                    </div>
                    <div className="Field4">
                        <h3>Category</h3>
                        <input value={category} onChange={(e) => {
                            setCategory(e.target.value)
                        }} type='text' placeholder='Design, Development, etc...' id='category' required />
                    </div>
                </div>
                <div className='TaskBlock2'>
                    <div className="Tfield">
                        <h3>Description</h3>
                        <textarea value={taskDescription} onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} name='' id='description' cols='30' rows='10' required />
                    </div>
                    <button>Create Task</button>
                </div>

            </div>
        </form>
    )
}

export default CreateTask