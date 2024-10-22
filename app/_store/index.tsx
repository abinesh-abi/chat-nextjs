import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from '@/app/_store/features/user/userSlice'

const rootReducer = combineReducers({
    user: authSlice,
});

// Create the store
const store = configureStore({
    reducer: rootReducer,
});

export default store

// export RootState
export type RootState = ReturnType<typeof rootReducer>;

// Define AppDispatch
export type AppDispatch = typeof store.dispatch;