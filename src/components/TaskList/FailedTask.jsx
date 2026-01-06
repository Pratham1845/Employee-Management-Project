import React from "react"

const FailedTask=(props)=>{
    return(
        <div className='Task' style={{ backgroundColor: 'rgb(248,113,113)' }} >
            <div className='TaskContent'>
                <h3>{props.task.category}</h3>
                <h4>{props.task.date}</h4>
            </div>
            <h2>{props.task.title}</h2>
            <p>{props.task.description}</p>
            <div className="FailedTask">
                <button>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask