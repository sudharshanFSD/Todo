import React, { useEffect, useState } from 'react'
import './InputTodo.css';

function TodoDisplay1({ id, item, index, deleteTodoData, setTodos, todos }) {
    const [edit, setEdit] = useState(false)
    const [newtitle, setNewtitle] = useState(item.title)
    const [newdesc, setNewdesc] = useState(item.description)
    const [completed, setCompleted] = useState(item.completed)

    useEffect(() => {
        setCompleted(item.completed)
    }, [item.completed])


    const handleStatusChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === "Complete") {
            setCompleted(item.completed = true); // Update Completed to True
        } else if (selectedValue === "Not Complete") {
            setCompleted(item.completed = false); // Update Completed to False
        }
    };


    const handleEdit = () => {
        setEdit(true);
    };

    const handleSave = () => {
        setEdit(false);
        const updatedTodos = todos.map(todo => {
            if (todo.id === item.id) {
                return {
                    ...todo,
                    title: newtitle,
                    description: newdesc,
                    completed: completed
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const handleDelete = () => {
        deleteTodoData(item.id);
    };



    return (

        <div key={index}>
            <div className="card h-100" id="cards">
                <div className="card-body">
                    <h3 className="card-title text-center">Task:{item.id}</h3>
                    {edit ? (
                        <div>

                            <input
                                type="text"
                                value={newtitle}
                                placeholder='Enter a task Title'
                                required

                                onChange={(e) => setNewtitle(e.target.value)}
                            />
                            <input

                                type="text"
                                value={newdesc}
                                placeholder='New Description'

                                required
                                onChange={(e) => setNewdesc(e.target.value)}
                            />


                        </div>
                    ) : (
                        <>
                            <h4 className="card-title" id="text-title" style={{ margin: "0em 0em 0.5em" }}> Title: {item.title}</h4>
                            <h4 className="card-description" style={{ margin: "0em 0em 1em" }}>Description:{item.description}</h4>
                        </>
                    )}
                    <div style={{ margin: "1em 0em" }}>
                        <h3>Status:</h3>
                        <select
                            className="dropdown-toggle ms-2"
                            id="card-dropdown"
                            value={completed ? "Complete" : "Not Complete"}
                            onChange={handleStatusChange}
                        >
                            <option className="btn btn-danger" value="Not Complete">Not-Completed</option>
                            <option className="btn btn-success" value="Complete">Completed</option>
                        </select>

                    </div>

                    <div className="d-flex justify-content-end" id="btndiv" >
                        {edit ? (
                            <button className="btn btn-primary" onClick={handleSave} style={{ margin: "0em 1em" }}>Save</button>
                        ) : (
                            <button className="btn btn-success" onClick={handleEdit} style={{ margin: "0em 1em" }}>Edit</button>
                        )}
                        <button className="btn btn-danger" onClick={handleDelete} style={{ margin: "0em 1em" }}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TodoDisplay1;