import {useUserDepositedUnderlyingUsdc} from '@src/common/hooks/useUserDepositedUnderlyingUsdc';
import {Balance} from '../Balance';

export function BalanceDeposit({addr}) {
    const {loading, dataFormatted} = useUserDepositedUnderlyingUsdc(addr);

    return (
        <div>
            <Balance loading={loading} data={dataFormatted} />
            $
        </div>
    );
}
