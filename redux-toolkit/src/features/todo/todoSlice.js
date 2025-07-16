import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{ id: 1, text: 'Learn Redux Toolkit' }]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const todo = {id: nanoid(), text: action.payload}
            state.todos.push(todo);
        },
        removeToDo: (state, action) => {
            state.todos = state.todos
            .filter((todo) => todo.id !== action.payload);
        }
    }
})

export const {addToDo, removeToDo} = todoSlice.actions;
export default todoSlice.reducer;