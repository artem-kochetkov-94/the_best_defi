import React from 'react';
// import {Deposit} from '@src/components/Deposit';

export function Vault({vault}) {
    return (
        <div style={{marginBottom: 20}}>
          <div>active {vault.active ? 'true' : 'false'}</div>
          <div>addr {vault.addr}</div>
          <div>assets {JSON.stringify(vault.assets)}</div>
          {/* <div>buyBackRatio {vault.buyBackRatio}</div> */}
          {/* <div>created {vault.created}</div> */}
          {/* <div>decimals {vault.decimals}</div> */}
          {/* <div>duration {vault.duration}</div> */}
          {/* <div>earned {vault.earned}</div> */}
          <div>name {vault.name}</div>
          {/* <div>platform {vault.platform}</div> */}
          <div>ppfs {vault.ppfs}</div>
          <div>ppfsApr {vault.ppfsApr}</div>
          <div>ppfsAprMonth {vault.ppfsAprMonth}</div>
          {/* <div>ppfsAprYear {vault.ppfsAprYear}</div> */}
          {/* <div>rewardTokens {JSON.stringify(vault.rewardTokens)}</div> */}
          {/* <div>rewardTokensBal {JSON.stringify(vault.rewardTokensBal)}</div> */}
          {/* <div>rewardTokensBalUsdc {JSON.stringify(vault.rewardTokensBalUsdc)}</div> */}
          {/* <div>rewardsApr {JSON.stringify(vault.rewardsApr)}</div> */}
          {/* <div>strategy {vault.strategy}</div> */}
          {/* <div>strategyCreated {vault.strategyCreated}</div> */}
          {/* <div>strategyOnPause {vault.strategyOnPause}</div> */}
          {/* <div>strategyRewards {JSON.stringify(vault.strategyRewards)}</div> */}
          {/* <div>swapFeesAprDaily {vault.swapFeesAprDaily}</div> */}
          {/* <div>swapFeesAprMonthly {vault.swapFeesAprMonthly}</div> */}
          {/* <div>swapFeesAprYearly {vault.swapFeesAprYearly}</div> */}
          {/* <div>tvl {vault.tvl}</div> */}
          {/* <div>tvlUsdc {vault.tvlUsdc}</div> */}
          {/* <div>underlying {vault.underlying}</div> */}
          {/* <div>underlyingVaults {JSON.stringify(vault.underlyingVaults)}</div> */}
          {/* <div>underlyingVaultsAddresses {JSON.stringify(vault.underlyingVaultsAddresses)}</div> */}
          {/* <div>users {vault.users}</div> */}
          {/* <Deposit /> */}
        </div>
    );
}