import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isFetching: false,
  data: null,
}

export const vaultsSlice = createSlice({
  name: 'vaults',
  initialState,
  reducers: {
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
    },
  },
})

export const vaultsActions = vaultsSlice.actions;
export const vaultsReducer = vaultsSlice.reducer;
