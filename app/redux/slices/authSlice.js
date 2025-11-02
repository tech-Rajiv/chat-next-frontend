import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user || null;
      state.token = action.payload.token || null;
      state.error = null;
      state.loading = false
    },

    resetAuth: () => initialState,

    setLoading: (state, action) => {
      state.loading = true;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setAuth, resetAuth, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
