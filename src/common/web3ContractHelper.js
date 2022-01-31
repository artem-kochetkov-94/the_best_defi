import {ABI} from '@src/ABI';
import Web3 from 'web3';

export class Web3ContractHelper {
    constructor(ABI, addr) {
        this.web3 = new Web3(window.ethereum);
        this.contract = new this.web3.eth.Contract(ABI);
        this.contract.options.address = addr;
    }
}

export const web3ContractHelper = new Web3ContractHelper(
    ABI,
    '0xCa9C8Fba773caafe19E6140eC0A7a54d996030Da',
);
