const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  friends: [],
  chatingWith: {},
  chatStyles: {
    themeUrl: "/chat.jpg",
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addFriendToStore: (state, action) => {
      state.friends = action.payload;
    },
    chatingWithStore: (state, action) => {
      state.chatingWith = action.payload;
    },
    chatThemeUrlStore: (state, action) => {
      state.chatStyles.themeUrl = action.payload;
    },
  },
});

export const { addFriendToStore, chatingWithStore, chatThemeUrlStore } =
  dataSlice.actions;
export default dataSlice.reducer;
