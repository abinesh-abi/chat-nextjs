import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createChatCrud, getUsersWithoutOwnCrud } from "@/app/_axios/api";
import { Users } from "@/types/common";
import { ChatUserListType } from "@/types/chat";

type InitialStateType = {
  allUsers: Users[];
  chatUsers: ChatUserListType[];
  isAddUser: boolean;
};

const initialState: InitialStateType = {
  allUsers: [],
  chatUsers: [],
  isAddUser: false,
};

export const getOtherUsers = createAsyncThunk(
  "other-users",
  async (_, thunkApi) => {
    try {
      const response: Users[] = await getUsersWithoutOwnCrud.get();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const getChatLIst = createAsyncThunk(
  "chat-list",
  async (_, thunkApi) => {
    try {
      const response: ChatUserListType[] = await createChatCrud.get();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    //toggle addUser
    toggleAddUser: (state, action) => {
      return { ...state, isAddUser: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOtherUsers.fulfilled, (state: InitialStateType, action) => {
        state.allUsers = action.payload;
      })
      .addCase(getChatLIst.fulfilled, (state: InitialStateType, action) => {
        state.chatUsers = action.payload;
      });
  },
});

export const { toggleAddUser } = userSlice.actions;

export default userSlice.reducer;
