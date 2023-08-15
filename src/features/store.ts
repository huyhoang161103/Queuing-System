import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userSlice";
import deviceReducer from "./deviceSlice";
import serviceReducer from "./serviceSlice";
import giveNumberReducer from "./giveNumberSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const persistedDeviceReducer = persistReducer(persistConfig, deviceReducer);
const persistedServiceReducer = persistReducer(persistConfig, serviceReducer);
const persistedGiveNumberReducer = persistReducer(
  persistConfig,
  giveNumberReducer
);

const store = configureStore({
  reducer: {
    user: persistedReducer,
    devices: persistedDeviceReducer,
    services: persistedServiceReducer,
    giveNumber: persistedGiveNumberReducer,
  },
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
