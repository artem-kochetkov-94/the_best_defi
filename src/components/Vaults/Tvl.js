import {useTotalTvlUsdc} from '@src/common/hooks/useTotalTvlUsdc';
import {Balance} from '@src/components/Balance';

export function Tvl({addr}) {
    const {dataFormatted, loading} = useTotalTvlUsdc(addr);

    return (
        <div>
            price: <Balance data={dataFormatted} loading={loading} />
            $
        </div>
    );
}