import * as Yup from 'yup'

const catSchema = Yup.object().shape({
    // Below we call to each property that will need to be validated and use Yup to define
    //the requirements for each property (required, maxLength, etc.)
    catName: Yup.string().max(25, 'Max 25 characters').required('Required'),
    catDesc: Yup.string().max(100, 'Max 100 characters')
})

const todoSchema = Yup.object().shape({
    name: Yup.string().max(100, 'Max 100 characters').required('Required'),
    description: Yup.string().max(100, 'Max 100 characters'),
    done: Yup.bool(),  
    categoryId: Yup.number().required()
})

export { catSchema, todoSchema }