import {useEffect, useState} from 'react';
import {useWallet} from '@src/data-layer';
import Web3 from 'web3';

export function useGetBalance() {
    const [balance, setBalance] = useState(null);
    const {wallet} = useWallet();

    useEffect(() => {
        if (!window.ethereum) {
            throw new Error("No crypto wallet found. Please install it.");
        }

        const web3 = new Web3(window.ethereum);

        web3.eth.getBalance(wallet.currentAccount)
            .then(result => {
                const balance = web3.utils.fromWei(result, 'ether')
                setBalance(balance)
            })
            .catch(error => console.log('useGetBalance error: ', error.message));            
    }, [wallet.currentAccount]);

    return {
        balance
    };
}