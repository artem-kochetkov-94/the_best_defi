import {useEffect} from 'react';
import {vaultsActions} from '@src/store/vaults';
import {useDispatch} from 'react-redux';

export function useFetchVaults() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(vaultsActions.setIsFetching(true));
        
        fetch('https://api.tetu.io/api/v1/reader/vaultInfos?network=MATIC')
            .then(response => response.json())
            .then(response => {
                dispatch(vaultsActions.setData(response.filter(item => item.active)))
            })
            .catch(error => {
                dispatch(vaultsActions.setIsFetching(false));
                console.log(error.message);
            })
    }, []);
}