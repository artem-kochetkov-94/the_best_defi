import {createSelector} from "reselect";

export const vaultsSelector = state => state.vaults.data;

export const vaultByIdSelector = createSelector(
    vaultsSelector,
    (_, props) => props.id,
    (vaults, id) => {
        if (!vaults) {
            return null;
        }
    
        return vaults.find(vault => vault.addr === id);
    }
);