import {useEffect, useState} from 'react';
import {useWallet} from '@src/data-layer';
import {web3} from '@src/common/web3';
import {web3ContractHelper} from '@src/common/web3ContractHelper';

export function useUserRewardsBoostUsdc(addr) {
    const {wallet} = useWallet();
    const [data, setData] = useState(null);
    const [dataFormatted, setDataFormatted] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getRewards() {
            try {
                if (!window.ethereum || !wallet.currentAccount) {
                    return null;
                }
                console.log('wallet.currentAccount', wallet.currentAccount)
                console.log('addr', addr)

                const data = await web3ContractHelper.contract.methods.userRewardsBoostUsdc(
                    wallet.currentAccount,
                    addr,
                ).call();
                console.log('data', data);

                if (!data.length) {
                    return;
                }

                const rewards = data[0];

                const dataFormatted = web3.utils.fromWei(rewards, 'ether');

                setData(rewards);
                setDataFormatted(Number(dataFormatted).toFixed(2));
            } catch (error) {
                console.log('useUserRewardsBoostUsdc => getRewards: ', error.message);
            } finally {
                setLoading(false);
            }
        }

        getRewards();
    }, [addr, wallet]);

    return {
        loading,
        data,
        dataFormatted
    }
}
