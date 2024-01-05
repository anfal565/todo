import React, { useEffect, useState } from 'react'
// import { taskRef } from 'react';
import './AddTask.css'

const AddTask = ({ tasks, setTasks, isAdding, setIsAdding, selectedId, setSelectedId }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [progress, setProgress] = useState("")

    useEffect(() => {
        if (selectedId) {
            let data = []
            data = tasks.filter((task) => task.id == selectedId)

            if (data) {
                setTitle(data[0].title)
                setDescription(data[0].description)
                setProgress(data[0].completed)
            }

        }

    }, [selectedId]);
//    console.log(selectedId);

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 1000000),
            title: title,
            description: description,
            completed: progress
        }
        setTasks([...tasks, task])
        // console.log(task);
    }
    
    const handleReset = () => {
        // title = "" 
        // description = ""
        setProgress(false)
        // console.log(tasks);
    }
    const updateTask = () => {
        const index = tasks.findIndex((item) => item.id == selectedId)
        // console.log(index , tasks);
        // const task = {
        //     id: selectedId,
        //     title: title,
        //     description: description,
        //     completed: progress
        // }
        tasks[index].title = title
        tasks[index].description = description
        tasks[index].completed = progress
        setTasks([...tasks])
        // setSelectedId(null)
        // setIsAdding(false)
        // setDescription("")
        // setTitle("")
        // setProgress("")
    }
    const handleclose = () => {
        setProgress(false)
    }

    return (
        <div className='addtask'>
            <form>
                <input type="text" value={title} placeholder='Title' onChange={(event) => { setTitle(event.target.value) }}
                    name="title" id='title' />
                <input type="text" value={description} placeholder='Description' onChange={(event) => { setDescription(event.target.value) }}
                    name='description' id='description' />
                <select onChange={(event) => { setProgress(event.target.value) }} value={progress}>
                    <option value="">Select</option>
                    <option value="incomplete">Pending</option>
                    <option value="completed">Completed</option>
                </select>
                {
                    !isAdding ? <button type="button" onClick={handleSubmit}>Add Task</button> :
                        <button type="button" onClick={updateTask}>Update Task</button>
                }
                {
                    !isAdding ? <button className='reset' onClick={handleReset}>Reset</button> :
                        <button className='close' onClick={handleclose}>Close</button>
                }


            </form>
        </div>

    )
}

export default AddTask
