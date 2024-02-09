// answerreducer.js

import { createSlice } from "@reduxjs/toolkit";

const answerslice = createSlice({
  name: "Answerdata",
  initialState: {
    data: {
      answerinfo: []
    }
  },
  reducers: {
    updateanswerinfo: (state, action) => {
      state.data.answerinfo = action.payload;
    }
  },
});

export default answerslice.reducer;
export const { updateanswerinfo } = answerslice.actions;
