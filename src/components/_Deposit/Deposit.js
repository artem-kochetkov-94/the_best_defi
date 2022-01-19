import React, {useState} from 'react';
import ErrorMessage from './ErrorMessage';
import TxList from "./TxList";
// import {ethers, Contract, providers} from 'ethers';
import Web3 from 'web3';
import {ABI as TetuPSABI} from './TetuPSABI';
import {ABI as TetuABI} from './TetuABI';

// const startPayment = async ({ setError, setTxs, ether, addr }) => {
//     try {
//       if (!window.ethereum) {
//         throw new Error("No crypto wallet found. Please install it.");
//       }
  
//       await window.ethereum.send("eth_requestAccounts");
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       ethers.utils.getAddress(addr);

//       const tx = await signer.sendTransaction({
//         to: addr,
//         value: ethers.utils.parseEther(ether)
//       });

//       console.log({ ether, addr });
//       console.log("tx", tx);
//       setTxs([tx]);
//     } catch (err) {
//       setError(err.message);
//     }
// };

const test = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum) {
      throw new Error("No crypto wallet found. Please install it.");
    }

    const web3 = new Web3(window.ethereum);
    // const accounts = await web3.eth.getAccounts();
    // const balance = await web3.eth.getBalance(addr);
    // const etherValue = Web3.utils.fromWei(balance, 'ether');

    const me = '0x6f7f90372b7301b91be910758ede05f1b0b78fd3';
    const tetu = '0x255707b70bf90aa112006e1b07b9aea6de021424';
    const tetuPs = '0x225084d30cc297f3b177d9f93f5c3ab8fb6a1454';

    const tokenTetuPS = new web3.eth.Contract(TetuPSABI, tetuPs);
    const balanceTetuPs = await tokenTetuPS.methods.balanceOf(me).call();
    const tetuPsUnderlyingBalanceWithInvestmentForHolder = await tokenTetuPS.methods.underlyingBalanceWithInvestmentForHolder('0x6f7f90372b7301b91be910758ede05f1b0b78fd3').call();
    
    const tokenTetu = new web3.eth.Contract(TetuABI, tetu);
    const balanceTetu = await tokenTetu.methods.balanceOf(me).call();

    const methods = tokenTetuPS.methods;

    const allowanceTetu = await tokenTetuPS.methods.allowance(tetu, me).call();
    const allowanceTetuRevert = await tokenTetuPS.methods.allowance(me, tetu).call();
    const allowanceTetuPs = await tokenTetuPS.methods.allowance(tetuPs, me).call();
    const allowanceTetuPsRevert = await tokenTetuPS.methods.allowance(me, tetuPs).call();

    // const approve = await tokenTetuPS.methods.approve(tetuPs, 0).send({from: me, gas: 21000});
    const approve = tokenTetuPS.methods.deposit(1).send({
      from: me,
      gas: 300000,
      value: 0,
    })
      .then(result => console.log('result', result))
      .catch(error => console.log('error', error));

    // const transferFrom = tokenTetuPS.methods.transferFrom(me, tetuPs, web3.utils.toBN(10000000)).send({
    //   from: me,
    //   gas: 50000,
    //   value: web3.utils.toBN(10000000),
    // });

    console.clear();
    console.log('web3', web3);
    console.log('balanceTetu', Web3.utils.fromWei(balanceTetu, 'ether'));
    console.log('balanceTetuPs', Web3.utils.fromWei(balanceTetuPs, 'ether'));
    console.log('tetuPsUnderlyingBalanceWithInvestmentForHolder', Web3.utils.fromWei(tetuPsUnderlyingBalanceWithInvestmentForHolder, 'ether'));
    console.log('allowanceTetu', allowanceTetu);
    console.log('allowanceTetuRevert', allowanceTetuRevert);
    console.log('allowanceTetuPs', allowanceTetuPs);
    console.log('allowanceTetuPsRevert', allowanceTetuPsRevert);
    console.log('methods', methods);
    console.log('approve', approve);

    // await window.ethereum.send("eth_requestAccounts");
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // ethers.utils.getAddress(addr);

    // const abi = [{"inputs":[{"internalType":"address","name":"_logic","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newImplementation","type":"address"}],"name":"upgrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

    // const contract = new Contract(addr, abi, providers.getDefaultProvider());
    // // console.log('contract', contract);
    // // const balance = await contract.balanceOf('0x6f7f90372b7301b91be910758ede05f1b0b78fd3');
    // const balance = await provider.getBalance("0x6f7f90372b7301b91be910758ede05f1b0b78fd3");
    // console.log('balance', balance.toString());

    // // const balance = await provider.getBalance(addr);
    // // console.log('balance', balance);
  } catch (err) {
    console.log('err', err);
    setError(err.message);
  }
};

export function Deposit() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await test({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <main>
          <h1>Send ETH payment</h1>
          <div>
            <div>
              <input
                type="text"
                name="addr"
                placeholder="Recipient Address"
              />
            </div>
            <div className="my-3">
              <input
                name="ether"
                type="text"
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button type="submit">Pay now</button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
  );
}
