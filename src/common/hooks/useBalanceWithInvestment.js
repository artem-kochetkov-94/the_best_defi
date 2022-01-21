import {useEffect, useState} from 'react';
import {useWallet} from '@src/data-layer';
import Web3 from 'web3';
import {ABI} from '@src/TetuPSABI';

export function useBalanceWithInvestment(addr) {
    const {wallet} = useWallet();
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getBalance() {
            try {
                if (!window.ethereum) {
                throw new Error("No crypto wallet found. Please install it.");
                }
        
                if (!wallet.currentAccount) {
                    return;
                }
        
                const web3 = new Web3(window.ethereum);
                const contract = new web3.eth.Contract(ABI, addr);
                
                setLoading(true);
        
                const deposited = await contract.methods.underlyingBalanceWithInvestmentForHolder(wallet.currentAccount).call();
                const depositFormatted = Web3.utils.fromWei(deposited, 'ether')
                setBalance(depositFormatted);
            } catch (error) {
                console.log('BalanceDeposit => getBalance: ', error.message);
            } finally {
                setLoading(false);
            }
        }

        getBalance();
    }, [addr, wallet]);

    return {
        loading,
        balance,
    }
}
