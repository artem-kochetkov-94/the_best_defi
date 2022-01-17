import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {walletActions} from '@src/store/wallet';

export const useSetCurrentAccount = () => {
    const dispatch = useDispatch();

    const setCurrentAccount = useCallback((data) => {
        dispatch(walletActions.setCurrentAccount(data));
    }, [dispatch]);

    return {
        setCurrentAccount,
    }
}