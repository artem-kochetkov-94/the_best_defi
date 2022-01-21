import {useBalanceWithInvestment} from '@src/common/hooks/useBalanceWithInvestment';
import {Balance} from '../Balance';

export function BalanceDeposit({addr}) {
    const {loading, balance} = useBalanceWithInvestment(addr);

    return <Balance loading={loading} data={balance} />
}
