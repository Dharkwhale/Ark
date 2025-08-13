// services/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const storedAdminLogin = localStorage.getItem("isAdminLoggedIn") === "true";
const storedUserToken = localStorage.getItem("userToken");
const storedUserInfo = localStorage.getItem("userInfo");

const initialState = {
  isAdminLoggedIn: storedAdminLogin,
  userToken: storedUserToken || null,
  userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
  isUserLoggedIn: !!storedUserToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAdmin: (state) => {
      state.isAdminLoggedIn = true;
      localStorage.setItem("isAdminLoggedIn", "true");
    },
    logoutAdmin: (state) => {
      state.isAdminLoggedIn = false;
      localStorage.setItem("isAdminLoggedIn", "false");
    },
    loginUser: (state, action) => {
      state.userToken = action.payload.token;
      state.userInfo = action.payload.user;
      state.isUserLoggedIn = true;
      localStorage.setItem("userToken", action.payload.token);
      localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
    },
    logoutUser: (state) => {
      state.userToken = null;
      state.userInfo = null;
      state.isUserLoggedIn = false;
      localStorage.removeItem("userToken");
      localStorage.removeItem("userInfo");
    },
  },
});

export const { loginAdmin, logoutAdmin, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
