import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useVaults} from '@src/data-layer/vaults';
import {Row, Col} from 'antd';
import {Assets} from '@src/components/Assets';
import {VaultInfo} from './VaultInfo';
import {Tabs} from './Tabs';

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
                    <Tabs />
                </Col>
                <Col>
                    <VaultInfo />
                </Col>
            </Row>
        </div>
    );    
}
