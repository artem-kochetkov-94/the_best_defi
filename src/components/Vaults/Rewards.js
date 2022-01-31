import {Balance} from '@src/components/Balance';
import {useUserRewardsBoostUsdc} from '@src/common/hooks/useUserRewardsBoostUsdc';

export function Rewards({rewardTokens}) {
    const {dataFormatted, loading} = useUserRewardsBoostUsdc(rewardTokens[0])

    return <Balance data={dataFormatted} loading={loading} />
}