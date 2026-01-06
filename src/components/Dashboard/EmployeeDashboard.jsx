import {useEffect} from 'react'
import Header from '../others/Header.jsx'
import TaskStatus from '../others/TaskStatus.jsx'
import TaskList from '../TaskList/TaskList.jsx'
import './EmployeeDashboard.css'
const EmployeeDashboard = (props) => {
    useEffect(()=>{
        const prev=document.body.style.backgroundColor;
        document.body.style.backgroundColor='#1c1c1c';
        return()=>{
            document.body.style.backgroundColor=prev;
        }
    },[])
    return (
        <div className="empOut">
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskStatus data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    )
}

export default EmployeeDashboard
