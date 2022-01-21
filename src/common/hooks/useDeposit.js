import {useState, useCallback} from 'react';
import {useWallet} from '@src/data-layer/wallet';
import Web3 from 'web3';
import {ABI} from '@src/TetuPSABI';

export function useDeposit() {
    const [loading, setLoading] = useState(false);
    const {wallet} = useWallet();

    const deposit = useCallback((contractAddress, value) => {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(ABI, contractAddress);

            setLoading(true);

            contract.methods.depositAndInvest(web3.utils.toWei(String(value), 'ether')).send({
                from: wallet.currentAccount,
                gas: 100000,
                value: 0,
            })
                .then(result => console.log('result', result))
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log('useDeposit => deposit: ', error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        deposit,
    }
}
