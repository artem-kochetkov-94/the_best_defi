import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isCheckingConnection: false,
  checkWalletError: null,
  currentAccount: null,

  isConnecting: false,
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
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

export const walletActions = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
