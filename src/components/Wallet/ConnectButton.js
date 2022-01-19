import {useWallet} from '@src/data-layer';
import {Button} from 'antd';

export function ConnectButton() {
    const {connectWallet} = useWallet();

    return (
        <Button
            type="secondary"
            onClick={connectWallet}
        >
            Connect Wallet
        </Button>
    );
}