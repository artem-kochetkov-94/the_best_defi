import {useWallet} from '@src/data-layer';
import {Button} from 'antd';
import {ConnectButton} from './ConnectButton';
import {Account} from './Account';

export function Wallet() {
    const {wallet} = useWallet();

    if (wallet.isCheckingConnection) {
        return <Button type="secondary" loading>Checking connection</Button>;
    }

    if (wallet.isConnecting) {
        return <Button type="secondary" loading>Connecting</Button>;
    }

    if (wallet.currentAccount) {
        return <Account />;
    }

    return <ConnectButton />;
};
