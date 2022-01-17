import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {walletActions} from '@src/store/wallet';
import {useSetCurrentAccount} from './useSetCurrentAccount';

export const useConnectWallet = (callback) => {
    const dispatch = useDispatch();

    const {setCurrentAccount} = useSetCurrentAccount();

    const setIsConnecting = useCallback((isLoading) => {
        dispatch(walletActions.setIsCheckingConnection(isLoading));
    }, [dispatch]);

    const connectWallet = useCallback(async () => {
        const {ethereum} = window;
        
        if (!ethereum) {
          alert('Please, install Metamask!');
        }
        
        try {
            setIsConnecting(true);
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      
            setCurrentAccount(accounts[0]);
        } catch (error) {
            alert(error.message);
        } finally {
            setIsConnecting(false);
        }
    }, []);

    return {
        connectWallet,
    }
};
