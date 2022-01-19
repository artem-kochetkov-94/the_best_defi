import {configureStore} from '@reduxjs/toolkit';
import {walletReducer} from './wallet';
import {vaultsReducer} from './vaults';

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
        vaults: vaultsReducer,
    },
});
