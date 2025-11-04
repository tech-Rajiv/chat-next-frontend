const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  friends: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addFriendToStore: (state, action) => {
      state.friends = action.payload;
    },
  },
});

export const { addFriendToStore } = dataSlice.actions;
export default dataSlice.reducer;
