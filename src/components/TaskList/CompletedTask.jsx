import React from "react"

const CompletedTask=(props)=>{
    return(
        <div className='Task' style={{ backgroundColor: '#4ade80' }} >
            <div className='TaskContent'>
                <h3>{props.task.category}</h3>
                <h4>{props.task.date}</h4>
            </div>
            <h2>{props.task.title}</h2>
            <p>{props.task.description}</p>
            <div className="CompletedTask">
                <button>Completed</button>
            </div>
        </div>
    )
}

export default CompletedTask