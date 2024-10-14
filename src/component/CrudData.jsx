import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeData,updateData } from '../app/features/crud/crudslice'
import { useNavigate } from 'react-router-dom'

function CrudData() {
  const data = useSelector((state) => state.crud.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handelNavigate=()=>{
    navigate('/crud/add')
  }

  const handleDelete = (id) => {
    dispatch(removeData(id))
  }
    const handleEdit=(id)=>{
        navigate(`/crud/edit/${id}`)}

  return (
    <div>
      <h1 className="text-center text-3xl font-bold pt-4">Crud App</h1>
      <div className='m-auto flex justify-center'>
        <button className="bg-blue-500 text-white p-2 rounded-md mt-5" onClick={handelNavigate}>Add New User</button>
      </div>
      <table className="table-auto mx-auto mt-5">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={()=>{handleEdit(item.id)}}>Edit</button>
                <button
                  className="bg-red-500 text-white p-2 rounded-md"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CrudData
