import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { initialTasks } from "../../constants";

const crudSlice = createSlice({
  name: "crud",
  initialState: { tasks: initialTasks },
  reducers: {
    addTask: (state, action) => {
      // gelen nesneye id ekle
      action.payload.id = v4();
      // diziye yeni nesneyi ekle
      state.tasks.push(action.payload);
      //
    },
    deleteTask: (state, action) => {
      //  1.yöntem id'ye sahip görevleri dışarıda bırak
      // const filtred = state.tasks.filter((i) => i.id !== action.payload);
      // state.tasks = filtred;
      //! 2.yöntem
      // state.tasks.splice(state.tasks.indexOf(action.payload), 1);
      //! 3.yöntem
      const i = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(i, 1);
    },
    editTask: (state, action) => {
      // düzenlecek olan
      const i = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(i, 1, action.payload);
    },
  },
});

export default crudSlice.reducer;

export const { addTask, deleteTask, editTask } = crudSlice.actions;
