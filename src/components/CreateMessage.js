import React from 'react'
import useForm from './../hooks/useForm';

const INITIAL_STATE = {
    email:'',
    password:''
  }

const CreateMessage = () => {
    const handleCreateMessage = () => {
    console.log('submit')
    }

    const { handleSubmit } = useForm(INITIAL_STATE, handleCreateMessage)
    return
}

export default CreateMessage