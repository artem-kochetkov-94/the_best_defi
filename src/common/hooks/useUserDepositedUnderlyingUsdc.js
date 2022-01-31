import {useEffect, useState} from 'react';
import {useWallet} from '@src/data-layer';
import {web3} from '@src/common/web3';
import {web3ContractHelper} from '@src/common/web3ContractHelper';

export function useUserDepositedUnderlyingUsdc(addr) {
    const {wallet} = useWallet();
    const [data, setData] = useState(null);
    const [dataFormatted, setDataFormatted] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getDeposit() {
            try {
                if (!window.ethereum || !wallet.currentAccount) {
                    return null;
                }

                const data = await web3ContractHelper.contract.methods.userDepositedUnderlyingUsdc(
                    wallet.currentAccount,
                    addr,
                ).call();

                const dataFormatted = web3.utils.fromWei(data, 'ether');

                setData(data);
                setDataFormatted(Number(dataFormatted).toFixed(2));
            } catch (error) {
                console.log('userDepositedUnderlyingUsdc => getDeposit: ', error.message);
            } finally {
                setLoading(false);
            }
        }

        getDeposit();
    }, [addr, wallet]);

    return {
        loading,
        data,
        dataFormatted
    }
}
