import {useWallet} from '@src/data-layer';

export function Wallet() {
    const {wallet, connectWallet} = useWallet();
    console.log('wallet', wallet);

    if (wallet.isCheckingConnection) {
        return <div>Checking connection...</div>
    }

    if (wallet.isConnecting) {
        return <div>Connecting...</div>
    }

    if (wallet.currentAccount) {
        return <div>Current account {wallet.currentAccount}</div>
    }

    return (
        <button onClick={connectWallet}>Connect Wallet</button>
    );
};
