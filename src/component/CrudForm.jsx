import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../app/features/crud/crudslice'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

function CrudForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSave = (e) => {
    e.preventDefault() 
    dispatch(
      addData({
        id: nanoid(),
        name: name,
        email: email,
      })
    )
    setName('')
    setEmail('')
    navigate('/crud')
  }

  return (
    <div>
      <form onSubmit={handleSave}>
        <div className="flex flex-col items-center mt-10">
          <label className="text-lg">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 border-gray-600 rounded-sm"
          />
        </div>
        <div className="flex flex-col items-center mt-5">
          <label className="text-lg">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 border-gray-600 rounded-sm"
          />
        </div>
        <div className="flex justify-center mt-5">
          <button className="bg-blue-500 text-white rounded-md p-2" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default CrudForm
