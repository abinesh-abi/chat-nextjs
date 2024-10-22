import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';

const rootReducer = combineReducers({
    auth: authSlice,
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