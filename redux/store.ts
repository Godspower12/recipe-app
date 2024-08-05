import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from './slices/recipesSlice';
// import categoriesReducer from './slices/categoriesSlice';
// import userReducer from './slices/userSlice';





const store = configureStore({
    reducer: {
        recipes: recipesReducer,
        // categories: categoriesReducer,
        // user: userReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;