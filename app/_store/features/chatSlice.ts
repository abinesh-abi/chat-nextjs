import { User } from "@/models/Users";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponseObject } from "@/types/common";
import { chatCrud, getAccessTokenCrud, messageCrud, profileCrud } from "@/app/_axios/api";
import { ChatUserListType, MessageType } from "@/types/chat";

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
  "message/crate",
  async (params: { chatId: string; content: string }, thunkApi) => {
    try {
      const response: MessageType = await messageCrud.post(params);
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
    selectChat: (state, action: PayloadAction<ChatUserListType>) => {
      return { ...state, selectedChat: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      crateMessage.fulfilled,
      (state: InitialStateType, action) => {
        state.messageList = [...state.messageList, action.payload];
      }
    )
      .addCase(getMessageByChatId.fulfilled, (state: InitialStateType, action) => {
        state.messageList = action.payload;
      });
  },
});

export const { selectChat } = userSlice.actions;

export default userSlice.reducer;
