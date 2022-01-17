import {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {walletActions} from '@src/store/wallet';
import {useSetCurrentAccount} from './useSetCurrentAccount';

export const useCheckWalletIsConnected = () => {
  const dispatch = useDispatch();

  const setError = useCallback((error) => {
    dispatch(walletActions.setCheckWalletError(error));
  }, [dispatch]);

  const setLoading = useCallback((isLoading) => {
    dispatch(walletActions.setIsCheckingConnection(isLoading));
  }, [dispatch]);

  const {setCurrentAccount} = useSetCurrentAccount();

  useEffect(() => {
    async function checkWalletIsConnected() {
      const {ethereum} = window;
    
      if (!ethereum) {
        setError('Make sure you have Metamaks installed!');
        return;
      }

      try {
        setLoading(true);

        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        if (accounts.length !== 0) {
          const account = accounts[0];
          setCurrentAccount(account);
        } else {
          setError('No authorized account found');
        }
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false);
      }
    }

    checkWalletIsConnected();
  }, []);
};
