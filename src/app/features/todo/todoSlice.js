import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {id:1,title:"todo1",completed:false},
    ]
}
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        // property,function
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                title:action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        update:(state,action)=>{
            const { id, newTitle } = action.payload
            const todo = state.todos.find(todo => todo.id === id)
            if (todo) {
              todo.title = newTitle
            }
        }     
    }

})
export const {addTodo,removeTodo,update}=todoSlice.actions
export default todoSlice.reducer;