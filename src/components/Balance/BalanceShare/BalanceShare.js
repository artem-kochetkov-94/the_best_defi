
import {useBalanceOf} from '@src/common/hooks/useBalanceOf';
import {Balance} from '../Balance';

export function BalanceShare({addr}) {
    const {loading, balanceFormatted} = useBalanceOf(addr);

    return <Balance loading={loading} data={balanceFormatted} />
}
