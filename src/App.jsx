import React, { useEffect, useState } from 'react';
import FilterTodo from './components/FilterTodo';
import TodoDisplay1 from './components/TodoDisplay1';
import './App.css'
import InputTodoList from './components/InputTodoList';
  function App() {
    const [todos, setTodos] = useState([]);//[{},{},{}]
    const [view, setView] = useState('All');
    const [FilteredTodos, SetFilterTodos] = useState([]);

    const addTodoData = (newTitle, newDescription) => {
      let newTodo = {
        id: todos.length + 1,
        title: newTitle,
        description: newDescription,
        completed: 'false'
      }
      setTodos([...todos, newTodo])
      console.log("added");
    }
    console.log(todos);


    const deleteTodoData = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    }

    function changeview(e) {
      setView(e.target.value)

    }

    useEffect(() => {
      if (view === 'All') {
        SetFilterTodos(todos)
      } if (view === 'Completed') {
        SetFilterTodos(todos.filter((todo) => todo.completed === true))

      } if (view === 'Not Completed') {
        SetFilterTodos(todos.filter((todo) => todo.completed === false))
      }
    }, [view, todos])


    return (
      <div className='main-container' style={{marginBottom:'20px'}}>
        
             {/* <h1 style={{ textAlign: 'center' }}>My Todos</h1><br /><br /> */}
         <InputTodoList addTodoData={addTodoData} />

        <br />
        <hr />
        <FilterTodo view={view} setView={setView} changeview={changeview} />

        <div className='card-container'>
          <div className="row gx-4 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {FilteredTodos.map((item, index) => {
              return (
                <>
                  <div className="col h-100 mt-3" >
                    <TodoDisplay1
                      todos={todos}
                      item={item}
                      index={index}
                      deleteTodoData={deleteTodoData}
                      setTodos={setTodos} />
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
       
    )
  }


export default App