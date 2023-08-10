// deviceSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Device {
  deviceCode: string;
  deviceName: string;
  deviceType: string;
  ipAddress: string;
  isActive: boolean;
  isConnected: boolean;
  service: string;
}
interface DeviceState {
  selectedDevice: any;
  devices: Device[];
}

const initialState: DeviceState = {
  devices: [],
  selectedDevice: null,
};

const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setDevices: (state, action: PayloadAction<Device[]>) => {
      state.devices = action.payload;
    },
    setSelectedDevice: (state, action: PayloadAction<Device | null>) => {
      state.selectedDevice = action.payload;
    },
  },
});

export const { setDevices, setSelectedDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
