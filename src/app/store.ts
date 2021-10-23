import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./features/reservationSlice";
import customersReducer from "./features/customerSlice";
import { apiSlice } from "./features/jokesSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customers: customersReducer,
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

//only used in TS redux apps:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
