import React from "react"
import './TaskList.css'
import NewTask from "./NewTask"
import CompletedTask from "./CompletedTask"
import AcceptTask from "./AcceptTask"
import FailedTask from "./FailedTask"
const TaskList=({data})=>{
    return(
        <div className='TaskContainer'>
            {data.tasks.map((elem,idx)=>{
                if(elem.active){
                    return <AcceptTask key={idx} index={idx} task={elem} data={data}/>
                }
                if(elem.newTask){
                   return <NewTask key={idx} index={idx} task={elem} data={data}/>
                }
                if(elem.completed){
                   return <CompletedTask key={idx} index={idx} task ={elem} data={data}/>
                }
                if(elem.failed){
                   return <FailedTask key={idx} index={idx} task={elem} data={data}/>
                }
            })}
        </div>
    )
}

export default TaskList