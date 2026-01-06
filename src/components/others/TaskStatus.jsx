import React from 'react'
import './TaskStatus.css'
const TaskStatus=({data})=>{
    return(
        <div className="Container">
            <div className="box1">
                <h2>{data.taskSummary.newTask}</h2>
                <h3>New Task</h3>
            </div>
            <div className="box2">
                <h2>{data.taskSummary.completed}</h2>
                <h3>Completed Task</h3>
            </div>
            <div className="box3">
                <h2>{data.taskSummary.active}</h2>
                <h3>Accepted Task</h3>
            </div>
            <div className="box4">
                <h2>{data.taskSummary.failed}</h2>
                <h3>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskStatus
