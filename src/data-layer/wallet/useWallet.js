import {useSelector} from 'react-redux';
import {useCheckWalletIsConnected} from './useCheckWalletIsConnected';
import {useConnectWallet} from './useConnectWallet';
import {walletSelector} from './selectors';

export function useWallet() {
    // первым делом проверим, есть ли подключение к кошельку
    // useCheckWalletIsConnected();

    const {connectWallet} = useConnectWallet();
    const wallet = useSelector(walletSelector);

    return {
        wallet,
        connectWallet,
    }
}

// window.ethereum.on('accountsChanged', function (accounts) {
//     alert(accounts[0]);
// });

// window.ethereum.on('chainChanged', (chainId) => {
//     alert(chainId);
// });

// const transactionParameters = {
//     nonce: '0x00', // ignored by MetaMask
//     gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
//     gas: '0x2710', // customizable by user during MetaMask confirmation.
//     to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
//     from: ethereum.selectedAddress, // must match user's active address.
//     value: '0x00', // Only required to send ether to the recipient from the initiating external account.
//     data:
//       '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
//     chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
// };
  
// // txHash is a hex string
// // As with any RPC call, it may throw an error
// const txHash = await ethereum.request({
//     method: 'eth_sendTransaction',
//     params: [transactionParameters],
// });

// //Sending Ethereum to an address
// sendEthButton.addEventListener('click', () => {
//   ethereum
//     .request({
//       method: 'eth_sendTransaction',
//       params: [
//         {
//           from: accounts[0],
//           to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
//           value: '0x29a2241af62c0000',
//           gasPrice: '0x09184e72a000',
//           gas: '0x2710',
//         },
//       ],
//     })
//     .then((txHash) => console.log(txHash))
//     .catch((error) => console.error);
// });
  