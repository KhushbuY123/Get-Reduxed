import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, update } from '../app/features/todo/todoSlice'

function Todo() {
  const [editId, setEditId] = useState(null) 
  const [newTitle, setNewTitle] = useState('') 
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todo.todos)

  const handleEdit = (todo) => {
    setEditId(todo.id)
    setNewTitle(todo.title)
  }

  const handleSave = (id) => {
    if (newTitle.trim()) {
      // dispatch action here
      dispatch(update({
        id: id,
        newTitle: newTitle
      }))
      setEditId(null) // Reset the edit state after saving
      setNewTitle('') // Clear the input field
    }
  }

  return (
    <div className='text-center'>
      {todos.map((todo) => (
        <div key={todo.id} className='flex justify-center gap-3 bg-blue-200 m-2 p-2'>
          {editId === todo.id ? (
            // If the current todo is being edited, show the input field
            <>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className='border p-1 border-gray-600 rounded-sm'
              />
              <button
                onClick={() => handleSave(todo.id)}
                className='bg-blue-500 text-white rounded-md p-2'
              >
                Save
              </button>
            </>
          ) : (
            // Otherwise, show the todo text and buttons
            <>
              <div>{todo.title}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className='bg-blue-900 text-white rounded-md p-2'
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(todo)}
                className='bg-blue-900 text-white rounded-md p-2'
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default Todo
