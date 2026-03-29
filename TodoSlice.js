import { createSlice } from "@reduxjs/toolkit";
const initialtodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialtodos,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },

    markComplete: (state, action) => {
      const task = state.find(item => item.id === action.payload.id);
      if (task) {
        task.iscomplete = true;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },

    markIncomplete: (state, action) => {
      const task = state.find(item => item.id === action.payload.id);
      if (task) {
        task.iscomplete = false;
        localStorage.setItem("todos", JSON.stringify(state));
      }     
    },

    editTask: (state, action) => {
      const task = state.find(item => item.id === action.payload.id);

      if (task && action.payload.text.trim() !== "") {
        task.text = action.payload.text;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },

    removeTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    }
  }
});

export const { addTask, markComplete, markIncomplete,removeTask,editTask } = todoSlice.actions;
export default todoSlice.reducer;