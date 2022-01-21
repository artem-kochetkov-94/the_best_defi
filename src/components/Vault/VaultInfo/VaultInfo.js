import {useParams} from 'react-router-dom';
import {Card} from 'antd';
import {BalanceDeposit} from '@src/components/Balance';
import {BalanceShare} from '@src/components/Balance';

export function VaultInfo() {
    let {id} = useParams();

    return (
        <Card>
            <div><b>Deposited:</b> <BalanceDeposit addr={id} /></div>
            <div><b>Share:</b> <BalanceShare addr={id} /></div>
        </Card>
    )
}