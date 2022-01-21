import {createSelector} from "reselect";

export const vaultsSelector = state => state.vaults;

export const activeVaultsSelector = createSelector(
    vaultsSelector,
    vaults => {
        if (!vaults.data) {
            return [];
        }

        return vaults.data.filter(vault => vault.active);
    }
);

export const vaultByIdSelector = createSelector(
    vaultsSelector,
    (_, props) => props.id,
    (vaults, id) => {
        if (!vaults.data) {
            return null;
        }
    
        return vaults.data.find(vault => vault.addr === id);
    }
);