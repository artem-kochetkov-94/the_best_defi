import {useSelector} from 'react-redux';
import {Table} from 'antd';
import {useVaults} from '@src/data-layer/vaults';
import {columns} from './columns';

export function Vaults() {
    const {vaults, useFetchVaults, activeVaultsSelector} = useVaults();
    const activeVaults = useSelector(state => activeVaultsSelector(state))

    useFetchVaults();
  
    return (
      <div>
        <Table
          rowKey="addr"
          dataSource={activeVaults}
          columns={columns}
          loading={vaults.isFetcing}
        />
      </div>
    );
}