import { useState } from 'react'

const useForm = (initialState, next) => {
    const [values, setValues] = useState(initialState)

    const handleSubmit = event => {
        event.preventDefault()
        next()
    }

    const handleChange = event => {
        event.persist()
        setValues(prevValues => ({
            ...prevValues,
            [event.target.name]: event.target.value
        }))
        next()
    }
    return {
        handleChange,
        handleSubmit,
        values
    }
}
export default useForm