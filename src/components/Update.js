import React, { useState } from 'react'
import './Update.css'
const Update = () => {

    // const [title, setTitle] = useState("")
    // const [description, setDescription] = useState("")
    const [progress, setProgress] = useState(false)

    const handleEdit = () => {

    }
    return (
        <div>
            <form>
                <input type="text" placeholder='Title' name="title" id='title' />
                <input type="text" placeholder='Description' name='description' id='description' />
                <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </select>
                <button type="button" className='update' onClick={() => { handleEdit() }}>Update</button>
                <button className='close' >Close</button>
            </form>
        </div>
    )
}

export default Update
