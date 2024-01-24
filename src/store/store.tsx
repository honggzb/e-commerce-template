import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import { userReducer } from "./user.slice";
import { cartReducer } from "./cart.slice";

const rootReducer = combineReducers({
    userSlice: userReducer, 
    cartSlice: cartReducer,
});

const persistConfig = {
    key: 'root',
    storage,      //using localStorage
    whitelist: ["cartSlice"],
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
  
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;