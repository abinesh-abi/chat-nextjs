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
import { RootState } from "..";

type InitialStateType = {
  // isChatOpen: boolean;
  selectedChat: ChatUserListType | null;
  messageList: MessageType[];
  loading: boolean;
};

const initialState: InitialStateType = {
  // isChatOpen: false,
  selectedChat: null,
  messageList: [],
  loading: false,
};

export const crateMessage = createAsyncThunk(
  "message/create",
  async (params: { chatId: string; content: string }, thunkApi) => {
    const state = thunkApi.getState() as RootState;

    try {
      const response: MessageType = await messageCrud.post(params);

      state.socket.socket?.send(
        JSON.stringify({
          type: "private_message",
          receiver: state.chat.selectedChat?.userDetails._id,
          message: response,
        })
      );

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getMessageByChatId = createAsyncThunk(
  "message/get",
  async (params: { chatId: string }, thunkApi) => {
    try {
      const response: MessageType[] = await chatCrud.retrieve(params.chatId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // toggle chat open or not
    selectChat: (state, action: PayloadAction<ChatUserListType | null>) => {
      return { ...state, selectedChat: action.payload };
    },
    appendMessage: (state, action: PayloadAction<MessageType>) => {
      return { ...state, messageList: [...state.messageList, action.payload] };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(crateMessage.fulfilled, (state: InitialStateType, action) => {
        state.messageList = [...state.messageList, action.payload];
      })
      .addCase(
        getMessageByChatId.fulfilled,
        (state: InitialStateType, action) => {
          state.messageList = action.payload;
        }
      );
  },
});

export const { selectChat, appendMessage } = userSlice.actions;

export default userSlice.reducer;
