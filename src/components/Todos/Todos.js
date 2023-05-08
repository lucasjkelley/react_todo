import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Table } from 'react-bootstrap'
import SingleTodo from './SingleTodo';
import './Todos.css'
import FilterCat from './FilterCat';
import { useAuth } from '../../contexts/AuthContext';
import TodoCreate from './TodoCreate'


export default function Todos() {
    const [todos, setTodos] = useState([]);
    const { currentUser } = useAuth()
    const [showCreate, setShowCreate] = useState(false);
    const [filter, setFilter] = useState(0);
    const [showDone, setShowDone] = useState(false);

    const getTodos = () => {
        axios.get(`http://todoapi.lucasjkelley.com/api/Todos`).then(response => {
            console.log(response.data)
            setTodos(response.data)
        })
    }

    useEffect(() => {
        getTodos()
    }, []);

  return (
    <section className="todos">
        <article className="todoTitle p-1">
            <h1 className="text-center">ToDo Dashboard</h1>
        </article>

        {/* CREATE UI BEGINS */}
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
            <div className="bg-dark p-2 mb-3 text-center">
                <button onClick={() => setShowCreate(!showCreate)}className="btn btn-info">
                    {!showCreate ? 'Create New ToDo' : 'Close Form'}
                </button>
                <div className="createContainer">
                    {showCreate &&
                        <TodoCreate getResources={getTodos} setShowCreate={setShowCreate} />
                    }
                </div>
            </div>
        }
        {/* CREATE UI ENDS */}

        <FilterCat setFilter={setFilter} />
        <Container className='pt-4 pb-5'>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>Done?</th>
              <th>Task</th>
              <th>Category</th>
              {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
                <th>Actions</th>
              }
            </tr>
          </thead>
          <tbody>
            {!showDone ?
              <>
               {filter === 0 ? todos.filter(x => x.done === false).map(x =>
                <SingleTodo key={x.todoId} todo={x} getTodos={getTodos}/>
                ) :
                todos.filter(x => x.done === false && x.categoryId === filter).map(x =>
                  <SingleTodo key={x.todoId} todo={x} getTodos={getTodos} />
              )}
            </> :
            <>
              {filter === 0 ? todos.map(x =>
                  <SingleTodo key={x.todoId} todo={x} getTodos={getTodos}/>
                ) :
                todos.filter(x => x.categoryId === filter).map(x =>
                  <SingleTodo key={x.todoId} todo={x} getTodos={getTodos} />
              )}
            </>
            }
          </tbody>
        </Table>
            {!showDone ?
            <>
            {filter !== 0 && todos.filter(x => x.done === false && x.categoryId === filter).length === 0 &&
              <h2 className="alert alert-warning text-dark">
                There are no incomplete To Do items in this category.
              </h2>
            }
            </> :
            <>
              {filter !== 0 && todos.filter(x => x.categoryId === filter).length === 0 &&
              <h2 className="alert alert-warning text-dark">
                There are no To Do items in this category.
              </h2>
            }
            </>

            }
      </Container>
    </section>
  )
}

