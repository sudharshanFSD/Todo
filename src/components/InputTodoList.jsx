import React, { useState } from 'react'
import './InputTodo.css'

function InputTodoList ({addTodoData}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
      const addTodo = () => { 
        addTodoData(title, description)
        setTitle("")
        setDescription("")
      }
  return (
    <section className='container'>
    <div>
    <div className="text-center">
            <h1 style={{color:"#157447"}}>My ToDo Task</h1>
        </div>
         <div className="row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 justify-content-evenly mt-5" id="inputs">
        <input className="form-control w-25 " id="Search-input" name="Title" placeholder='Todo Name' value={title} onChange={e => setTitle(e.target.value)} />

        <input className="form-control w-25" name="description" placeholder='Todo Description' value={description} onChange={e => setDescription(e.target.value)} />
        <button className='btn-add' onClick={addTodo}>Add Todo</button>
        </div>

    </div>
    </section>
  )
}

export default InputTodoList;