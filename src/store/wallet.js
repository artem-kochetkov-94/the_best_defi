import {createSlice} from '@reduxjs/toolkit'

// export interface WalletState {
//   checkWalletError?: string;
// }

// const initialState: WalletState = {
const initialState = {
  isCheckingConnection: false,
  checkWalletError: null,
  currentAccount: null,

  isConnecting: false,
}

export const walletSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // setCheckWalletError: (state, action: PayloadAction<string>) => {
    setCheckWalletError: (state, action) => {
      state.checkWalletError = action.payload;
    },
    setIsCheckingConnection: (state, action) => {
      state.isCheckingConnection = action.payload;
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
      state.isCheckingConnection = false;
      state.isConnecting = false;
    },

    setIsConnecting: (state, action) => {
      state.isConnecting = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const walletActions = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
