import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userSlice";
import deviceReducer from "./deviceSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const persistedDeviceReducer = persistReducer(persistConfig, deviceReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
    devices: persistedDeviceReducer,
  },
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
