import { createSlice } from "@reduxjs/toolkit";

const questionslice = createSlice({
  name: "Questiondata",
  initialState: {
    data: {
      questioninfo: [],
    },
  },
  reducers: {
    updatequestioninfo: (state, action) => {
      state.data.questioninfo = action.payload;
    },
  },
});

export default questionslice.reducer;
export const { updatequestioninfo } = questionslice.actions;
