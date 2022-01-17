import {useSelector} from 'react-redux';
import {useCheckWalletIsConnected} from './useCheckWalletIsConnected';
import {useConnectWallet} from './useConnectWallet';
import {walletSelector} from './selectors';

export const useWallet = () => {
    // первым делом проверим, есть ли подключение к кошельку
    useCheckWalletIsConnected();

    const {connectWallet} = useConnectWallet();
    const wallet = useSelector(walletSelector);

    return {
        wallet,
        connectWallet,
    }
}