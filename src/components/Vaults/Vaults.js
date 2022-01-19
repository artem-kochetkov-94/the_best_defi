import {useState, useEffect} from 'react';
import {Table} from 'antd';
import {useVaults} from '@src/data-layer/vaults';
import {columns} from './columns';

export function Vaults() {
    const {vaults, useFetchVaults} = useVaults();

    useFetchVaults();
  
    if (!vaults) {
      return null;
    }

    const activeVaults = vaults.filter(vault => vault.active);
  
    return (
      <div>
        <Table
          rowKey="addr"
          dataSource={activeVaults}
          columns={columns}
        />
      </div>
    );
}