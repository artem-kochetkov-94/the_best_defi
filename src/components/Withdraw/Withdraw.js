import {useEffect, useState} from 'react';
import {useWallet} from '@src/data-layer';
import Web3 from 'web3';
import {ABI} from '@src/TetuPSABI';
import {Spin} from 'antd';
import {DecimalStep} from '@src/components/DecimalStep';

export function Withdraw({addr, contractAddress}) {
    const {wallet} = useWallet();
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function deposit() {
            try {
                if (!window.ethereum) {
                  throw new Error("No crypto wallet found. Please install it.");
                }

                if (!wallet.currentAccount) {
                    return;
                }

                console.log('contractAddress', contractAddress);

                const web3 = new Web3(window.ethereum);
                const contract = new web3.eth.Contract(ABI, contractAddress);
                const contractAsset = new web3.eth.Contract(ABI, addr);

                setLoading(true);

                const deposited = await contractAsset.methods.balanceOf(wallet.currentAccount).call();
                const depositFormated = Web3.utils.fromWei(deposited, 'ether')
                setBalance(depositFormated);

                contract.methods.withdraw(web3.utils.toWei('0.1', 'ether')).send({
                    from: wallet.currentAccount,
                    gas: 8000000,
                    value: 0,
                })
                    .then(result => console.log('result', result))
                    .catch(error => console.log('error', error));

            } catch (error) {
                console.log('BalanceDeposit => getBalance: ', error.message);
            } finally {
                setLoading(false);
            }
        }

        deposit();
    }, [contractAddress, wallet]);

    if (loading) {
        return <Spin />;
    }

    if (!balance || balance <= 0) {
        return <span>-</span>;
    }

    return (
        <div>
            <span>{balance}</span>
            <DecimalStep max={balance} />
        </div>
    );
}
