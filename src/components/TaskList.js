import React, {  useState } from 'react'
import TaskCrad from './TaskCrad'

const TaskList = ({ tasks, setTasks, setSelectedId, selectedId ,setIsAdding}) => {
    const [show, setShow] = useState(true)
    // const [updateTasks, setUpdateTasks] = useState([])


    const handleEvent = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    // const handleEdit = (id) => {
    //     setUpdateTasks(tasks.filter(task => task.id === id))
    //     setTasks(tasks.filter(task => task.id !== id))
    //     const index = tasks.findIndex((item) => item.id = selectedId)
    //     const task = {
    //         id: selectedId,
    //         title: title,
    //         description: description,
    //         completed: Boolean(progress)
    //     }
    //     setTasks([...tasks, task])
    //     setSelectedId(null)
    //     setIsAdding(false)
    //     setDescription("")
    //     setTitle("")
    //     setProgress("")
    // }

    return (
        <div>
            <section className='todolist'>
                <h1>Todo Lists</h1>
                <button onClick={() => setShow(!show)} className="hidden">Hide</button>
                <ul>

                    {show && tasks.map((task) => (
                        <TaskCrad task={task} handleEvent={handleEvent} setIsAdding={setIsAdding}
                            // handleEdit={handleEdit} 
                            setSelectedId={setSelectedId} selectedId={selectedId} tasks={tasks} setTasks={setTasks}/>

                    ))}
                </ul>
            </section>
        </div>
    )
}

export default TaskList
