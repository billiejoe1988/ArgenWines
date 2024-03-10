import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../features/cart/cartSlice';
import counterReducer from '../../features/counter/counterSlice';
import { shopApi } from '../services/shop';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from '../services/auth';
import authReducer from '../../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware),
})

setupListeners(store.dispatch);
