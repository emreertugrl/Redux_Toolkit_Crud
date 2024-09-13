import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, x: [] },
  //   hem aksiyon hem de görev tanımlanır.
  reducers: {
    increase: (state, action) => {
      state.count++;
    },
    decrease: (state, action) => {
      state.count--;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});
// store'a tanıtmak için export
export default counterSlice.reducer;

// aksiyon oluşturan fonksiyonları export ederiz projede kullanmak için
export const { increase, decrease, setCount } = counterSlice.actions;
