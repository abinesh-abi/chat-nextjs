import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsersWithoutOwnCrud } from "@/app/_axios/api";
import { Users } from "@/types/common";

type InitialStateType = {
  allUsers: Users[];
  isAddUser: boolean;
};

const initialState: InitialStateType = {
  allUsers: [],
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
    builder.addCase(
      getOtherUsers.fulfilled,
      (state: InitialStateType, action) => {
        console.log(action.payload, "appppp");
        state.allUsers = action.payload;
      }
    );
  },
});

export const { toggleAddUser } = userSlice.actions;

export default userSlice.reducer;
