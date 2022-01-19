import {BalanceDeposit} from '@src/components/BalanceDeposit';
import {Assets} from './Assets';
import Web3 from 'web3';
import {Link} from 'react-router-dom';

function formatAddress(s) {
    return `${s.slice(0,5)}...${s.slice(-5)}`
}

export const columns = [
    {
      title: 'Name',
      dataIndex: 'addr',
      key: 'addr',
      render: (text, record) => {
        return (
          <Link to={`/vault/${record.addr}`}>
            <div>
              <div><b>Name: </b>{record.name}</div>
              <div><b>Contract: </b>{formatAddress(text)}</div>
              <div>
                <b>Assets: </b>
                <Assets assets={record.assets} />
              </div>
            </div>
          </Link>
        )
      }
    },
    {
      title: 'TVL',
      dataIndex: 'tvl',
      key: 'tvl',
      render: text => Web3.utils.fromWei(text, 'ether')
    },
    {
      title: 'Balance',
      key: 'balance',
      render: (text, record) => {
        return <BalanceDeposit addr={record.addr} />
      }
    },
];