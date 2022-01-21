import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useVaults} from '@src/data-layer/vaults';
import {BalanceShare} from '@src/components/Balance';
import {DepositForm} from '../DepositForm';
import {WithdrawForm} from '../WithdrawForm';
import {Tabs as AntdTabs} from 'antd';
import {Card} from 'antd';
const {TabPane} = AntdTabs;

export function Tabs() {
    let {id} = useParams();
    const {vaultByIdSelector} = useVaults();

    const vault = useSelector(state => vaultByIdSelector(state, {id}));

    return (
        <Card>
            <AntdTabs defaultActiveKey="1" onChange={()=> null}>
                <TabPane tab="Deposit" key="1">
                    {vault.assets.map(asset => (
                        <div>
                            <div>Balance: <BalanceShare addr={asset} /></div>
                            <DepositForm addr={asset} contractAddress={id} />
                        </div>
                    ))}
                </TabPane>
                <TabPane tab="Withdraw" key="2">
                    {vault.assets.map(asset => (
                        <div>
                            <div>Share: <BalanceShare addr={id} /></div>
                            <WithdrawForm addr={id} contractAddress={id} />
                        </div>
                    ))}
                </TabPane>
            </AntdTabs>
        </Card>
    )
}