import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import axios from 'axios'
import TodoEdit from './TodoEdit'

export default function SingleTodo(props) {
  const { currentUser } = useAuth()
  const [showEdit, setShowEdit] = useState(false);

  const deleteTodo = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.todo.name}?`)){
      axios.delete(`http://todoapi.lucasjkelley.com/api/Resources/${id}`).then(() => props.getTodos())
    }
  }

  const flipDone = () => {
    let updatedToDo = {
        toDoId: props.todo.toDoId,
        name: props.todo.name,
        done: !props.todo.done,
        categoryId: props.todo.categoryId
    }
    axios.put(`http://todoapi.lucasjkelley.com/api/Resources/${props.todo.toDoId}`, updatedToDo).then(response => {
        console.log(response)
        props.getToDos()
    })
}

  return (
    <tr>
        <td>
            <input className='checkbox' type='checkbox' checked={props.todo.done} onChange={() => flipDone()} />
        </td>
        <td>{props.todo.name}</td>
        <td>{props.todo.category.catName}</td>
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
            <td className='text-center'>
                <button className="fs-5 rounded" id='editLink' onClick={() => setShowEdit(true)}>
                    <FaEdit />
                </button>
                &emsp;
                <button className='fs-5 rounded' id='deleteLink' onClick={() => deleteTodo(props.todo.toDoId)}>
                    <FaTrashAlt />
                </button>
                {showEdit &&
                    <TodoEdit
                        todo={props.todo}
                        getTodos={props.getTodos}
                        showEdit={showEdit}
                        setShowEdit={setShowEdit} />
                }
            </td>
        }
    </tr>
  )
}
//     <div className='singleTodo col-md-3 m-4'>
//       {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
//         <div>
//           <button id="editLink" onClick={() => setShowEdit(true)}>
//             <FaEdit />
//           </button>
//           <button id="deleteLink" onClick={() => deleteTodo(props.todo.todoId)}>
//             <FaTrashAlt />
//           </button>
//           {showEdit &&
//             <TodoEdit 
//             showEdit={showEdit}
//             setShowEdit={setShowEdit}
//             resource={props.todo}
//             getResources={props.getTodos} />
//           }
//         </div>
// }
//         <h3>{props.todo.name}</h3>
//         {props.todo.description != null ?
//             <p>{props.todo.description}</p> :
//             <p>No description available.</p>
//         }
//         {/* Maybe use this button as a check as done and onclick changes status */}
//         <a href={props.todo.done} target='_blank' rel='noreferrer' className="btn btn-info">
//             Mark As Done 
//         </a>
//     </div>