import React from 'react'
import './TaskCard.css'
const TaskCrad = (props) => {

    return (
        <>
            <li key={props.task.id} className={props.task.completed == 'completed' ? 'completed' : 'incomplete'}>
                <span><h3>{props.task.id} - {props.task.title}</h3></span>
                <p> {props.task.description}</p>
                <button className="edit" onClick={() => {
                    props.setSelectedId(props.task.id)
                    // props.setTasks(props.tasks.filter(task => task.id !== props.selectedId))
                    props.setIsAdding(true)
                    // props.handleEvent(props.task.id)
                }}>Edit</button>
                {/* <button className="edit" onClick={() => props.handleEdit(props.task.id)}>Edit</button> */}
                <button onClick={() => props.handleEvent(props.task.id)} className="delete">Delete</button>
            </li>
        </>
    )
}

export default TaskCrad
