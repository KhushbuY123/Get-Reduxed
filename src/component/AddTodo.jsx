import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <form onSubmit={addTodoHandler} className='text-center'>
      <label>Add Todo</label><br />
      <input
        type="text"
        className='border p-1 border-gray-600 rounded-sm'
        placeholder='Add Your Task'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        type="submit" 
        className='bg-blue-950 text-white rounded-md p-2 w-20' 
        disabled={!input.trim()}
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo
