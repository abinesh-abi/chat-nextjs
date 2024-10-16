import { User } from "@/models/Users";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  auth: { access?: string } | null;
  user: User | null;
};

const initialState: InitialStateType = {
  auth: null,
  user: null,
};

interface LoginRequestBody {
  username: string;
  password: string;
}

type authResponse = { access: string };

export const userLogin = createAsyncThunk(
  "auth/login",
  async (body: LoginRequestBody, thunkApi) => {
    try {
      // const response: ApiResponseObject<authResponse> = await usersApi.adminLogin(body);
      // const tokenJson = JSON.stringify({ token: response?.data.access });
      // localStorage.setItem('authentication', tokenJson);
      // return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getUserPermission = createAsyncThunk(
  "auth/permission",
  async (_, thunkApi) => {
    try {
      // const response: ApiResponseObject<UserPermissions> = await usersApi.getPermissions(0);
      // return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // set user
    setUser: (state, action) => {
      return { ...state, user: action.payload };
    },
    // log out user
    logoutUser: (state) => {
      localStorage.removeItem("authentication");
      // location.href = '/login';
      location.href = "/admin";
      return { ...state, user: null };
    },
  },
  extraReducers: (builder) => {
    builder
      //   .addCase(userLogin.pending, (state) => {
      //     state.status = "loading";
      //   })
      .addCase(userLogin.fulfilled, (state: any, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      //   .addCase(userLogin.rejected, (state, action) => {
      //     state.status = "failed";
      //     state.error = action.error.message;
      //   })
      .addCase(getUserPermission.fulfilled, (state: any, action) => {
        state.status = "succeeded";
        state.permission = action.payload;
      });
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
