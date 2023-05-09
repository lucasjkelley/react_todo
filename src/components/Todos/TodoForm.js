import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { todoSchema } from '../../utilities/validationSchema'
import axios from 'axios'

export default function TodoForm(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://todoapi.lucasjkelley.com/api/Categories`).then(response => setCategories(response.data))
    }, []);

    const handleSubmit = (values) => {
        
        if(!props.todo) {
            const todoToCreate = values

            axios.post(`http://todoapi.lucasjkelley.com/api/Todos`, todoToCreate).then(() => {
                props.setShowCreate(false)
                props.getTodos()
            })
        }
        else{
            const todoToEdit = {
                todoId: props.todo.todoId,
                name: values.name, 
                categoryId: values.categoryId
            }

            axios.put(`http://todoapi.lucasjkelley.com/api/Todos/${props.todo.todoId}`, todoToEdit).then(() => {
                props.setShowEdit(false)
                props.getTodos()
            })
        }
    }


  return (
    <Formik 
        initialValues={{
            name: props.todo ? props.todo.name : '',
            // description: props.todo ? props.todo.description : '',
            categoryId: props.todo ? props.todo.categoryId : ''
        }}
        validationSchema={todoSchema}
        onSubmit={(values) => handleSubmit(values)} >

        {({errors, touched}) => (
            <Form id='todoForm'>
                <div className="form-group m-3">
                    <Field name='name' className='form-control' placeholder='ToDo Name' />
                    {errors.name && touched.name && <div className="text-danger">{errors.name}</div> }
                </div>
                {/* <div className="form-group m-3">
                    <Field 
                        name='description' 
                        className='form-control' 
                        placeholder='Description'
                        as='textarea'
                        style={{ resize: 'none', height: '5em'}} />
                    {errors.description && touched.description && <div className="text-danger">{errors.description}</div> }
                </div> */}
                <div className="form-group m-3">
                    <Field name='categoryId' className='form-control' as='select'>
                        <option value='' disabled>
                            [--Please choose--]
                        </option>
                        {categories.map(cat =>
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.catName}
                            </option>    
                        )}
                    </Field>
                </div>
                <div className="form-group m-3">
                    <button type='submit' className="btn btn-info m-3">
                        Submit changes to API
                    </button>
                </div>
            </Form>
        )}
    </Formik>
  )
}
