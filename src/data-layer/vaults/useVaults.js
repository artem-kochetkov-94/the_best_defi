import {useSelector} from 'react-redux';
import {vaultsSelector, vaultByIdSelector, activeVaultsSelector} from './selectors';
import {useFetchVaults} from './useFetchVaults';

export function useVaults() {
    const vaults = useSelector(vaultsSelector);

    return {
        vaults,
        useFetchVaults,
        vaultByIdSelector,
        activeVaultsSelector,
    }
}
