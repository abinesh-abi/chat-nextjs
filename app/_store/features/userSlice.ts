import { User } from "@/models/Users";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponseObject } from "@/types/common";
import { getAccessTokenCrud, profileCrud } from "@/app/_axios/api";

type InitialStateType = {
  auth: { access?: string } | null;
  user: User | null;
};

const initialState: InitialStateType = {
  auth: null,
  user: null,
};


type authResponse = { access: string };

// export const userLogin = createAsyncThunk(
//   "auth/login",
//   async (body: LoginRequestBody, thunkApi) => {
//     try {
//       // const response: ApiResponseObject<authResponse> = await usersApi.adminLogin(body);
//       // const tokenJson = JSON.stringify({ token: response?.data.access });
//       // localStorage.setItem('authentication', tokenJson);
//       // return response;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

// export const getUserPermission = createAsyncThunk(
//   "auth/permission",
//   async (_, thunkApi) => {
//     try {
//       // const response: ApiResponseObject<UserPermissions> = await usersApi.getPermissions(0);
//       // return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

export const getAccessToken = createAsyncThunk(
  "user/accessToken",
  async (_, thunkApi) => {
    try {
      const response: ApiResponseObject<{ accessToken: string }> =
        await getAccessTokenCrud.get();
      localStorage.setItem("authentication", response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const getProfile = createAsyncThunk("user/", async (_, thunkApi) => {
  try {
    // const response: ApiResponseObject<User> =
    const response: User = await profileCrud.get();
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: "user",
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
      // .addCase(userLogin.fulfilled, (state: any, action) => {
      //   state.status = "succeeded";
      //   state.user = action.payload;
      // })
      // //   .addCase(userLogin.rejected, (state, action) => {
      // //     state.status = "failed";
      // //     state.error = action.error.message;
      // //   })
      // .addCase(getUserPermission.fulfilled, (state: any, action) => {
      //   state.status = "succeeded";
      //   state.permission = action.payload;
      // })
      .addCase(getAccessToken.fulfilled, (state: InitialStateType, action) => {
        state.auth = { access: action.payload.accessToken };
      })
      .addCase(getProfile.fulfilled, (state: InitialStateType, action) => {
        state.user = action.payload;
      });
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
