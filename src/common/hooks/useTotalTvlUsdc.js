import {useEffect, useState} from 'react';
import {useWallet} from '@src/data-layer';
import {web3} from '@src/common/web3';
import {web3ContractHelper} from '@src/common/web3ContractHelper';

export function useTotalTvlUsdc(addr) {
    const {wallet} = useWallet();
    const [data, setData] = useState(null);
    const [dataFormatted, setDataFormatted] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getTvl() {
            try {
                const tvl = await web3ContractHelper.contract.methods.totalTvlUsdc([addr]).call();
                const tvlFormatted = web3.utils.fromWei(tvl, 'ether');

                setData(tvl);
                setDataFormatted(Number(tvlFormatted).toFixed(2));
            } catch (error) {
                console.log('BalanceDeposit => getBalance: ', error.message);
            } finally {
                setLoading(false);
            }
        }

        getTvl();
    }, [addr, wallet]);

    return {
        loading,
        data,
        dataFormatted
    }
}
