import {useContext} from "react"
import { AuthContext } from '../../context/AuthProvider'
import { getLocalStorage } from "../../utils/localStorage"

const NewTask=(props)=>{
    const [userData, setUserData] = useContext(AuthContext)
    const markAccept=()=>{
        let data = JSON.parse(localStorage.getItem('employees'))
        // console.log(props.data.tasks);
        
                props.data.tasks[props.index].completed = false
                props.data.tasks[props.index].active = true
                props.data.tasks[props.index].newTask = false
                props.data.tasks[props.index].failed = false
                props.data.taskSummary.active = props.data.taskSummary.active + 1
                props.data.taskSummary.newTask = props.data.taskSummary.newTask - 1
                
                let temp = [...data]
                data.forEach((elem,index) => {
                    
                    if (elem.id == props.data.id) {
                        temp.splice(index, 1,props.data)
                        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: props.data }))
                    }
                })
                data=[...temp]
                localStorage.setItem('employees', JSON.stringify(data))
                const { empData, admData } = getLocalStorage()
                
                setUserData({ emp: empData, admin: admData })
    }

    return(
        <div className='Task' style={{ backgroundColor: '#60a5fa' }} >
            <div className='TaskContent'>
                <h3>{props.task.category}</h3>
                <h4>{props.task.date}</h4>
            </div>
            <h2>{props.task.title}</h2>
            <p>{props.task.description}</p>
            <div className="NewTask">
                <button onClick={markAccept}>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask