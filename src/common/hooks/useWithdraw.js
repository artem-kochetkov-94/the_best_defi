import {useState, useCallback} from 'react';
import {useWallet} from '@src/data-layer';
import Web3 from 'web3';
import {ABI} from '@src/TetuPSABI';

export function useWithdraw() {
    const [loading, setLoading] = useState(false);
    const {wallet} = useWallet();

    const withdraw = useCallback((addr, value) => {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(ABI, addr);

            setLoading(true);

            contract.methods.withdraw(web3.utils.toWei(String(value), 'ether')).send({
                from: wallet.currentAccount,
                gas: 4000000,
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
        withdraw,
    }
}
