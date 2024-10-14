import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { updateData } from '../app/features/crud/crudslice' 

function EditData() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const data = useSelector((state) => state.crud.data)
  
  const user = data.find((user) => user.id === id)

  if (!user) {
    return <div>User not found</div>
  }

  const [uname, setUname] = useState(user.name)
  const [uemail, setUemail] = useState(user.email)

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(
      updateData({
        id: id,
        name: uname,
        email: uemail,
      })
    )
    navigate('/crud')
  }

  return (
    <div>
      <h3 className="text-center">Update Data</h3>
      <form onSubmit={handleUpdate}>
        <div className="flex flex-col items-center mt-10">
          <label className="text-lg">Name</label>
          <input
            type="text"
            value={uname}
            onChange={(e) => setUname(e.target.value)} 
            className="border p-2 border-gray-600 rounded-sm"
          />
        </div>
        <div className="flex flex-col items-center mt-5">
          <label className="text-lg">Email</label>
          <input
            type="email"
            value={uemail}
            onChange={(e) => setUemail(e.target.value)}
            className="border p-2 border-gray-600 rounded-sm"
          />
        </div>
        <div className="flex justify-center mt-5">
          <button className="bg-blue-500 text-white rounded-md p-2" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditData
