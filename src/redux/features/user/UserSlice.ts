import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store";

import { IUser, fetchUser, fetchRegisterUser } from "./UserAPI";

const initialState = {
  details: localStorage.getItem("user.details")
    ? (JSON.parse(localStorage.getItem("user.details") || "{}") as IUser)
    : {
        firstname: "",
        lastname: "",
        phone: "",
      },
  isAuthenticated: false,
  status: "idle",
};

export const fetchUserAsync = createAsyncThunk(
  "user/fetchUser",
  async (details: IUser) => {
    const response = await fetchUser(details);
    return response.data;
  }
);

export const fetchRegisterUserAsync = createAsyncThunk(
  "user/fetchRegisterUser",
  async (details: IUser) => {
    const response = await fetchRegisterUser(details);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.details = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchRegisterUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRegisterUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.details = action.payload;
        state.isAuthenticated = true;
      });
  },
});

export const { logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
