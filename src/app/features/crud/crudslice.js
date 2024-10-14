import { createSlice,nanoid } from "@reduxjs/toolkit";

const crudslice=createSlice({
    name:"crud",
    initialState:{
        data:[{
            id:nanoid(),
            name:"Khushbu",
            email:"khushbu@gmail.com"
        }]
    },
    reducers:{
        addData:(state,action)=>{
            state.data.push(action.payload)
        },
        removeData:(state,action)=>{
            state.data=state.data.filter((data)=>data.id!==action.payload)
        },
        updateData:(state,action)=>{
            const index=state.data.findIndex((data)=>data.id===action.payload.id)
            state.data[index]=action.payload
        }
    }
})

export const {addData,removeData,updateData}=crudslice.actions
export default crudslice.reducer