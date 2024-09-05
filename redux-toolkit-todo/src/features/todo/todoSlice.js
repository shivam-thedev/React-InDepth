import { createSlice,nanoid } from "@reduxjs/toolkit";
 
const initialState={
    todos:[
        {
            id:1,
            text:"hello world"
        }
    ]
}

export  const todoSlice=createSlice({
    name:"todo",//every slice has a name
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                //payload is a object ,isme kuch bhi aaskta hai
                text:action.payload
            }
            state.todos.push(todo)

        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },

        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id==action.payload.id?{...todo,text:action.payload.text}:todo)
        }
    }
})

// jo functionality hai na addTodo aur removeTodo usi ke through state ko update krenge,to inko indiviadually export krenege kyoki components me kam aayega

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions


//store ko aware krne k liye ,jo reducer register krenge usse hi value leke update krta hai,isko sare reducers ka list chahiye hota hai
export default todoSlice.reducer