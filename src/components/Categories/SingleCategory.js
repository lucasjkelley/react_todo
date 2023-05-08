import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import axios from 'axios'
import CatEdit from './CatEdit'

export default function SingleCategory(props) {
  const { currentUser } = useAuth()
  const [showEdit, setShowEdit] = useState(false);

  const deleteCat = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.category.catName}?`)){      
      axios.delete(`http://todoapi.lucasjkelley.com/api/Categories/${id}`).then(() => props.getCategories())
    }
  }
  return (
    <tr>
        <td>{props.category.catName}</td>
        <td>{props.category.catDesc}</td>
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
          <td>
            <button className="m-1 rounded" id='editLink' onClick={() => setShowEdit(true)}>
              <FaEdit />
            </button>
            <button className="m-1 rounded" id='deleteLink' onClick={() => deleteCat(props.category.categoryId)}>
              <FaTrashAlt />
            </button>
            {showEdit &&
              <CatEdit 
              showEdit={showEdit}
              setShowEdit={setShowEdit}
              getCategories={props.getCategories}
              category={props.category} />
            }
          </td>
        }
    </tr>
  )
}
