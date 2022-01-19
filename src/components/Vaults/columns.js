import {Link} from 'react-router-dom';
import Web3 from 'web3';
import {BalanceDeposit} from '@src/components/BalanceDeposit';
import {Assets} from '@src/components/Assets';

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
              <div>
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