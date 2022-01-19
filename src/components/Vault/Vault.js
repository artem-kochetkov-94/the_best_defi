import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useVaults} from '@src/data-layer/vaults';
import {BalanceDeposit} from '@src/components/BalanceDeposit';
import {BalanceShare} from '@src/components/BalanceShare';
import {Row, Col, Card} from 'antd';

export function Vault() {
    let {id} = useParams();
    const {vaultByIdSelector} = useVaults();

    const vault = useSelector(state => vaultByIdSelector(state, {id}));

    console.log('vault', vault);

    return (
        <Row gutter={30}>
            <Col>
                <Card>
                    {vault.assets.map(asset => (
                        <div>
                            <div>{asset}</div>
                            Balance: <BalanceShare addr={asset} />
                        </div>
                    ))}
                </Card>
            </Col>
            <Col>
                <Card>
                    <div><b>Deposited:</b> <BalanceDeposit addr={id} /></div>
                    <div><b>Share:</b> <BalanceShare addr={id} /></div>
                </Card>
            </Col>
        </Row>
    );
}
