import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define the slice
const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
});

// Export the actions
export const authActions = authSlice.actions;

// Configure the store
export const store = configureStore({
    reducer: authSlice.reducer, // Correct property name is 'reducer'
});
