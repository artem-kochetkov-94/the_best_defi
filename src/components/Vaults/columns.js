import {Link} from 'react-router-dom';
import Web3 from 'web3';
import {BalanceDeposit} from '@src/components/Balance';
import {Assets} from '@src/components/Assets';
import {Tvl} from './Tvl';
import {Rewards} from './Rewards';

export const columns = [
    {
      title: 'Name',
      dataIndex: 'addr',
      key: 'addr',
      render: (text, record) => {
        if (record.name === 'TETU_PS' || record.name === 'TETU_DIAMOND_VAULT') {
          console.log('record name', record.name);
          console.log('record', record);
        }
        return (
          // <Link to={`/vault/${record.addr}`}>
            <div>
              <div><b>Name: </b>{record.name}</div>
              <div><b>addr: </b>{record.addr}</div>
              <div>
                <Assets assets={record.assets} />
              </div>
            </div>
          // </Link>
        )
      }
    },
    {
      title: 'TVL',
      dataIndex: 'tvl',
      key: 'tvl',
      render: (text, record) => {
        return (
          <div>
            <div>amount: {Web3.utils.fromWei(text, 'ether')}</div>
            <div><Tvl addr={record.addr} /></div>
          </div>
        );
      },
      sorter: (a, b) => a.tvl - b.tvl,
      sortDirections: ['ascend', 'descend'],
      defaultSortOrder: 'descend',
    },
    {
      title: 'Balance',
      key: 'balance',
      render: (text, record) => {
        return <BalanceDeposit addr={record.addr} />
      },
    },
    {
      title: 'Rewards',
      key: 'rewardTokensBal',
      render: (text, record) => {
        if (record.rewardTokens.length) {
          return <Rewards rewardTokens={record.rewardTokens} />
        }

        return null;
      },
    },
];
