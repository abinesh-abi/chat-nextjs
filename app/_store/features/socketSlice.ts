import { User } from "@/models/Users";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponseObject } from "@/types/common";
import {
  chatCrud,
  getAccessTokenCrud,
  messageCrud,
  profileCrud,
} from "@/app/_axios/api";
import { ChatUserListType, MessageType } from "@/types/chat";
import React, { useRef } from "react";
import CONFIG from "@/config/CONFIG";

type InitialStateType = {
  socket: WebSocket | null;
};

const initialState: InitialStateType = {
  socket: null,
};

const userSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocketRef: (state, action) => {
      return { ...state, socket: action.payload };
    },
  },
});

export const { setSocketRef } = userSlice.actions;

export default userSlice.reducer;
