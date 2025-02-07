import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chatCrud, getUsersWithoutOwnCrud } from "@/app/_axios/api";
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
      const response: ChatUserListType[] = await chatCrud.get();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const crateChat = createAsyncThunk(
  "message/crate",
  async ({ user1, user2 }: { user1: string; user2: string }, thunkApi) => {
    try {
      const response: Users = await chatCrud.post({ user1, user2 });
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
      })
      .addCase(crateChat.fulfilled, (state: InitialStateType, action) => {
        state.allUsers = state.allUsers.filter(
          (val) => val._id !== action.payload._id
        );
      });
  },
});

export const { toggleAddUser } = userSlice.actions;

export default userSlice.reducer;
