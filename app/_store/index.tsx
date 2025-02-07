import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from '@/app/_store/features/userSlice'
import sidebarSlice from '@/app/_store/features/sidebarSlice'
import chatSlice from '@/app/_store/features/chatSlice'
import socketSlice from '@/app/_store/features/socketSlice'

const rootReducer = combineReducers({
    user: authSlice,
    sidebar: sidebarSlice,
    chat: chatSlice,
    socket: socketSlice,
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