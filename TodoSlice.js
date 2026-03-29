import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    markComplete: (state, action) => {
      const task = state.find(item => item.id === action.payload.id);
      if (task) task.iscomplete = true;
    },

    markIncomplete: (state, action) => {
      const task = state.find(item => item.id === action.payload.id);
      if (task) task.iscomplete = false;
    },

    editTask: (state, action) => {
      const task = state.find(item => item.id === action.payload.id);

      if (task && action.payload.text.trim() !== "") {
        task.text = action.payload.text;
      }
    },

    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
    }
  }
});

export const { addTask, markComplete, markIncomplete,removeTask,editTask } = todoSlice.actions;
export default todoSlice.reducer;