import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useVaults} from '@src/data-layer/vaults';
import {BalanceDeposit} from '@src/components/BalanceDeposit';
import {BalanceShare} from '@src/components/BalanceShare';
import {Deposit} from '@src/components/Deposit';
import {Withdraw} from '@src/components/Withdraw';
import {Row, Col, Card} from 'antd';
import {Assets} from '@src/components/Assets';
import {Tabs} from 'antd';
const {TabPane} = Tabs;

export function Vault() {
    let {id} = useParams();
    const {vaultByIdSelector} = useVaults();

    const vault = useSelector(state => vaultByIdSelector(state, {id}));

    console.log('vault', vault);

    if (!vault) {
        return null;
    }

    return (
        <div>
            <div style={{marginBottom: 20}}>
                <Assets assets={vault.assets} />
            </div>
            <Row gutter={30}>
                <Col span={12}>
                    <Card>
                        <Tabs defaultActiveKey="1" onChange={()=> null}>
                            <TabPane tab="Deposit" key="1">
                                {vault.assets.map(asset => (
                                    <div>
                                        <div>Balance: <BalanceShare addr={asset} /></div>
                                        <Deposit addr={asset} contractAddress={id} />
                                    </div>
                                ))}
                            </TabPane>
                            <TabPane tab="Withdraw" key="2">
                                {vault.assets.map(asset => (
                                    <div>
                                        <div>Share: <BalanceShare addr={id} /></div>
                                        <Withdraw addr={id} contractAddress={id} />
                                    </div>
                                ))}
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <div><b>Deposited:</b> <BalanceDeposit addr={id} /></div>
                        <div><b>Share:</b> <BalanceShare addr={id} /></div>
                    </Card>
                </Col>
            </Row>
        </div>
    );    
}
