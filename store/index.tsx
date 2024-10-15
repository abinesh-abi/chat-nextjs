import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';

const rootReducer = combineReducers({
    auth: authSlice,
});

export default configureStore({
    reducer: rootReducer,
});

// export RootState
export type RootState = ReturnType<typeof rootReducer>;
